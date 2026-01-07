import PageHeader from "@/components/sheard/PageHeader";
import React from "react";
import Reasons from "./_component/Reasons";

const page = () => {
  return (
    <div>
      <PageHeader
        image="/asset/whyJoin.png"
        title="Why work with Studio Signal"
        gradientColor="249, 115, 22"
        gradientOpacity={0.0}
      />
      <Reasons />
    </div>
  );
};

export default page;
