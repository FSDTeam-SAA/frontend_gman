"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircleUser, Heart, Menu, MessageCircle, ShoppingCart, X } from "lucide-react"
import { cn } from "@/lib/utils"
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Become a Seller", href: "/become-seller" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ].filter(link => link.href !== "/become-seller" || !isLoggedIn || (isLoggedIn && userRole !== "seller"))

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    toast.success("Logged out successfully!")
    router.push("/")
  }

  const handleBecomeSellerClick = (href: string) => {
    if (!isLoggedIn) {
      router.push("/login")
      return
    }
    router.push(href)
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

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-[90px] items-center justify-between px-2 lg:px-0">
        {/* Logo - Always visible */}
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
            <span className="text-[6px] font-medium leading-[120%] space-x-[5%] text-[#8F8F8F]">Fresh & Healthy</span>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on sm/md */}
        <nav className="hidden lg:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "/become-seller") {
                      e.preventDefault()
                      handleBecomeSellerClick(link.href)
                    }
                  }}
                  className={`text-base font-medium transition-colors relative ${
                    isActive(link.href)
                      ? "text-[#039B06] font-semibold"
                      : "text-[#272727] hover:text-[#039B06] hover:font-semibold"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Desktop user actions - Hidden on sm/md */}
          <div className="hidden lg:flex items-center gap-6">
            {isLoggedIn && userRole === "user" && (
              <>
                <Link href="/messages" className="flex" aria-label="Messages">
                  <MessageCircle className="h-6 w-6 hover:text-[#039B06]" />
                </Link>
                <Link href="/cart" aria-label="Shopping cart">
                  <ShoppingCart className="h-6 w-6 hover:text-[#039B06]" />
                </Link>
              </>
            )}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0">
                    <CircleUser className="h-8 w-8 text-[#039B06]" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href={getProfileLink()} className="w-full cursor-pointer hover:text-[#039B06]">
                      <User className="mr-2 h-4 w-4 text-[#039B06]" />
                      {userRole === "admin" || userRole === "seller" ? "Dashboard" : "Profile"}
                    </Link>
                  </DropdownMenuItem>
                  {userRole === "user" && (
                    <DropdownMenuItem asChild>
                      <Link href={getOrderHistoryLink()} className="w-full cursor-pointer hover:text-[#039B06]">
                        <ShoppingBag className="mr-2 h-4 w-4 text-[#039B06]" />
                        Order history
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer focus:bg-red-50 focus:text-red-500 hover:text-red-500"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4 text-red-600" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/sign-up">
                <Button variant="default" className="bg-[#014A14] hover:bg-[#039B06] text-white cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              size="sm"
              className="h-[40px] text-white bg-[#039B06] hover:bg-[#028a05] hover:text-white cursor-pointer"
              onClick={() => router.push("/donate")}
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button - Visible on sm/md only */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-[30px] h-[30px]" /> : <Menu className="!w-[30px] !h-[30px]" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobile Menu Content */}
      <nav
        className={cn(
          "absolute left-0 right-0 top-0 z-50 bg-background shadow-lg transition-all duration-300 lg:hidden",
          isMenuOpen ? "flex translate-y-0 opacity-100" : "hidden -translate-y-2 opacity-0",
        )}
        aria-label="Mobile navigation"
      >
        <div className="w-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
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
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="!w-[30px] !h-[30px]" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="p-6">
            {/* Navigation Links */}
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "/become-seller") {
                        e.preventDefault()
                        handleBecomeSellerClick(link.href)
                        setIsMenuOpen(false)
                      } else {
                        setIsMenuOpen(false)
                      }
                    }}
                    className={`block text-lg font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-[#039B06] font-semibold"
                        : "text-[#272727] hover:text-[#039B06] hover:font-semibold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile User Actions */}
            <div className="border-t pt-4">
              {isLoggedIn ? (
                <div className="space-y-4">
                  {userRole === "user" && (
                    <div className="flex gap-4 mb-4">
                      <Link
                        href="/messages"
                        className="flex items-center gap-2 text-[#272727] hover:text-[#039B06]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MessageCircle className="h-5 w-5" />
                        Messages
                      </Link>
                      <Link
                        href="/cart"
                        className="flex items-center gap-2 text-[#272727] hover:text-[#039B06]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Cart
                      </Link>
                    </div>
                  )}
                  <Link
                    href={getProfileLink()}
                    className="flex items-center gap-2 text-[#272727] hover:text-[#039B06] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    {userRole === "admin" || userRole === "seller" ? "Dashboard" : "Profile"}
                  </Link>
                  {userRole === "user" && (
                    <Link
                      href={getOrderHistoryLink()}
                      className="flex items-center gap-2 text-[#272727] hover:text-[#039B06] py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Order History
                    </Link>
                  )}
                  <button
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 py-2"
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                  >
                    <LogOut className="h-5 w-5" />
                    Log out
                  </button>
                </div>
              ) : (
                <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="default" className="w-full bg-[#014A14] hover:bg-[#039B06] text-white mb-4">
                    Sign Up
                  </Button>
                </Link>
              )}
              <Button
                variant="outline"
                className="w-full text-white bg-[#039B06] hover:bg-[#028a05] hover:text-white"
                onClick={() => {
                  router.push("/donate")
                  setIsMenuOpen(false)
                }}
              >
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}