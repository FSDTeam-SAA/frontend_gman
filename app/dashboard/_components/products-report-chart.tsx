import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductsReportChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total New Products Report</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Day
          </Button>
          <Button variant="outline" size="sm">
            Week
          </Button>
          <Button variant="default" size="sm" className="bg-green-600">
            Month
          </Button>
          <Button variant="outline" size="sm">
            Year
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-8 border-green-600 border-t-transparent animate-spin"></div>
            <div className="absolute inset-4 rounded-full border-4 border-blue-400 border-t-transparent"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
