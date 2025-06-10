"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-[#014A14] px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-3 ml-auto">
        <span className="text-sm font-medium">Mr. Raja</span>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
