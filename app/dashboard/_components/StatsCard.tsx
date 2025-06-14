import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  trend?: "up" | "down"
  color?: "green" | "orange" | "blue" | "red"
}

export default function StatsCard({ title, value, icon,color = "green" }: StatsCardProps) {
  const colorClasses = {
    green: "text-green-600",
    orange: "text-orange-500",
    blue: "text-blue-600",
    red: "text-red-600",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className={cn("text-2xl font-bold mt-1", colorClasses[color])}>{value}</p>
          </div>
          <div className="bg-slate-100 p-3 rounded-md">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}
