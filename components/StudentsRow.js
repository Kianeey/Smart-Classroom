import { useState } from "react";
import ScheduleTable from "./ScheduleTable";

export default function StudentsRows({
  firstName,
  middleName,
  lastName,
  emailAddress,
  subject,
  room,
  section,
  time,
  duration,
  day,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const middleInitial = middleName ? middleName.charAt(0).toUpperCase() + "." : "";
  return (
    <div className="border-b border-gray-300">
  <div className="grid grid-cols-3 py-2 gap-2 text-[#4A4E69] text-center items-center bg-white border border-[#4A4E69]">
      <span className="block">{`${lastName}, ${firstName} ${middleInitial} `}</span>
      <span className="block">{emailAddress}</span>
    <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-fit block justify-self-end pr-4"
        >
          {isExpanded ? "" : ""}
          <span className="material-symbols-outlined gi-size-36">
arrow_drop_down
</span>
        </button>
        </div>
      {isExpanded && (
        <div className="bg-gray-100 p-4 rounded-md ">
          <ScheduleTable/>
        </div>
        
      )}
    </div>
  );
}
