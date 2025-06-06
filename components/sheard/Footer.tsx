"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Become a Seller", href: "/become-seller" },
    { name: "Blog", href: "/blog" },
  ]

  const customerServiceLinks = [
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/asset/logo.png"
                width={40}
                height={53}
                alt="Table Fresh Logo"
                className="h-[53px] w-[40px]"
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
            <p className="text-sm text-muted-foreground">
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-[#039B06] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#039B06] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#039B06] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors relative ${
                      isActive(link.href)
                        ? "text-[#039B06] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-[#039B06]"
                        : "text-[#272727] hover:text-[#039B06] hover:font-semibold after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-[#039B06] hover:after:w-full hover:after:left-0"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors relative ${
                      isActive(link.href)
                        ? "text-[#039B06] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-[#039B06]"
                        : "text-[#272727] hover:text-[#039B06] hover:font-semibold after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-[#039B06] hover:after:w-full hover:after:left-0"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-[#272727]">123 Organic Way</p>
              <p className="text-sm text-[#272727]">Farmville, CA 90210</p>
              <p className="mt-2 text-sm text-[#272727]">
                Email:{" "}
                <a href="mailto:info@tablefresh.com" className="hover:text-[#039B06] transition-colors">
                  info@tablefresh.com
                </a>
              </p>
              <p className="text-sm text-[#272727]">
                Phone:{" "}
                <a href="tel:+10001230000" className="hover:text-[#039B06] transition-colors">
                  (000) 123-0000
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-[#272727]">
          © 2025 TABLE FRESH. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
