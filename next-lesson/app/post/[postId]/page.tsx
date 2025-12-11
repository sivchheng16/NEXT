"use client";

import { use } from "react";
export default function PostId({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);
  return <div>PostId: {postId}</div>;
}
