"use client";
import Link from "next/link";

export default function AddClass() {
  return (
    <Link href={"/dashboard/classes/add-class"} className="text-white text-xs bg-[#6e3e54] rounded-full py-2 px-4">
      Add Class
    </Link>
  );
}
