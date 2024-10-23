import { NextResponse } from "next/server";
import Class from "@/lib/mongoose/models/Class";
import mongoConnection from "@/lib/mongoose/mongoConnection";

export async function POST(req, res) {
  await mongoConnection();
  try {
    const { classroom, subject, section, startTime, endTime, day, students,teacher} =
      await req.json();
    const _class = await Class.create({
      classroom,
      subject,
      section,
      startTime,
      endTime,
      day,
      students,
      teacher,

    });
    if (_class) {
      return NextResponse.json(
        {
          message: "Class Added",
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
