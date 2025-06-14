"use client"

import { Card, CardHeader,  CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useTransformedSalesData } from "./useSalesData"

export default function SalesTable() {
  const { sales, isLoading, error } = useTransformedSalesData()

  if (isLoading) {
    return (
     <>
          <div className="text-xl text-[#272727] font-medium">Sales History</div>
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
     </>
    )
  }

  if (error) {
    return (
     <>
          <div className="text-xl text-[#272727] font-medium">Sales History</div>
      <Card>
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Failed to load sales data. Please try again later.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
     </>
    )
  }

  return (
    <>
        <div className="text-xl text-[#272727] font-medium">Sales History</div>
    <Card>
      <CardHeader>
      </CardHeader>
      <CardContent>
        {sales.length === 0 ? (
          <div className="text-center  text-muted-foreground">No sales data available</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="text-xl text-[#272727] font-">Order Code</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Product</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Customer</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Quantity</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Date</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Total Amount</TableHead>
                <TableHead className="text-xl text-[#272727] font-">Admin <span className="text-[#039B06]">Charge (4.99%)</span></TableHead>
                <TableHead className="text-xl text-[#272727] font-">My Revenue</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale, index) => (
                <TableRow className="h-[70px]" key={`${sale.orderId}-${sale.productId}-${index}`}>
                  <TableCell className="text-xl text-[#131313] font-semibold">{sale.orderCode}</TableCell>
                  <TableCell>
                    <div>
                      <div className="text-xl text-[#131313] font-semibold">{sale.productTitle}</div>
                     
                    </div>
                  </TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">{sale.customer}</TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">{sale.quantity} box</TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">{sale.date}</TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">${sale.totalSellAmount.toFixed(2)}</TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">${sale.adminCharge.toFixed(2)}</TableCell>
                  <TableCell className="text-xl text-[#131313] font-semibold">${sale.myRevenue.toFixed(2)}</TableCell>
              
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
    </>
  )
}
