import { Package, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsCard from "./_components/StatsCard";


import SellReportChart from "./_components/SellReportChart";
import ProductsReportChart from "./_components/ProductsReportChart";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div>
        <h1 className="text-xl font-semibold">Overview </h1>
        <p className="text-sm text-muted-foreground">Dashboard</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatsCard
          title="Total Sell"
          value="132,570"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="up"
          color="green"
        />

        <StatsCard
          title="Live Product"
          value="08"
          icon={<Package className="h-5 w-5" />}
          color="orange"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Sell Report</h3>
            <Tabs defaultValue="month">
              <TabsList className="bg-slate-100">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month" className="bg-green-500 text-white">
                  Month
                </TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs">This Month</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-xs">Last Month</span>
            </div>
          </div>

          <SellReportChart/>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Total New Products Report</h3>
            <Tabs defaultValue="month">
              <TabsList className="bg-slate-100">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month" className="bg-green-500 text-white">
                  Month
                </TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                <span className="text-xs">This day</span>
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

            <div className="flex-1 flex justify-center">
              <ProductsReportChart />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
