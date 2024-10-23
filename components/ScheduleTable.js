import React from 'react';

const ScheduleTable = () => {
 
  const schedule = [
    { day: 'Monday', time: '8:00 AM', subject: 'CPE 053 Embedded Systems 1', sections: ['BSCPE03-1'], room: 'MBA 101', duration: 2 },
    { day: 'Tuesday', time: '11:00 AM', subject: 'CPE 054 Embedded Systems 2', sections: ['BSCPE03-2'], room: 'MBA 202', duration: 2 },
    { day: 'Wednesday', time: '2:00 PM', subject: 'CPE 055 Embedded Systems 3', sections: ['BSCPE03-1'], room: 'MBA 303', duration: 2 },

  ];

  const times = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

 
  const getMergedCell = (day, time) => {
    return schedule.find(
      (item) => item.day === day && item.time === time
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2"></th>
            {days.map((day) => (
              <th key={day} className="border border-gray-300 px-4 py-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={time}>
              <td className="border border-gray-300 px-4 py-2">{time}</td>
              {days.map((day) => {
                const course = getMergedCell(day, time);

                if (course && rowIndex === times.indexOf(course.time)) {
                  return (
                    <td key={day} className="border border-gray-300 px-4 py-2" rowSpan={course.duration}>
                         {course.sections.map((section, index) => (
                        <div key={index} className="text-sm ">{section}</div>
                      ))}
                      <div className="font-bold">{course.subject}</div>
                      <div className="text-sm ">{course.room}</div>
                    </td>
                  );
                }

                const isWithinMergedSpan = schedule.some(
                  (item) =>
                    item.day === day &&
                    times.indexOf(time) > times.indexOf(item.time) &&
                    times.indexOf(time) < times.indexOf(item.time) + item.duration
                );
                if (isWithinMergedSpan) {
                  return null;
                }

                return (
                  <td key={day} className="border border-gray-300 px-4 py-2"></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
