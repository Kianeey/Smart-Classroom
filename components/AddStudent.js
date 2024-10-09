"use client";
import Link from "next/link";

export default function AddStudent() {
  return (
    <Link href={"/dashboard/students/add-student"} className="bg-[#6e3e54] rounded-full text-xs py-2 px-4 text-white">
      Add Student
    </Link>
  );
}
