import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // TODO: Save to database or send email here
    console.log("New registration:", { name, email, phone });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}