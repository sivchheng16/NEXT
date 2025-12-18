import Link from "next/link";
import { resolve } from "path";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <div>home page</div>;
      <div>
        <Link href="/intercepting">go to intercepting page</Link>
      </div>
    </>
  );
}
