"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface Category {
  _id: string
  name: string
}

interface CreateProductFormProps {
  onClose: () => void
  onSuccess: () => void
  productId?: string
}

export function CreateProductForm({ onClose, onSuccess, productId }: CreateProductFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
  })
  const [categories, setCategories] = useState<Category[]>([])
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("")
  const [media, setMedia] = useState<File[]>([])
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchingProduct, setFetchingProduct] = useState(false)

  const isEditing = !!productId
  const router = useRouter()
  const session = useSession()
  const farmId = session.data?.user.farm
  const token = session.data?.accessToken

  useEffect(() => {
    fetchCategories()
    if (productId) {
      fetchProduct()
    }
  }, [productId])

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      if (data.success) {
        setCategories(data.data || [])
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
      toast.error("Failed to load categories")
    }
  }

  const fetchProduct = async () => {
    try {
      setFetchingProduct(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      if (data.success) {
        const product = data.data
        setFormData({
          title: product.title || "",
          price: product.price?.toString() || "",
          quantity: product.quantity || "",
          category: product.category?._id || "",
          description: product.description || "",
        })
        if (product.thumbnail) {
          setThumbnailPreview(product.thumbnail)
        }
        if (product.media && product.media.length > 0) {
          setMediaPreviews(product.media)
        }
      }
    } catch (error) {
      console.error("Error fetching product:", error)
      toast.error("Failed to load product details")
    } finally {
      setFetchingProduct(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnail(file)
      const reader = new FileReader()
      reader.onload = () => {
        setThumbnailPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setMedia((prev) => [...prev, ...files])

      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          setMediaPreviews((prev) => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeMediaImage = (index: number) => {
    setMedia((prev) => prev.filter((_, i) => i !== index))
    setMediaPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.price || !formData.quantity || !formData.category) {
      toast.error("Please fill all required fields")
      return
    }

    if (!farmId) {
      toast.error("Farm information is missing")
      return
    }

    try {
      setLoading(true)

      const formDataToSend = new FormData()
      formDataToSend.append("title", formData.title)
      formDataToSend.append("price", formData.price)
      formDataToSend.append("quantity", formData.quantity)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("farmId", farmId)

      if (formData.description) {
        formDataToSend.append("description", formData.description)
      }
      if (thumbnail) {
        formDataToSend.append("thumbnail", thumbnail)
      }

      if (media.length > 0) {
        media.forEach((file, index) => {
          formDataToSend.append(`media`, file)
        })
      }

      const url = isEditing
        ? `${process.env.NEXT_PUBLIC_API_URL}/seller/products/${productId}`
        : `${process.env.NEXT_PUBLIC_API_URL}/seller/products`

      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        toast.success(isEditing ? "Product updated successfully" : "Product submitted for admin approval", {
          description: "Your product will be available after admin approval",
        })
        onSuccess()
        if (!isEditing) {
          // Optionally redirect or refresh the product list
          router.refresh()
        }
      } else {
        throw new Error(data.message || "Failed to save product")
      }
    } catch (error) {
      console.error("Error saving product:", error)
      toast.error(error instanceof Error ? error.message : "Error saving product", {
        action: {
          label: "Retry",
          onClick: () => handleSubmit(e),
        },
      })
    } finally {
      setLoading(false)
    }
  }

  if (fetchingProduct) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{isEditing ? "Edit Product" : "Add Product"}</CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Label htmlFor="title">Product Name *</Label>
              <Input
                id="title"
                placeholder="e.g. Organic Tomatoes"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (₦) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  required
                  min="0"
                />
              </div>
              <div>
                <Label htmlFor="quantity">Available Quantity *</Label>
                <Input
                  id="quantity"
                  placeholder="e.g. 100 kg or 50 boxes"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Product Details</Label>
              <Textarea
                id="description"
                placeholder="Describe your product (quality, features, etc.)"
                className="min-h-[200px]"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category._id} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Product Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {thumbnailPreview ? (
                  <div className="space-y-2">
                    <Image
                      src={thumbnailPreview || "/placeholder.svg"}
                      alt="Product preview"
                      className="mx-auto h-32 w-32 object-cover rounded-md"
                      width={800}
                      height={800}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setThumbnail(null)
                        setThumbnailPreview("")
                      }}
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div>
                      <Label htmlFor="thumbnail" className="cursor-pointer text-blue-600 hover:text-blue-500">
                        Upload product image
                      </Label>
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleThumbnailChange}
                      />
                    </div>
                    <p className="text-xs text-gray-500">Recommended: 800x800px, JPG or PNG</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label>Additional Images (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <div className="space-y-2">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div>
                    <Label htmlFor="media" className="cursor-pointer text-blue-600 hover:text-blue-500">
                      Upload additional images
                    </Label>
                    <Input
                      id="media"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleMediaChange}
                    />
                  </div>
                  <p className="text-xs text-gray-500">Select multiple images (JPG or PNG)</p>
                </div>
              </div>

              {mediaPreviews.length > 0 && (
                <div className="mt-4">
                  <Label className="text-sm font-medium">Selected Images ({mediaPreviews.length})</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {mediaPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={preview || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                          width={800}
                          height={800 }
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-1 right-1 h-6 w-6 p-0"
                          onClick={() => removeMediaImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading || !farmId}>
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isEditing ? "Updating..." : "Submitting..."}
                </span>
              ) : isEditing ? (
                "Update Product"
              ) : (
                "Submit for Approval"
              )}
            </Button>

            {!farmId && (
              <p className="text-sm text-red-500">
                Farm information is missing. Please ensure your account is properly set up.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
