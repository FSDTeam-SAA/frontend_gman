"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Menu, MessageCircle, ShoppingCart, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, ShoppingBag, User } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoggedIn = true // This would be determined by your auth state

  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Become a Seller", href: "/become-seller" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-[90px] items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/asset/logo.png" width={40} height={53} alt="Table Fresh Logo" className="h-[53px] w-[40px]" />
            <div className="flex flex-col">
              <div className="">
                <p className="text-[16px] font-semibold text-black">TABLE</p>
                <p className="text-[16px] font-normal text-[#039B06]">FRESH</p>
              </div>

              <span className="text-[6px] font-medium leading-[120%] space-x-[5%] text-[#8F8F8F]">Fresh & Healthy</span>
            </div>
          </Link>
        </div>

        <nav
          className={cn(
            "absolute left-0 right-0 top-16 z-50 bg-background p-4 shadow-lg md:static md:p-0 md:shadow-none",
            isMenuOpen ? "flex" : "hidden md:flex",
          )}
        >
          <ul className="flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-base font-medium transition-colors relative ${
                    isActive(link.href)
                      ? "text-[#039B06] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-[#039B06]"
                      : "text-[#272727] after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-[#039B06] hover:after:w-full hover:after:left-0 hover:text-[#039B06] hover:font-semibold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Messages</span>
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 border border-[#039B06] cursor-pointer">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>BE</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/buyer-profile" className="w-full cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/buyer-oreder-history" className="w-full cursor-pointer">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Order history
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-up">
              <Button variant="default" className="bg-green-800 hover:bg-green-900">
                Sign Up
              </Button>
            </Link>
          )}
          <Button variant="outline" size="sm" className="hidden md:flex  text-white bg-[#039B06]">
            <Heart className="mr-2 h-4 w-4" />
            Donate
          </Button>
        </div>
      </div>
    </header>
  )
}
