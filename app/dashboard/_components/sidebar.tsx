"use client"

import { usePathname, useRouter } from "next/navigation"
import { BarChart3, Package, ShoppingCart, MessageSquare, TrendingUp, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    id: "orders",
    label: "Order",
    icon: ShoppingCart,
    href: "/dashboard/orders",
  },
  {
    id: "active-products",
    label: "Active Product List",
    icon: Package,
    href: "/dashboard/active-product",
  },
  {
    id: "pending-products",
    label: "Pending Product List",
    icon: Package,
    href: "/dashboard/pending-product",
  },
  {
    id: "messages",
    label: "Message",
    icon: MessageSquare,
    href: "/dashboard/message",
  },
  {
    id: "sales",
    label: "My Sales",
    icon: TrendingUp,
    href: "/dashboard/my-sales",
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <Sidebar className="!bg-[#014A14] text-white">
      <SidebarHeader className="p-4 !bg-[#014A14]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-green-700 font-bold text-sm">TF</span>
          </div>
          <div>
            <p className="font-bold text-white">TABLE</p>
            <p className="text-xs text-green-200">FRESH</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="!bg-[#014A14]">
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => router.push(item.href)}
                isActive={isActive(item.href)}
                className="text-white hover:bg-green-600 data-[active=true]:bg-green-600"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p- !bg-[#014A14]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white hover:bg-green-600">
              <LogOut className="h-4 w-4" />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
