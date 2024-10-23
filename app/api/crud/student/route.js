import mongoConnection from "@/lib/mongoose/mongoConnection";
import { NextResponse } from "next/server";
import Student from "@/lib/mongoose/models/Student";


export async function GET (req,res){
  await mongoConnection();
  try {
    const students = await Student.find({})
    if (students)
      {
      return NextResponse.json({students},{status: 200})
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
      const student = await Student.create({ firstName, middleName, lastName, email });
      if (student) {
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

