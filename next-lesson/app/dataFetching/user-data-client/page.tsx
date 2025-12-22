"use client";

import { useState, useEffect } from "react";

type User = { id: number; name: string; [key: string]: any };

export default function page() {
  const [data, setData] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users: User[]) => {
        setData(users);
        setIsLoading(false);
      })
      .catch(() => {
        setData(null);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading....</p>;
  if (!data) return <p>Error fetching data</p>;
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
