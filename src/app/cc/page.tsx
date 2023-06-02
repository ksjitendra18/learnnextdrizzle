"use client";
import { User } from "@/db/schema";
import React, { useEffect, useState } from "react";

export default async function CC() {
  const [userData, setuserData] = useState<User[]>([]);
  const userInfo = async () => {
    const res = await fetch("/api/get");
    const { userData } = await res.json();

    console.log("user", userData);
    setuserData(userData);
  };

  useEffect(() => {
    userInfo();
  }, []);
  return (
    <div>
      <div className="mt-10">
        <h2 className="mb-10">Users</h2>
        {userData.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
