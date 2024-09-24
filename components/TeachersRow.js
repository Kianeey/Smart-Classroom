export default function TeachersRow({
    firstName,
    lastName,
    emailAddress,
    assignedClass,
    schedule,
  }) {
    return (
      <div className="grid grid-cols-5 py-2 gap-2 text-[#4A4E69] text-center bg-white border border-[#4A4E69]">
        <span className="block">{firstName}</span>
        <span className="block">{lastName}</span>
        <span className="block">{emailAddress}</span>
        <span className="block">{assignedClass}</span>
        <span className="block">{schedule}</span>
      </div>
    );
  }