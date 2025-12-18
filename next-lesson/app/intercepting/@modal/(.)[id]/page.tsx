import Link from "next/link";

function InterceptingModelPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="fixed inset-0s bg-black/50 flex items-center justify-center">
        <div className="bg-white p-6 rounded w-80">
          <h2 className="text-xl font-bold">Post {params.id}</h2>
          <p>This is a MODAL preview.</p>

          <Link
            href="/posts"
            className="inline-block mt-4 text-blue-600 underline"
          >
            Close
          </Link>
        </div>
      </div>

      {/* <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2>Intercepting Model Page</h2>
        <p>ID: {params.id}</p>

        <Link href="./intercepting">close</Link>
      </div>
    </div> */}
    </>
  );
}

export default InterceptingModelPage;
