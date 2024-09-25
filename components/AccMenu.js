"use client";
import { adminStore } from "@/lib/zustand/adminStore";


export default function AccMenu() {
  const { admin } = adminStore();
  return (
    <button className="flex flex-row gap-3 items-center">
      <span className="material-symbols-outlined gi-size-48 bg-[#D9D9D9] text-[#4A4E69] rounded-lg">
        person
      </span>
      <span>
        <span className="block text-lg text-left font-semibold">
          {/* {admin?.name} */} Benito, Kiane Adam M.
        </span>
        <span className="block text-sm  text-left">
          {/* {admin?.email} */} kime.benito.up@phinmmaed.com
          </span>
      </span>
      <span className="material-symbols-outlined gi-size-28">
        keyboard_arrow_down
      </span>
    </button>
  );
}
