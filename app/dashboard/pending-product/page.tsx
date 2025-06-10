"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { CreateProductForm } from "../active-product/_components/create-product-form"
import { PendingProductsList } from "./_components/pending-products-list"

export default function ActiveProductsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <PageHeader
        title={"Active Product List"}
        breadcrumb={"Dashboard › Active Product › List"}
        action={{
          label: "Add Product",
          onClick: () => setShowCreateForm(true),
        }}
      />

      {showCreateForm ? (
        <CreateProductForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            setShowCreateForm(false)
            // Refresh the list
            window.location.reload()
          }}
        />
      ) : editingProduct ? (
        <CreateProductForm
          productId={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSuccess={() => {
            setEditingProduct(null)
            // Refresh the list
            window.location.reload()
          }}
        />
      ) : (
        <PendingProductsList onEdit={setEditingProduct} />
      )}
    </div>
  )
}
