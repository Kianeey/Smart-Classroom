"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function AddStudentPage() {
  const formref = useRef(null)
  const [firstName, setFirstName] = useState(false);
  const [middleName, setMiddleName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);
 const addStudentHandle = async(e) => {
  e.preventDefault()
  try {
    const res = await fetch(`/api/crud/student`,{method:"POST", headers: {"Content-type":"application/json"},body:JSON.stringify({firstName, middleName, lastName, email})})
    if (res.ok){
      const data = await res.json()
      window.alert(data.message)
      setFirstName ("")
      setMiddleName ("")
      setLastName ("")
      setEmail("")
      formref.current.reset()
    }
    else {
      const data = await res.json()
      window.alert(data.message)
      setFirstName ("")
      setMiddleName ("")
      setLastName ("")
      setEmail("")
      formref.current.reset()
    }
  } catch (error) {
    console.error(error);
  }
 }
  return (
      <form ref={formref} className="bg-white p-8 rounded-lg shadow-lg flex flex-col min-h-full gap-4 justify-between" onSubmit={addStudentHandle}>
        <div>
        <div className="flex flex-row gap-4 h">
        <label className="block text-base font-medium text-[#4A4E69]">
        First Name
          <input type="text" className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(event) => {setFirstName(event.target.value)}}/>
        </label>
        <label className="block text-base font-medium text-[#4A4E69]">
        Middle Name
          <input type="text" className=" bg-gray-200 text-sm mt-1 p-2 block  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(event) => {setMiddleName(event.target.value)}}/>
        </label>
        <label className="block text-base font-medium text-[#4A4E69]">
        Last Name
          <input type="text" className="bg-gray-200 text-sm mt-1 p-2 block  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(event) => {setLastName(event.target.value)}}/>
        </label>
        </div>
        <label className="block text-base font-medium text-[#4A4E69]">
        Email
          <input type="email" className=" bg-gray-200 text-sm mt-1 p-2 block w-96  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(event) => {setEmail(event.target.value)}}/>
        </label>
        </div>
        <div className=" flex flex-row">
          <Link
          href={"/dashboard/students"}
          className="bg-gray-200 text-[#4A4E69] flex flex-row items-center w-fit px-4 py-1 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mr-4">
            <span className="material-symbols-outlined align-bottom mr-2">close</span>
            <span className="">Cancel</span>
          </Link>
          <button
            type="submit"
            className="bg-[#4A4E69] text-white px-5 py-1 hover:bg-[#373d61] rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <span className="material-symbols-outlined align-bottom mr-2 gi-size-20">check</span>
            Save
          </button>
          </div>
      </form>
    
  );
}
