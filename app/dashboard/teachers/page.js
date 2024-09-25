"use client";
import TeachersRow from "@/components/TeachersRow";

function teachers() {
  return (
    <div className="rounded-md overflow-hidden bg-white min-h-full">
      <div className="flex flex-row justify-between gap-6 p-4">
        <span className="text-[#4A4E69] font-bold">Students</span>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-5 py-2 gap-2 bg-[#4A4E69] text-center text-white">
          <span className="block">First Name</span>
          <span className="block">Last Name</span>
          <span className="block">E-mail Address</span>
          <span className="block">Assigned Class</span>
          <span className="block">Schedule</span>
        </div>
        <TeachersRow
          firstName={"Kups"}
          lastName={"Bentino"}
          emailAddress={"KupsBentino.up@phinmmaed.com"}
          assignedClass={"3"}
          schedule={"MBA1000"}
        />
      </div>
    </div>
  );
}
export default teachers;
