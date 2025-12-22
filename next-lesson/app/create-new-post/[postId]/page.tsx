import { use } from "react";

export default function page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = use(params);
  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
}
