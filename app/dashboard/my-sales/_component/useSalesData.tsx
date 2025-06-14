import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

interface Product {
  _id: string
  title: string
  price: number
  quantity: string
  code: string
}

interface OrderProduct {
  product: Product
  quantity: number
  price: number
  totalPrice: number
  _id: string
}

interface Customer {
  _id: string
  name: string
  email: string
  username: string
  phone: string
}

interface Order {
  _id: string
  farm: string
  customer: Customer
  products: OrderProduct[]
  totalPrice: number
  status: string
  paymentStatus: string
  code: string
  date: string
  createdAt: string
  updatedAt: string
  totalAmount: number
  adminCommission: number
  sellerRevenue: number
}

interface ApiResponse {
  success: boolean
  message: string
  data: Order[]
}

interface TransformedSale {
  orderId: string
  orderCode: string
  productId: string
  productTitle: string
  quantity: number
  date: string
  totalSellAmount: number
  adminCharge: number
  myRevenue: number
  customer: string
  status: string
  paymentStatus: string
}

const fetchSalesData = async (token: string): Promise<ApiResponse> => {
    console.log(token)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/vendor`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch sales data")
  }

  return response.json()
}

export const useSalesData = () => {
  const { data: session } = useSession()

  return useQuery({
    queryKey: ["sales-data"],
    queryFn: () => fetchSalesData(session?.accessToken as string),
    enabled: !!session?.accessToken,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  })
}

export const useTransformedSalesData = () => {
  const { data, isLoading, error } = useSalesData()

  const transformedData: TransformedSale[] = []
  let totalSales = 0

  if (data?.success && data.data) {
    data.data.forEach((order) => {
      order.products.forEach((productItem) => {
        transformedData.push({
          orderId: order._id,
          orderCode: order.code,
          productId: productItem.product.code,
          productTitle: productItem.product.title,
          quantity: productItem.quantity,
          date: new Date(order.date).toLocaleString(),
          totalSellAmount: productItem.totalPrice,
          adminCharge: (productItem.totalPrice * order.adminCommission) / order.totalAmount,
          myRevenue: productItem.totalPrice - (productItem.totalPrice * order.adminCommission) / order.totalAmount,
          customer: order.customer.name,
          status: order.status,
          paymentStatus: order.paymentStatus,
        })
      })
      totalSales += order.sellerRevenue
    })
  }

  return {
    sales: transformedData,
    totalSales,
    isLoading,
    error,
    rawData: data,
  }
}
