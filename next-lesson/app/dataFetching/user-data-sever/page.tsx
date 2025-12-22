"use client";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export default async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return (
    <div>
      {users.map(
        (user: {
          email: ReactNode;
          id: Key | null | undefined;
          name:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | ReactPortal
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
        }) => (
          <div key={user.id}>{user.name}{user.email}</div>
        )
      )}
    </div>
  );
}
