// app/api/register/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  console.log("Registering:", { email, password });

  return NextResponse.json({ success: true });
}
