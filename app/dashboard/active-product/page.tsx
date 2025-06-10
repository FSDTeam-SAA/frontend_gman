"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/page-header";
import { ActiveProductsList } from "./_components/active-products-list";
import { CreateProductForm } from "./_components/create-product-form";

export default function ActiveProductsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const queryClient = useQueryClient();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <PageHeader
        title="Active Product List"
        breadcrumb="Dashboard › Active Product › List"
        action={{
          label: "Add Product",
          onClick: () => setShowCreateForm(true),
        }}
      />
      {showCreateForm ? (
        <CreateProductForm
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            setShowCreateForm(false);
            queryClient.invalidateQueries({ queryKey: ["products"] });
          }}
        />
      ) : (
        <ActiveProductsList  />
      )}
    </div>
  );
}