"use client";
import Link from "next/link";

export default function AddTeacher() {
  return (
    <Link href={"/dashboard/teachers/add-teacher"} className="bg-[#6e3e54] rounded-full text-xs py-2 px-4 text-white">
      Add Teacher
    </Link>
  );
}