import Link from "next/link";

import createUser from "./sever-action/userAction";
export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <div>home page</div>;
      <div>
        <Link href="/intercepting">go to intercepting page</Link>
      </div>
      {/* SERVER FORM */}
      <form action={async (formData: FormData) => { await createUser(formData); }}>
        <input name="name" placeholder="name" required />
        <input name="email" placeholder="email" required />
        <button type="submit">Create User</button>
      </form>
    </>
  );
}
