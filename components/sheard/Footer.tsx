"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/#contact" },
  ]

  const contactLinks = [
    { name: "Email", href: "mailto:hello@studiosignal.dev", label: "hello@studiosignal.dev" },
    { name: "Location", href: "/#contact", label: "Remote, global" },
    { name: "Availability", href: "/#contact", label: "Limited monthly slots" },
  ]

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/asset/portfolio-logo.svg"
                width={40}
                height={40}
                alt="Studio Signal logo"
                className="h-10 w-10"
                priority
              />
              <div className="leading-5">
                <h1 className="text-lg font-semibold tracking-[0.3em] text-[#0F172A]">STUDIO</h1>
                <p className="text-[#F97316] font-semibold text-lg -mt-1 tracking-[0.3em]">SIGNAL</p>
                <span className="text-[10px] text-gray-500 block uppercase tracking-[0.25em]">
                  Product + Frontend
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed max-w-xs">
              A quiet place for bold interfaces, thoughtful systems, and NDA-safe stories.
            </p>

            <div className="flex gap-4 mt-4">
              {[{ Icon: Facebook }, { Icon: Instagram }, { Icon: Twitter }].map(({ Icon }, i) => (
                <Link key={i} href="#" className="text-gray-500 hover:text-[#F97316] transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sections</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm transition font-medium text-gray-700 hover:text-[#F97316]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition font-medium text-gray-700 hover:text-[#F97316]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          (c) {new Date().getFullYear()} <strong>Studio Signal</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
