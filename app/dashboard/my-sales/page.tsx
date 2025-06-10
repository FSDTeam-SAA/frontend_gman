"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Sale {
  productId: string
  quantity: string
  date: string
  totalSellAmount: number
  adminCharge: number
  myRevenue: number
}

export default function SalesPage() {
  const [sales, setSales] = useState<Sale[]>([
    {
      productId: "45550",
      quantity: "100 KG / 1 box",
      date: "05/31/2025 03:18pm",
      totalSellAmount: 420,
      adminCharge: 21,
      myRevenue: 399,
    },
    // Add more mock sales...
  ])

  console.log(setSales)

  const totalSales = 132570

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Sales</h1>
          <p className="text-muted-foreground">Dashboard › My Sales</p>
        </div>
      </div>

      <Card className="bg-green-600 text-white">
        <CardContent className="p-6">
          <div>
            <p className="text-sm opacity-90">Total Sales</p>
            <p className="text-3xl font-bold">${totalSales.toLocaleString()}.00</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product ID</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total Sell Amount</TableHead>
                <TableHead>Admin Charge (4.99%)</TableHead>
                <TableHead>My Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell>{sale.productId}</TableCell>
                  <TableCell>{sale.quantity}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>${sale.totalSellAmount}</TableCell>
                  <TableCell>${sale.adminCharge}</TableCell>
                  <TableCell>${sale.myRevenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
