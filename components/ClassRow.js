export default function ClassRow({classroom,clName,teacher,time,enrolledStudents}) {
  return <div className="grid grid-cols-5 py-2 gap-2 text-[#4A4E69] text-center bg-white border border-[#4A4E69]">
    <span className="block">{classroom}</span>
    <span className="block">{clName}</span>
    <span className="block">{teacher}</span>    
    <span className="block">{time}</span>
    <span className="block">{enrolledStudents}</span>
  </div>;
}
