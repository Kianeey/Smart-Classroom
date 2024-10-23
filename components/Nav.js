"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Nav({isCollapsed}) {
  const pathname = usePathname();

  return (
    <nav className="text-[#4A4E69]">
      <Link
        className={`${
          pathname.includes("/dashboard/classes") ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2  my-3 rounded-xl`}
        href={"/dashboard/classes"}
      >
        <span className="material-symbols-outlined">home</span>
        <span className={`${isCollapsed? "hidden" :""}`}>Classes</span>
      </Link>
      <Link
        className={`${
          pathname.includes("/dashboard/teachers") ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2 my-3 rounded-xl`}
        href={"/dashboard/teachers"}
      >
        <span className="material-symbols-outlined">person_play</span>
        <span className={`${isCollapsed? "hidden" :""}`}>Teachers</span>
      </Link>
      <Link
        className={`${
          pathname.includes("/dashboard/students")  ? "bg-[#4A4E69] text-white" : "bg-[#D9D9D9] "
        } flex flex-row items-center gap-1 p-2  my-3 rounded-xl`}
        href={"/dashboard/students"}
      >
        <span className="material-symbols-outlined">patient_list</span>
        <span className={`${isCollapsed? "hidden" :""}`}>Students</span>
      </Link>
    </nav>
  );
}
