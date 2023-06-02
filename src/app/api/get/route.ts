import { db } from "@/db/db";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const userData = await db.select().from(users);
    return NextResponse.json({ success: true, data: { userData: userData } });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      message: "error while fetching data",
    });
  }

  // return new Response(JSON.stringify(userData), {
  //   status: 200,
  // });
}

export const runtime = "edge";
