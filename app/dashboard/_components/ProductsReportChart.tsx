"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

// Detailed dummy data for product reports
const data = [
  { name: "This Day", value: 30, color: "#8b5cf6", products: 2 },
  { name: "This Week", value: 60, color: "#0d9488", products: 5 },
  { name: "This Month", value: 85, color: "#22c55e", products: 8 },
]


// eslint-disable-next-line
// eslint-disable-next-line
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">Products: {payload[0].payload.products}</p>
        <p className="text-sm">Completion: {payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function ProductsReportChart() {
  return (
    <ResponsiveContainer width={200} height={200}>
      <PieChart>
        {/* Background circles */}
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="70%"
          fill="#f3f4f6"
          stroke="none"
          dataKey="value"
        />
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius="75%"
          outerRadius="85%"
          fill="#f3f4f6"
          stroke="none"
          dataKey="value"
        />
        <Pie
          data={[{ value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius="90%"
          outerRadius="100%"
          fill="#f3f4f6"
          stroke="none"
          dataKey="value"
        />

        {/* Data circles */}
        <Pie
          data={[
            { ...data[0], name: data[0].name, products: data[0].products },
            { value: 100 - data[0].value, name: "Remaining", products: 0 },
          ]}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius="90%"
          outerRadius="100%"
          dataKey="value"
          strokeWidth={0}
          nameKey="name"
        >
          <Cell fill={data[0].color} />
          <Cell fill="transparent" />
        </Pie>
        <Pie
          data={[
            { ...data[1], name: data[1].name, products: data[1].products },
            { value: 100 - data[1].value, name: "Remaining", products: 0 },
          ]}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius="75%"
          outerRadius="85%"
          dataKey="value"
          strokeWidth={0}
          nameKey="name"
        >
          <Cell fill={data[1].color} />
          <Cell fill="transparent" />
        </Pie>
        <Pie
          data={[
            { ...data[2], name: data[2].name, products: data[2].products },
            { value: 100 - data[2].value, name: "Remaining", products: 0 },
          ]}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius="60%"
          outerRadius="70%"
          dataKey="value"
          strokeWidth={0}
          nameKey="name"
        >
          <Cell fill={data[2].color} />
          <Cell fill="transparent" />
        </Pie>

        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}
