"use client"
import SalesTable from "./_component/SalesTable"

export default function SalesPage() {


  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Sales</h1>
          <p className="text-muted-foreground">Dashboard › My Sales</p>
        </div>
      </div>

      {/* <Card className="bg-green-600 text-white">
        <CardContent className="p-6">
          <div>
            <p className="text-sm opacity-90">Total Sales Revenue</p>
            {isLoading ? (
              <Skeleton className="h-8 w-32 bg-green-500" />
            ) : (
              <p className="text-3xl font-bold">${totalSales.toFixed(2)}</p>
            )}
          </div>
        </CardContent>
      </Card> */}
      <SalesTable />
    </div>
  )
}
