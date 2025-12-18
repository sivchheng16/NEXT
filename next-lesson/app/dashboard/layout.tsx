import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </section>
  );
}
