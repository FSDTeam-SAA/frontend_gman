"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { authApi, setAuthCookies, type User } from "@/lib/auth"
import { toast } from "sonner"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await authApi.login(formData.email, formData.password)

      if (response.success && response.data) {
        // Create user object from response data
        const user: User = {
          _id: response.data._id,
          name: "", // You might need to get this from another API call
          email: formData.email,
          username: "",
          role: response.data.role as "buyer" | "seller" | "admin", // Ensure role is typed correctly
          avatar: {
            public_id: "",
            url: "",
          },
          address: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
          },
          verificationInfo: {
            verified: true,
          },
        }

        setAuthCookies(response.data.accessToken, response.data.refreshToken, user)
        toast.success("Login successful!")

        // Redirect based on user role after login
        if (response.data.role === "admin") {
          router.push("/dashboard")
        } else if (response.data.role === "seller") {
          router.push("/dashboard") // Seller dashboard
        } else if (response.data.role === "buyer") {
          router.push("/") // Home page for buyers
        } else {
          router.push(redirectTo || "/")
        }
      } else {
        toast.error(response.message || "Login failed")
      }
    } catch {
      toast.error("An error occurred during login")
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

        <div className="container relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="mb-8 backdrop-blur-[50px] bg-white/23 shadow-[0px_4px_4px_0px_rgba(93,93,93,0.25)] p-5 rounded-[16px]">
            <div className="flex items-start gap-2">
              <Image
                src="/placeholder.svg?height=53&width=40"
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
                <span className="text-[6px] font-medium leading-[120%] text-[#8F8F8F]">Fresh & Healthy</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg opacity-90">Sign in to your seller account</p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Sign in to your seller account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      rememberMe: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-600">New to our platform? </span>
              <Link href="/sign-up" className="text-green-600 hover:text-green-500 font-medium">
                Sign Up Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
