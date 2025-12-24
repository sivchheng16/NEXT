"use server";
export default async function createUser(fromData: FormData) {
  const name = fromData.get("name");
  const email = fromData.get("email");
  console.log("User Name:", name);
  console.log("User Email:", email);

  return { sucess: true, message: "User data received successfully" };
}

// export default function deleteUserId(userId: string) {
//   return { sucess: true };
// }
