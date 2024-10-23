"use client";
import { useState, useEffect } from "react";
import Teacheroptions from "@/components/Teacheroptions";
import Studentoptions from "@/components/Studentoptions";
import Link from "next/link";
import StudentList from "@/components/StudentList";

export default function AddClassPage() {
  const [studentToggle, setstudentToggle] = useState(false);
  const [subject, setSubject] = useState("");
  const [clRoom, setClRoom] = useState("");
  const [section, setSection] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day, setDay] = useState("");
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState("");
  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const studentDropdown = () => {
    setstudentToggle(!studentToggle);
  };
  const addClassHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/crud/class`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          classroom: clRoom,
          subject,
          section,
          startTime,
          endTime,
          day,
          students,
          teacher,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        window.alert(data.message);
        setClRoom("");
        setSubject("");
        setSection("");
        setStartTime("");
        setEndTime("");
        setDay("");
        setStudents("");
        setTeacher("");
        formref.current.reset();
      } else {
        const data = await res.json();
        window.alert(data.message);
        setClRoom("");
        setSubject("");
        setSection("");
        setStartTime("");
        setEndTime("");
        setDay("");
        setStudents("");
        setTeacher("");
        formref.current.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const resTeacher = await fetch(`/api/crud/teacher`, { method: "GET" });
        if (resTeacher.ok) {
          const data = await resTeacher.json();
          setTeacherList(data.teachers);
          console.log(data.teachers);
        }
        const resStudent = await fetch(`/api/crud/student`, { method: "GET" });
        if (resStudent.ok) {
          const data = await resStudent.json();
          setStudentList(data.students);
          console.log(data.students);
        }
      } catch (error) {
        console.error(error, "test");
      }
    };
    getData();
  }, []);
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-h-full flex flex-row gap-8">
      <form
        className=" flex flex-col gap-4 justify-between flex-grow"
        onSubmit={addClassHandle}
      >
        <div>
          <div className="flex flex-row gap-4">
            <div>
              <label className="block">Select a Classroom</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={clRoom}
                onChange={(e) => {
                  setClRoom(e.target.value);
                }}
              >
                <option value="">Select A Room</option>
                <option value="MBA 210">MBA 210</option>
                <option value="MBA 211">MBA 211</option>
                <option value="MBA 212">MBA 212</option>
              </select>
            </div>
            <div>
              <label className="block">Select a Subject</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              >
                <option>Select A Subject</option>
                <option value="CPE 053 Embedded Systems 1">
                  CPE 053 Embedded Systems 1
                </option>
                <option value="CPE 054 Embedded Systems 2">
                  CPE 054 Embedded Systems 2
                </option>
                <option value="CPE 055 Embedded Systems 3">
                  CPE 055 Embedded Systems 3
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <label>Select A Teacher</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={teacher}
                onChange={(e) => {
                  setTeacher(e.target.value);
                }}
              >
                <option value="">Select A Teacher</option>
                {teacherList.map((t) => {
                  return (
                    <Teacheroptions
                      key={t._id}
                      optionValue={t._id}
                      tFirstName={t.firstName}
                      tMiddleName={t.middleName}
                      tLastName={t.lastName}
                    />
                  );
                })}
              </select>
            </div>
            <div className="relative">
              <span>Select a Student</span>
              <button
                type="button"
                className="block bg-gray-200 text-sm mt-1 p-2 border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
             onClick={studentDropdown} >
                Select A student{" "}
                <span className="material-symbols-outlined gi-size-18 text-gray-600 align-middle ml-10">
                  keyboard_arrow_down
                </span>
              </button>
              <div
                className={`bg-gray-200 text-sm mt-1 p-2 border-gray-300  rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 max-h-36 absolute w-48 overflow-auto ${studentToggle ? "block" :"hidden"}`}
                value={students}
                onChange={(e) => {
                  setStudents(e.target.value);
                }}
              >
                {studentList.map((s) => {
                  return (
                    <Studentoptions
                      key={s._id}
                      optionValue={s._id}
                      sFirstName={s.firstName}
                      sMiddleName={s.middleName}
                      sLastName={s.lastName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <label>Section</label>
            <select
              className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={section}
              onChange={(e) => {
                setSection(e.target.value);
              }}
            >
              <option value="">Select Section</option>
              <option value="4BSCPE-01">4BSCPE-01</option>
              <option value="4BSCPE-02">4BSCPE-02</option>
              <option value="4BSCPE-03">4BSCPE-03</option>
            </select>
          </div>

          <div className="flex flex-row gap-4">
            <div>
              <label>Start Time</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              >
                <option value="">Select Time</option>
                <option value="7:00 am">7:00 am</option>
                <option value="8:00 am">8:00 am</option>
                <option value="9:00 am">9:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 am">12:00 am</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
              </select>
            </div>
            <div>
              <label>End Time</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
              >
                <option value="">Select Time</option>
                <option value="7:00 am">7:00 am</option>
                <option value="8:00 am">8:00 am</option>
                <option value="9:00 am">9:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 am">12:00 am</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
              </select>
            </div>
            <div>
              <label>Day</label>
              <select
                className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={day}
                onChange={(e) => {
                  setDay(e.target.value);
                }}
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row mt-22rem">
            <Link
              href={"/dashboard/classes"}
              className="bg-gray-200 text-[#4A4E69] flex flex-row items-center w-fit px-4 py-1 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mr-4"
            >
              <span className="material-symbols-outlined align-bottom mr-2">
                close
              </span>
              <span className="">Cancel</span>
            </Link>
            <button
              type="submit"
              className="bg-[#4A4E69] text-white px-5 py-1 hover:bg-[#373d61] rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <span className="material-symbols-outlined align-bottom mr-2 gi-size-20">
                check
              </span>
              Save
            </button>
          </div>
        </div>
      </form>
      <div>
        <h1>Added Students</h1>
        <StudentList />
      </div>
    </div>
  );
}
