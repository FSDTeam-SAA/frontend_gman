"use client"
import Image from "next/image"
import Link from "next/link"


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md rounded-xl p-6 sm:p-8">
        <DialogHeader className="relative flex flex-col items-center text-center">
         
          <Image
            src="/asset/portfolio-logo.svg"
            width={40}
            height={40}
            alt="Studio Signal logo"
            className="mb-4 h-10 w-10"
            priority
          />
          <DialogTitle className="text-2xl font-bold text-gray-800">Support the Studio</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-4">
            Thanks for supporting independent builds and NDA-safe case studies. Your contribution keeps the archive
            curated, the prototypes polished, and the experiments sustainable.
          </p>
          <p className="font-semibold">Thank you, Studio Signal</p>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4">
          <Link href="#" className="text-md font-semibold text-[#F97316] underline hover:no-underline">
            Set Your Payment
          </Link>
          <Input
            type="text"
            placeholder="Enter your Amount..."
            className="w-full rounded-md border border-gray-300 p-3 text-center text-lg focus:border-[#F97316] focus:ring-[#F97316]"
          />
          <Button className="w-full rounded-md bg-[#F97316] py-3 text-lg font-semibold text-white hover:bg-[#EA580C]">
            Support Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
  
}
