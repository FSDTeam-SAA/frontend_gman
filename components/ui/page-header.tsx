"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  breadcrumb?: string
  action?: {
    label: string
    href?: string
    variant?: "default" | "outline"
    onClick?: () => void
  }
}

export function PageHeader({ title, breadcrumb, action }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {breadcrumb && <p className="text-muted-foreground">{breadcrumb}</p>}
      </div>
      {action && (
        <Button
          className="bg-[#039B06] hover:bg-[#014A14] cursor-pointer"
          variant={action.variant || "default"}
          onClick={action.onClick}
        >
          <Plus className="h-4 w-4 mr-2" />
          {action.label}
        </Button>
      )}
    </div>
  )
}
