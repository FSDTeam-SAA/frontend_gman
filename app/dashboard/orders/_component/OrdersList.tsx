"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Product {
  _id: string
  title: string
  price: number
  thumbnail: {
    url: string
  }
}

interface OrderProduct {
  product: Product
  quantity: number
  price: number
  totalPrice: number
}

interface ApiOrder {
  _id: string
  products: OrderProduct[]
  totalPrice: number
  status: string
  paymentStatus: string
  code: string
  date: string
  customer: string
}

interface ApiResponse {
  success: boolean
  message: string
  data: ApiOrder[]
}

interface TransformedOrder {
  id: string
  customer: string
  product: string
  orderId: string
  totalPrice: number
  date: string
  status: string
  image: string
  products: OrderProduct[]
}



const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "secondary"
    case "confirmed":
    case "shipping":
      return "default"
    case "delivered":
      return "default"
    case "cancelled":
      return "destructive"
    default:
      return "secondary"
  }
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "confirmed":
      return "bg-blue-100 text-blue-800"
    case "shipping":
      return "bg-green-100 text-green-800"
    case "delivered":
      return "bg-green-100 text-green-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrdersList() {
  const [shouldFetch, setShouldFetch] = useState(false)
  const session = useSession()
  const token =  session?.data?.accessToken
  


  const fetchOrders = async (): Promise<TransformedOrder[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/my`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch orders")
  }

  const result: ApiResponse = await response.json()

  // Transform the API response to match component expectations
  return result.data.map((order) => ({
    id: order._id,
    customer: order.customer,
    product:
      order.products.length > 1
        ? `${order.products[0].product.title} (+${order.products.length - 1} more)`
        : order.products[0]?.product.title || "No products",
    orderId: order.code,
    totalPrice: order.totalPrice,
    date: new Date(order.date).toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    status: order.status,
    image: order.products[0]?.product.thumbnail.url || "/placeholder.svg?height=64&width=64",
    products: order.products,
  }))
}

  const {
    data: orders = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchOrders(),
   
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })

  const handleLoadOrders = () => {
    setShouldFetch(true)
  }

  if (!session) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-muted-foreground">Please sign in to view your orders.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!shouldFetch) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Click to load your order history</p>
            <Button onClick={handleLoadOrders}>Load Orders</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
            <span className="ml-2 text-muted-foreground">Loading orders...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load orders. Please try again.</p>
            <Button onClick={() => refetch()} variant="outline">
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-muted-foreground">No orders found.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sales History</CardTitle>
        <Button onClick={() => refetch()} variant="outline" size="sm">
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={order.image || "/placeholder.svg"}
                      alt={order.product}
                      width={48}
                      height={48}
                      className="rounded-md object-cover"
                    />
                    <div>
                      <div className="font-medium">{order.product}</div>
                      {order.products.length > 1 && (
                        <div className="text-sm text-muted-foreground">{order.products.length} items</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono">{order.orderId}</TableCell>
                <TableCell className="font-semibold">${order.totalPrice}</TableCell>
                <TableCell className="text-sm">{order.date}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status)} className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
