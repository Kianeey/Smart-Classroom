import { NextResponse } from "next/server";
import Teacher from "@/lib/mongoose/models/Teacher";
import mongoConnection from "@/lib/mongoose/mongoConnection";

export async function GET(req, res) {
  await mongoConnection();

  try {
    const teacher = await Teacher.find({});
    console.log(teacher);
    if (teacher) {
      return NextResponse.json({ teacher }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Failed to GET data, @route.js" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error.message);

    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 500,
      }
    );
  }
}
