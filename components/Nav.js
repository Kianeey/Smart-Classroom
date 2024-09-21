import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-[#4A4E69]">
      <Link
        className="flex flex-row items-center gap-1 p-2 bg-[#4A4E69] text-white my-3 rounded-xl"
        href={"https://www.facebook.com/Kianeey"}
      >
        <span className="material-symbols-outlined">home</span>
        <span>Classes</span>
      </Link>
      <Link
        className="flex flex-row items-center gap-1 p-2 bg-[#D9D9D9] my-3 rounded-xl"
        href={"/"}
      >
        <span className="material-symbols-outlined">person_play</span>
        <span>Teachers</span>
      </Link>
      <Link
        className="flex flex-row items-center gap-1 p-2 bg-[#D9D9D9] my-3 rounded-xl"
        href={"/"}
      >
        <span className="material-symbols-outlined">patient_list</span>
        <span>Students</span>
      </Link>
    </nav>
  );
}
