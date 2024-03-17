import { NextResponse } from "next/server";
import { getSpeakers } from "~/db";

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
