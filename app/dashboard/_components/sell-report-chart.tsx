import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SellReportChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sell Report</CardTitle>
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
        <div className="h-64 flex items-center justify-center text-muted-foreground">
          Chart visualization would go here
        </div>
      </CardContent>
    </Card>
  )
}
