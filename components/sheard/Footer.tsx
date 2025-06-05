import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link  href="/" className="flex items-center gap-2">
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
                
                <span className="text-[6px] font-medium leading-[120%] space-x-[5%] text-[#8F8F8F]">Fresh & Healthy</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-muted-foreground hover:text-foreground">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/become-seller" className="text-muted-foreground hover:text-foreground">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">123 Organic Way</p>
              <p className="text-sm text-muted-foreground">Farmville, CA 90210</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Email: <a href="mailto:info@tablefresh.com">info@tablefresh.com</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: <a href="tel:+10001230000">(000) 123-0000</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2025 TABLE FRESH. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
