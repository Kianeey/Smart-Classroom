"use client";
import { useState } from "react";
import AccMenu from "@/components/AccMenu";
import Nav from "@/components/Nav";

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-row min-h-dvh">
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-72"
        } bg-white`}
      >
        <button
          onClick={toggleSidebar}
          className="m-2  bg-[#4A4E69] text-white rounded"
        >
          <span className=" gi-size-28 material-symbols-outlined">
            {isCollapsed ? "arrow_right" : "arrow_left"}
          </span>
        </button>
        <div className="p-4">
          <AccMenu isCollapsed={isCollapsed} />
          <hr className="my-6 border-t border-[#4A4E69]" />
          <Nav />
        </div>
      </div>
      <main className="flex-grow bg-gray-200 py-8 px-2">{children}</main>
    </div>
  );
}
