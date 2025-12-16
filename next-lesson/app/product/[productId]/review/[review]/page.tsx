"use client";
import { use } from "react";
export default function page({
  params,
}: {
  params: Promise<{ review: string; productId: string }>;
}) {
  const { productId, review } = use(params);
  return (
    <>
      <div>Product Id : {productId}</div>
      <div>Review Id : {review}</div>
    </>
  );
}
