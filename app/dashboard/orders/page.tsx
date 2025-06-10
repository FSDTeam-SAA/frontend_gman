"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  customer: string
  product: string
  orderId: string
  totalPrice: number
  date: string
  status: string
  image: string
}

export default function OrdersList() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setOrders([
        {
          id: "1",
          customer: "1140",
          product: "Fresh Fruits, California",
          orderId: "275936",
          totalPrice: 250,
          date: "05/31/2025 03:18pm",
          status: "Shipping",
          image: "/placeholder.svg?height=64&width=64",
        },
        // Add more mock orders...
      ])
      setLoading(false)
    }

    fetchOrders()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales History</CardTitle>
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
                    {order.product}
                  </div>
                </TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>${order.totalPrice}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {order.status}
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
