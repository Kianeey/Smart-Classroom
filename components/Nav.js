"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="text-[#4A4E69]">
      <Link
        className={`${
          pathname === "/dashboard/classes" ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2  my-3 rounded-xl`}
        href={"/dashboard/classes"}
      >
        <span className="material-symbols-outlined">home</span>
        <span>Classes</span>
      </Link>
      <Link
        className={`${
          pathname === "/dashboard/teachers" ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2 my-3 rounded-xl`}
        href={"/dashboard/teachers"}
      >
        <span className="material-symbols-outlined">person_play</span>
        <span>Teachers</span>
      </Link>
      <Link
        className={`${
          pathname === "/dashboard/students" ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2  my-3 rounded-xl`}
        href={"/dashboard/students"}
      >
        <span className="material-symbols-outlined">patient_list</span>
        <span>Students</span>
      </Link>
    </nav>
  );
}
