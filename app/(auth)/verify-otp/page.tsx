"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authApi } from "@/lib/auth"
import { toast } from "sonner"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  const email = searchParams.get("email") || ""
  const type = searchParams.get("type") // Only 'reset' for password reset

  useEffect(() => {
    // Only allow OTP verification for password reset
    if (!email || type !== "reset") {
      router.push("/login")
    }
  }, [email, type, router])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join("")

    if (otpString.length !== 6) {
      toast.error("Please enter all 6 digits")
      return
    }

    setIsLoading(true)

    try {
      const response = await authApi.verifyOTP(email, otpString)

      if (response.success) {
        toast.success("OTP verified successfully!")

        // Only for password reset
        if (type === "reset") {
          router.push(`/reset-password?token=${response.accessToken || response.data?.accessToken}`)
        }
      } else {
        toast.error(response.message || "Invalid OTP")
      }
    } catch {
      toast.error("An error occurred during verification")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=720')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">TF</span>
              </div>
              <span className="font-semibold">TABLE FRESH</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Input the one-time code</h1>
          <p className="text-lg opacity-90">Discover fresh, local produce from farms around the world</p>
        </div>
      </div>

      {/* Right side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Verify OTP</h2>
            <p className="mt-2 text-gray-600">Enter the 6-digit code sent to your email for password reset</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                />
              ))}
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
