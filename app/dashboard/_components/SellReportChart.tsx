"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

// More comprehensive dummy data for the sales report
const data = [
  { date: "5 Oct", thisMonth: 1.2, lastMonth: 0.5, amount: 12500 },
  { date: "10 Oct", thisMonth: 2.1, lastMonth: 1.3, amount: 21000 },
  { date: "15 Oct", thisMonth: 2.3, lastMonth: 1.8, amount: 23000 },
  { date: "20 Oct", thisMonth: 3.2, lastMonth: 2.5, amount: 32000 },
  { date: "25 Oct", thisMonth: 2.1, lastMonth: 2.2, amount: 21000 },
  { date: "27 Oct", thisMonth: 1.5, lastMonth: 2.8, amount: 15000 },
  { date: "01 Oct", thisMonth: 3.1, lastMonth: 2.1, amount: 31000 },
]

export default function SellReportChart() {
  const formatTooltipValue = (value: number) => `${value}k`

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          domain={[0, 4]}
          ticks={[0, 1, 2, 3, 4]}
          tickFormatter={(value) => `${value}k`}
        />
        <Tooltip
          formatter={formatTooltipValue}
          labelFormatter={(label) => `Date: ${label}`}
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        />
        <Line
          name="This Month"
          type="monotone"
          dataKey="thisMonth"
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ stroke: "#22c55e", strokeWidth: 2, r: 4, fill: "white" }}
          activeDot={{ r: 6, fill: "#22c55e" }}
        />
        <Line
          name="Last Month"
          type="monotone"
          dataKey="lastMonth"
          stroke="#60a5fa"
          strokeWidth={2}
          dot={{ stroke: "#60a5fa", strokeWidth: 2, r: 4, fill: "white" }}
          activeDot={{ r: 6, fill: "#60a5fa" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
