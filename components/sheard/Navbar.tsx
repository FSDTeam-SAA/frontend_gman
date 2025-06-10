"use client"

import { useState, useEffect } from "react"
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
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { signOut, useSession } from "next-auth/react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  const isLoggedIn = status === "authenticated"
  const userRole = session?.user?.role || null
  const userName = session?.user?.name || ""

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
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    toast.success("Logged out successfully!")
    router.push("/")
  }

  const getProfileLink = () => {
    switch (userRole) {
      case "admin":
      case "seller":
        return "/dashboard"
      default:
        return "/buyer-profile"
    }
  }

  const getOrderHistoryLink = () => {
    return userRole === "user" ? "/buyer-order-history" : "/dashboard"
  }

  const getUserInitials = () => {
    return (
      userName
        .split(" ")
        .map((name) => name.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2) || "U"
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-[90px] items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/asset/logo.png"
              width={40}
              height={53}
              alt="Table Fresh Logo"
              className="h-[53px] w-[40px]"
              priority
            />
            <div className="flex flex-col">
              <div className="">
                <p className="text-[16px] font-semibold text-black">TABLE</p>
                <p className="text-[16px] font-normal text-[#039B06]">FRESH</p>
              </div>
              <span className="text-[6px] font-medium leading-[120%] space-x-[5%] text-[#8F8F8F]">
                Fresh & Healthy
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu with backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 md:hidden" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <nav
          className={cn(
            "absolute left-0 right-0 top-[90px] z-50 bg-background p-4 shadow-lg transition-all duration-300 md:static md:top-0 md:flex md:p-0 md:shadow-none",
            isMenuOpen ? "flex translate-y-0 opacity-100" : "hidden -translate-y-2 opacity-0 md:flex md:translate-y-0 md:opacity-100"
          )}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col items-start gap-6 md:flex-row md:items-center">
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
          <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Messages">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Link href="/cart" aria-label="Shopping cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#039B06] focus:ring-offset-2">
                  <Avatar className="h-8 w-8 border border-[#039B06]">
                    <AvatarImage src={session.user?.image || "/placeholder.svg"} alt={userName} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href={getProfileLink()} className="w-full cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    {userRole === "admin" || userRole === "seller" ? "Dashboard" : "Profile"}
                  </Link>
                </DropdownMenuItem>
                {userRole === "user" && (
                  <DropdownMenuItem asChild>
                    <Link href={getOrderHistoryLink()} className="w-full cursor-pointer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Order history
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer focus:bg-red-50 focus:text-red-500" 
                  onClick={handleLogout}
                >
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
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex text-white bg-[#039B06] hover:bg-[#028a05]"
            onClick={() => router.push("/donate")}
          >
            <Heart className="mr-2 h-4 w-4" />
            Donate
          </Button>
        </div>
      </div>
    </header>
  )
}