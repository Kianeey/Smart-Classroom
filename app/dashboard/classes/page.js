"use client";
import ClassRow from "@/components/ClassRow";

function classes() {
  return (
    <div className="rounded-md overflow-hidden bg-white min-h-full">
      <div className="flex flex-row justify-between gap-6 p-4">
        <span className="text-[#4A4E69] font-bold">Classes</span>
        <button className="text-white text-xs bg-[#6e3e54] rounded-full px-6">
          Add Class
        </button>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-5 py-2 gap-2 bg-[#4A4E69] text-center text-white">
          <span className="block">Classroom</span>
          <span className="block">Class Name</span>
          <span className="block">Teacher</span>
          <span className="block">Time</span>
          <span className="block">Enroled Students</span>
        </div>
       <ClassRow classroom={"MBA 1000"} clName={"CPE 069"} teacher={"Mr. Bentino"} time={"15:00"} enrolledStudents={"420"}/>
      </div>
    </div>
  );
}
export default classes;
