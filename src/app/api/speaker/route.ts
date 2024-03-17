// @ts-ignore
import { type NextRequest, NextResponse } from "next/server";
import { type Speaker, getSpeakers, addSpeaker } from "~/db";

export async function GET() {
  try {
    const speakers = await getSpeakers();

    return NextResponse.json({
      status: 200,
      speakers,
    });
  } catch (error) {
    console.error("Get Appointments Error:", error);
    return NextResponse.json("Get Appointments Error: Unknown error", {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const { name, email, phone } = requestBody as Speaker;
    const isValidRequest = name && email && phone;

    if (!isValidRequest) {
      throw new Error("invalid data");
    }
    const isValidName = name.trim().length > 0;
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      Boolean(email.trim().length);
    const isValidPhone = /^\+?[0-9]*$/.test(phone) && Boolean(phone.trim().length);

    if (!isValidName || !isValidEmail || !isValidPhone) {
      return NextResponse.json({ status: 400, message: "Invalid data" });
    }

    await addSpeaker({ name, email, phone });

    return NextResponse.json({ status: 200, message: "200" });
  } catch (e) {
    console.error("Add Speaker Error:", e);
    return NextResponse.json("Add Speaker Error: Unknown error", {
      status: 500,
    });
  }
}
