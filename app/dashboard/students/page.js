"use client";
import StudentsRow from "@/components/StudentsRow";
import AddStudent from "@/components/AddStudent";
import { useState } from "react";

function Studentspage() {
  
  return (
    <div className="rounded-md overflow-hidden bg-white min-h-full">
      <div className="flex flex-row justify-between gap-6 p-4">
        <span className="text-[#4A4E69] font-bold">Students</span>
        <AddStudent/>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-3 py-2 gap-2 bg-[#4A4E69] text-center text-white">
          <span className="block">Name</span>
          <span className="block">E-mail Address</span>
        </div>
        <StudentsRow
          firstName={"Kiane Adam"}
          middleName={"Melendez"}
          lastName={"Benito"}
          emailAddress={"Loremipson.up@phinmmaed.com"}
          />
           <StudentsRow
          firstName={"lorem"}
          middleName={"Ipson"}
          lastName={"Ipson"}
          emailAddress={"Loremipson.up@phinmmaed.com"}
          />
      </div>
    </div>
  );
}
export default Studentspage;