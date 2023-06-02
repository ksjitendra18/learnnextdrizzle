import { db } from "@/db/db";
import { users } from "@/db/schema";

const getUsers = async () => {
  const userData = await db.select().from(users);
  return userData;
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const userData = await getUsers();
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
