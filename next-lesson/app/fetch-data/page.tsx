import { cache } from "react";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 1000 },
    // {cache:"force-cache"},
    // {catche: "no-store"},
  });
  const posts: any[] = await res.json();
  return (
    <div>
      {posts.map((photo: any) => (
        <div key={photo.id} className="p-10">
          {photo.title}
        </div>
      ))}
    </div>
  );
}
