export default async function User() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // Revalidate every 60 seconds (Next.js app router caching)
    next: { revalidate: 10 },
  });
  const users: any[] = await res.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
