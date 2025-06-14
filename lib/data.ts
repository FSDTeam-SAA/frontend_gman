// Dummy data for the dashboard

// Sales data by month
export const monthlySalesData = [
  { date: "5 Oct", thisMonth: 1.2, lastMonth: 0.5, amount: 12500 },
  { date: "10 Oct", thisMonth: 2.1, lastMonth: 1.3, amount: 21000 },
  { date: "15 Oct", thisMonth: 2.3, lastMonth: 1.8, amount: 23000 },
  { date: "20 Oct", thisMonth: 3.2, lastMonth: 2.5, amount: 32000 },
  { date: "25 Oct", thisMonth: 2.1, lastMonth: 2.2, amount: 21000 },
  { date: "27 Oct", thisMonth: 1.5, lastMonth: 2.8, amount: 15000 },
  { date: "01 Oct", thisMonth: 3.1, lastMonth: 2.1, amount: 31000 },
]

// Sales data by week
export const weeklySalesData = [
  { date: "Mon", thisWeek: 0.8, lastWeek: 0.6, amount: 8000 },
  { date: "Tue", thisWeek: 1.2, lastWeek: 0.9, amount: 12000 },
  { date: "Wed", thisWeek: 1.8, lastWeek: 1.4, amount: 18000 },
  { date: "Thu", thisWeek: 2.3, lastWeek: 1.9, amount: 23000 },
  { date: "Fri", thisWeek: 2.0, lastWeek: 2.2, amount: 20000 },
  { date: "Sat", thisWeek: 2.5, lastWeek: 1.8, amount: 25000 },
  { date: "Sun", thisWeek: 1.5, lastWeek: 1.2, amount: 15000 },
]

// Sales data by day
export const dailySalesData = [
  { hour: "00:00", today: 0.2, yesterday: 0.1, amount: 2000 },
  { hour: "04:00", today: 0.5, yesterday: 0.3, amount: 5000 },
  { hour: "08:00", today: 1.2, yesterday: 0.8, amount: 12000 },
  { hour: "12:00", today: 2.0, yesterday: 1.5, amount: 20000 },
  { hour: "16:00", today: 1.8, yesterday: 2.0, amount: 18000 },
  { hour: "20:00", today: 1.0, yesterday: 1.2, amount: 10000 },
  { hour: "23:59", today: 0.6, yesterday: 0.5, amount: 6000 },
]

// Sales data by year
export const yearlySalesData = [
  { month: "Jan", thisYear: 15, lastYear: 12, amount: 150000 },
  { month: "Feb", thisYear: 18, lastYear: 14, amount: 180000 },
  { month: "Mar", thisYear: 22, lastYear: 16, amount: 220000 },
  { month: "Apr", thisYear: 25, lastYear: 20, amount: 250000 },
  { month: "May", thisYear: 28, lastYear: 22, amount: 280000 },
  { month: "Jun", thisYear: 30, lastYear: 24, amount: 300000 },
  { month: "Jul", thisYear: 32, lastYear: 26, amount: 320000 },
  { month: "Aug", thisYear: 35, lastYear: 28, amount: 350000 },
  { month: "Sep", thisYear: 38, lastYear: 30, amount: 380000 },
  { month: "Oct", thisYear: 40, lastYear: 32, amount: 400000 },
  { month: "Nov", thisYear: 42, lastYear: 34, amount: 420000 },
  { month: "Dec", thisYear: 45, lastYear: 36, amount: 450000 },
]

// Product data
export const productData = {
  day: { value: 30, products: 2 },
  week: { value: 60, products: 5 },
  month: { value: 85, products: 8 },
  year: { value: 95, products: 42 },
}

// Top selling products
export const topSellingProducts = [
  { id: 1, name: "Wireless Headphones", sales: 1245, revenue: 62250, growth: 12.5 },
  { id: 2, name: "Smart Watch", sales: 986, revenue: 49300, growth: 8.2 },
  { id: 3, name: "Bluetooth Speaker", sales: 864, revenue: 34560, growth: 5.7 },
  { id: 4, name: "Laptop Stand", sales: 753, revenue: 22590, growth: 15.3 },
  { id: 5, name: "USB-C Hub", sales: 642, revenue: 19260, growth: 10.1 },
]

// Recent orders
export const recentOrders = [
  { id: "ORD-7865", customer: "John Doe", date: "2023-10-01", status: "Delivered", amount: 125.99 },
  { id: "ORD-7864", customer: "Jane Smith", date: "2023-10-01", status: "Processing", amount: 85.5 },
  { id: "ORD-7863", customer: "Robert Johnson", date: "2023-09-30", status: "Shipped", amount: 249.99 },
  { id: "ORD-7862", customer: "Emily Davis", date: "2023-09-30", status: "Delivered", amount: 45.25 },
  { id: "ORD-7861", customer: "Michael Brown", date: "2023-09-29", status: "Cancelled", amount: 189.0 },
]
