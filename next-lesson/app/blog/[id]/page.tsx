"use client";
import { use } from "react";

export default function DynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div>
      <h1>Blogid: {id}</h1>
    </div>
  );
}
