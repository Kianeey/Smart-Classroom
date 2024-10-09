"use client";
import { useState } from "react";
import Teacheroptions from "@/components/Teacheroptions";

export default function AddClassPage() {
  const [clRoomDropdown, setClRoomDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);
  const [profDropdown, setProfDropdown] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const getteachers = async () => {
    try {
      const res = await fetch(`/api/crud/teacher`, { method: "GET" });
      if (res.ok) {
        const data = await res.json();
        setTeacherList(data.teacher);
        console.log(data.teacher)
      }
    } catch (error) {
      console.error(error, "test");
    }
  };
  return (
    <div>
      <h1>Create Class</h1>
      <button
        onClick={() => {
          clRoomDropdown ? setClRoomDropdown(false) : setClRoomDropdown(true);
        }}
      >
        Select a Classroom
      </button>
      <select className={`${clRoomDropdown ? "hidden" : "inline-block"}`}>
        <option>MBA 210</option>
        <option>MBA 211</option>
        <option>MBA 212</option>
      </select>

      <button
        onClick={() => {
          subDropdown ? setSubDropdown(false) : setSubDropdown(true);
        }}
      >
        Select a Subject
      </button>
      <select className={`${subDropdown ? "hidden" : "inline-block"}`}>
        <option>CPE 053 Embedded Systems 1</option>
        <option>CPE 054 Embedded Systems 2</option>
        <option>CPE 055 Embedded Systems 3</option>
      </select>

      <button
        onClick={() => {
          profDropdown ? setProfDropdown(false) : setProfDropdown(true); 
        if (teacherList.length < 1){
            getteachers()
        }
        }}
      >
        Select a Teacher
      </button>
      <select className={`${profDropdown ? "hidden" : "inline-block"}`}>
        {teacherList.map((t) => {
          return <Teacheroptions key={t._id} tname={t.name} />;
        })}
      </select>
    </div>
  );
}
