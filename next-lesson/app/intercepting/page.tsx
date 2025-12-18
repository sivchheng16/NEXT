import Link from "next/link";

export default function InterceptingPage() {
  return (
    <div>
      <p>intercepting</p>
      <ul className="space-y-2 mt-4">
        <li>
          <Link href="/posts/1" className="text-blue-600 underline">
            Post 1
          </Link>
        </li>
        <li>
          <Link href="/posts/2" className="text-blue-600 underline">
            Post 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
