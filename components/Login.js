"use client";
import { useRouter } from "next/navigation";
import { adminStore } from "@/lib/zustand/adminStore";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const {setAdmin} = adminStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailupdate = (event) => {
    setEmail(event.target.value);
  };
  const submitHandle = async(event) => {
    event.preventDefault()
    try {
      const res = await fetch(`/api/developer/admin?email=${email}&password=${password}`,
        {
        method: "GET"
      })
        if (res.ok){
        const data = await res.json()
        setAdmin(data.admin)
        router.push("/dashboard/classes")
        }
    } catch (error) {
        console.error(error,"test")
    }
  }
  return (
    <div className="flex flex-col justify-center min-h-dvh bg-[#fcfcf7]">
      <Image
        src="/login-icon.png"
        alt="login icon"
        width={40}
        height={80}
        className="mx-auto"
      />
      <p className="text-center p-4 text-2xl text font-semibold text-[#4a4e69]">
        Administrator Login
      </p>
      <form method="GET" onSubmit={submitHandle} className="flex flex-col w-[28.125rem] mx-auto mt-4 gap-4">
        <label htmlFor="email" className="text-sm font-medium text-[#4a4e69]">
          <span>Email</span>
          <input
            type="email"
            id="email"
            onChange={emailupdate}
            className="border-2 border-[#4a4e69] rounded-lg p-2 block w-[28.125rem]"
          />
        </label>
        <label
          htmlFor="password"
          className="text-sm font-medium text-[#4a4e69]"
        >
          <span>Password</span>
          <input
            type="password"
            id="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="border-2 border-[#4a4e69] rounded-lg p-2 block w-[28.125rem]"
          />
        </label>
        <Link
          href={""}
          className="text-end text-[#4a4e69] text-sm font-medium"
        >
          Forgot password?
        </Link>
        <button
          type="submit"
          className="w-fit py-2 px-16 mx-auto rounded-lg bg-[#4a4e69] text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
