"use client";
import { userStore } from "@/lib/zustand/userStore";
import { useEffect } from "react";

function Dashboard (){
const {user} = userStore();
useEffect(() => {console.log(user)},[]) 
return(<div><h1>Dashboard</h1>
            <p>{user.email}</p>
            <p>{user.name}</p>
</div>  
)
}
export default Dashboard;