"use client";
import StudentsRow from "@/components/StudentsRow";

function students() {
  return (
    <div className="rounded-md overflow-hidden bg-white min-h-full">
      <div className="flex flex-row justify-between gap-6 p-4">
        <span className="text-[#4A4E69] font-bold">Students</span>
        <button className="text-white text-xs bg-[#4A4E69] rounded-full px-6">
          Add Student
        </button>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-5 py-2 gap-2 bg-[#4A4E69] text-center text-white">
          <span className="block">First Name</span>
          <span className="block">Last Name</span>
          <span className="block">E-mail Address</span>
          <span className="block">Assigned Class</span>
          <span className="block">Schedule</span>
        </div>
        <StudentsRow
          firstName={"Lorem"}
          lastName={"Ipson"}
          emailAddress={"Loremipson.up@phinmmaed.com"}
          assignedClass={"3"}
          schedule={"MBA1000"}
        />
      </div>
    </div>
  );
}
export default students;
