"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import * as Tabs from "@radix-ui/react-tabs";

// Detailed dummy data for product reports
const data = [
  { name: "This Day", value: 30, color: "#8b5cf6", products: 2 },
  { name: "This Week", value: 60, color: "#0d9488", products: 5 },
  { name: "This Month", value: 85, color: "#22c55e", products: 8 },
];

// Custom tooltip component for the pie chart
// eslint-disable-next-line
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">Products: {payload[0].payload.products}</p>
        <p className="text-sm">Completion: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function ProductsReportChart() {
  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 space-y-2">
          <h3 className="font-medium text-lg">Total New Products Report</h3>

          <Tabs.Root defaultValue="month" className="">
            <Tabs.List className="bg-slate-100 rounded-md grid grid-cols-4 gap-4 p-1">
              <Tabs.Trigger
                value="day"
                className="px-3 py-1 text-sm rounded-md data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Day
              </Tabs.Trigger>
              <Tabs.Trigger
                value="week"
                className="px-3 py-1 text-sm rounded-md data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Week
              </Tabs.Trigger>
              <Tabs.Trigger
                value="month"
                className="px-3 py-1 text-sm rounded-md data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Month
              </Tabs.Trigger>
              <Tabs.Trigger
                value="year"
                className="px-3 py-1 text-sm rounded-md data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Year
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <span className="text-xs">This Day</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                <span className="text-xs">This Week</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs">This Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px]">
        <ResponsiveContainer width={300} height={300}>
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
      </div>
    </div>
  );
}
