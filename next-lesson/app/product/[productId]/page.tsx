"use client";

import { use } from "react";

function page({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  return <section>Product {productId} detial</section>;
}

export default page;
  