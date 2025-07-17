// app/api/tasks/route.ts
import { tasks } from "./data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ tasks }); // ✅ must return { tasks: [...] }
}
