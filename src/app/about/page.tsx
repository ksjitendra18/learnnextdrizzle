import { db } from "@/db/db";
import { users } from "@/db/schema";

const getUsers = async () => {
  const userData = await db.select().from(users);
  return userData;
};

export default async function About() {
  const userData = await getUsers();
  console.log("userData", userData);
  return (
    <main className="px-10 py-5">
      {userData?.map((user) => (
        <p className="mb-5" key={user.id}>
          {user.name}
        </p>
      ))}
    </main>
  );
}

export const revalidate = 0;
