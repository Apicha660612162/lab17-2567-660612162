import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Apicha Lerdjintanakit",
    studentId: "660612162",
  });
};
