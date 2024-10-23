import { NextResponse } from "next/server";
import Teacher from "@/lib/mongoose/models/Teacher";
import mongoConnection from "@/lib/mongoose/mongoConnection";

export async function GET (req,res){
  await mongoConnection();
  try {
    const teachers = await Teacher.find({})
    if (teachers)
      {
      return NextResponse.json({teachers},{status: 200})
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

export async function POST (req,res) {
  await mongoConnection();

  try {
    const { firstName, middleName, lastName, email } = await req.json();
    const teacher = await Teacher.create({ firstName, middleName, lastName, email });
    if (teacher) {
      return NextResponse.json(
        {
          message: "sucessfully added",
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
