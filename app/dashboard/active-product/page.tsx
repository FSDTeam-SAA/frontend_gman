"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { ActiveProductsList } from "./_components/active-products-list";
import { CreateProductForm } from "./_components/create-product-form";

export default function ActiveProductsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);

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
        <CreateProductForm onClose={() => setShowCreateForm(false)} />
      ) : (
        <ActiveProductsList />
      )}
    </div>
  );
}