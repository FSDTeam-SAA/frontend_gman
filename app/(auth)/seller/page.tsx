"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { ImagePlus } from "lucide-react"
import Image from "next/image"

export default function SellerSetupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    farmName: "",
    description: "",
    isOrganic: false,
  })
  const [images, setImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const router = useRouter()
  const searchParams = useSearchParams()
  // const token = searchParams.get("token") || ""

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)

      // Limit to 3 images total
      if (images.length + newFiles.length > 3) {
        toast.error("You can upload a maximum of 3 images")
        return
      }

      setImages([...images, ...newFiles])

      // Create preview URLs
      const newUrls = newFiles.map((file) => URL.createObjectURL(file))
      setImageUrls([...imageUrls, ...newUrls])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    const newUrls = [...imageUrls]

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newUrls[index])

    newImages.splice(index, 1)
    newUrls.splice(index, 1)

    setImages(newImages)
    setImageUrls(newUrls)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.farmName) {
      toast.error("Please enter your farm name")
      return
    }

    setIsLoading(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append("farmName", formData.farmName)
      submitData.append("description", formData.description)
      submitData.append("isOrganic", formData.isOrganic.toString())

      // Add images to FormData
      images.forEach((image, index) => {
        submitData.append(`farmImages`, image)
      })

      // Get auth token from cookies if available
      const accessToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1]

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller/apply`, {
        method: "POST",
        headers: {
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          // Don't set Content-Type for FormData, let browser set it with boundary
        },
        body: submitData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Farm profile created successfully!")
        router.push("/login")
      } else {
        toast.error(result.message || "Failed to create farm profile")
      }
    } catch (error) {
      console.error("Error submitting farm profile:", error)
      toast.error("An error occurred while setting up your farm profile")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">Set Up Your Seller Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Farm Name */}
            <div className="space-y-2">
              <Label htmlFor="farmName">Set Farm Name</Label>
              <Input
                id="farmName"
                placeholder="Set name"
                value={formData.farmName}
                onChange={(e) => setFormData((prev) => ({ ...prev, farmName: e.target.value }))}
                required
              />
            </div>

            {/* Farm Pictures */}
            <div className="space-y-2">
              <Label>Upload Your Farm Pictures</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Image upload slots */}
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex flex-col items-center justify-center relative"
                  >
                    {index < imageUrls.length ? (
                      <>
                        <Image
                          src={imageUrls[index] || "/placeholder.svg"}
                          width={1000}
                          height={1000}
                          alt={`Farm image ${index + 1}`}
                          className="h-full w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                        <ImagePlus className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">Add Image</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Farm Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description Your Farm</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your farm, what you grow, your farming practices, etc."
                className="min-h-[150px]"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>

            {/* Organic Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="organic"
                checked={formData.isOrganic}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isOrganic: checked as boolean }))}
              />
              <Label htmlFor="organic" className="text-sm font-medium">
                Select only if you Produce Organic products
              </Label>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Setting up..." : "Continue"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}



