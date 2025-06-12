"use client"

import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import OrderStatusBadge from "./OrderStatusBadge"
import { useSession } from "next-auth/react"
import OrderDetailsModal from "./OrderDetailsModal"

interface ProductDetails {
  _id: string
  title: string
  price: number
  thumbnail: {
    url: string
  }
}

interface OrderProduct {
  product: ProductDetails
  quantity: number
  price: number
  totalPrice: number
  _id: string
}

interface Order {
  _id: string
  products: OrderProduct[]
  totalPrice: number
  status: "pending" | "delivered" | "cancelled"
  paymentStatus: string
  date: string
  code: string
}

interface ApiResponse {
  success: boolean
  message: string
  data: Order[]
}

export default function OrderHistory() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ordersPerPage = 5
  const session = useSession()
  const token = session.data?.accessToken

  const fetchOrders = async (): Promise<ApiResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch orders")
    }
    return response.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  })

  const handleSeeDetails = (order: Order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedOrder(null)
  }

  if (isLoading) {
    return <OrderHistorySkeleton />
  }

  if (isError) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-red-600">Error loading orders</h2>
        <p className="text-gray-600 mt-2">There was a problem fetching your order history. Please try again later.</p>
      </div>
    )
  }

  const orders = data?.data || []
  const totalOrders = orders.length
  const totalPages = Math.ceil(totalOrders / ordersPerPage)

  // Get current orders
  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-[#272727] mb-6">Order History</h1>

      <div className="w-full overflow-x-auto rounded-lg border">
        <table className="w-full shadow-lg">
          <thead>
            <tr className="bg-[#FFFFFF] ">
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Product Names</th>
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Total Items</th>
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Total Price</th>
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Date</th>
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Status</th>
              <th className="px-4 py-3 text-left font-medium text-base text-[#272727]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-[#FFFFFF]">
            {currentOrders.map((order) => {
              const totalItems = order.products.reduce((sum, item) => sum + item.quantity, 0)
              const productNames = order.products.map((item) => item.product.title).join(", ")

              return (
                <tr key={order._id} className="hover:bg-muted/30">
                  <td className="px-4 py-4">
                    <div className="max-w-xs">
                      <p className="truncate" title={productNames}>
                        {productNames}
                      </p>
                      {order.products.length > 1 && (
                        <p className="text-xs text-gray-500 mt-1">{order.products.length} different products</p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">{totalItems} Items</td>
                  <td className="px-4 py-4">${order.totalPrice}</td>
                  <td className="px-4 py-4">{format(new Date(order.date), "MM/dd/yyyy")}</td>
                  <td className="px-4 py-4">
                    <OrderStatusBadge status={order.status} />
                  </td>
                  <td className="px-4 py-4">
                    <Button
                      variant="link"
                      className="text-[#027405] text-sm font-normal p-0 h-auto"
                      onClick={() => handleSeeDetails(order)}
                    >
                      See Details
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      <OrderDetailsModal order={selectedOrder} isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="text-muted-foreground">
            Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, totalOrders)} of {totalOrders} results
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
              const pageNumber = index + 1
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </Button>
              )
            })}

            {totalPages > 5 && (
              <>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm" onClick={() => paginate(totalPages)}>
                  {totalPages}
                </Button>
              </>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function OrderHistorySkeleton() {
  return (
    <div className="w-full">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="w-full overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="px-4 py-3 text-left font-medium">Product Names</th>
              <th className="px-4 py-3 text-left font-medium">Total Items</th>
              <th className="px-4 py-3 text-left font-medium">Total Price</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td className="px-4 py-4">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="px-4 py-4">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="px-4 py-4">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="px-4 py-4">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="px-4 py-4">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>
                <td className="px-4 py-4">
                  <Skeleton className="h-4 w-20" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
