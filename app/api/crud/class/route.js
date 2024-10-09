import { NextResponse } from "next/server";
import Class from "@/lib/mongoose/models/Class";
import mongoConnection from "@/lib/mongoose/mongoConnection";

export async function POST(req, res) {
  await mongoConnection();
  try {
    const { classroom, subject, teacher, time, students, block } =
      await req.json();
    const _class = await Class.create({
      classroom,
      subject,
      teacher,
      time,
      students,
      block,
    });
    if (_class) {
      return NextResponse.json(
        {
          _class,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}
