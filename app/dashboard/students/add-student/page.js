"use client";
import { useState, useRef } from "react";

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
    <div>
      <h1>Add student</h1>
      <form ref={formref} onSubmit={addStudentHandle}>
        <label>
        First Name
          <input type="text" onChange={(event) => {setFirstName(event.target.value)}}/>
        </label>
        <label>
        Middle Name
          <input type="text" onChange={(event) => {setMiddleName(event.target.value)}}/>
        </label>
        <label>
        Last Name
          <input type="text" onChange={(event) => {setLastName(event.target.value)}}/>
        </label>
        <label>
        Email
          <input type="email" onChange={(event) => {setEmail(event.target.value)}}/>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
