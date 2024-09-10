import mongoose from "mongoose";
import { NextResponse } from "next/server";
import User from "@/lib/mongoose/models/User";
import mongoConnection from "@/lib/mongoose/mongoConnection";

export async function GET(req, res) {
    await mongoConnection();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const password = searchParams.get("password");
  
    try {
      const user = await User.findOne({
        email,
        password,
      });
      if (user) {
        return NextResponse.json({ user }, { status: 200 });
      } else {
        return NextResponse.json({ message: "error" }, { status: 500 });
      }
    } catch (error) {
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

export async function POST(req, res) {
  await mongoConnection();

  try {
    const { name, email } = await req.json();
    const user = await User.create({ name, email });
    if (user) {
      return NextResponse.json(
        {
          message: "sucessfully",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Faild",
      },
      {
        status: 500,
      }
    );
  }
}


