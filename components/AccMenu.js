"use client";
import { userStore } from "@/lib/zustand/userStore";


export default function AccMenu() {
  const { user } = userStore();
  return (
    <button className="flex flex-row gap-3 items-center">
      <span className="material-symbols-outlined gi-size-48 bg-[#D9D9D9] text-[#4A4E69] rounded-lg">
        person
      </span>
      <span>
        <span className="block text-lg text-left font-semibold">
          {/* {user?.name} */} Benito, Kiane Adam M.
        </span>
        <span className="block text-sm  text-left">
          {/* {user?.email} */} kime.benito.up@phinmmaed.com
          </span>
      </span>
      <span className="material-symbols-outlined gi-size-28">
        keyboard_arrow_down
      </span>
    </button>
  );
}
