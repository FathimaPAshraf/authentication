import { IoLogOutSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { userAccessToken, FetchUser } from './utils/FetchuserDetails';

import { useRouter } from "next/router";

import { IoLogOut } from "react-icons/io5"
const index = () => {
  
  const router = useRouter();
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {

      const accessToken = userAccessToken();
     
      if (!accessToken){
        const response = await router.push('/login');
      }else{

        const [userInfo] = FetchUser()
        setUser(userInfo);
      }
      
    }
    const result = fetchData();
  }, []);
  
  const signOut = () => {
    localStorage.clear()
    router.push('/login')
  }
  return (
    <div className="w-screen h-screen bg-purple-900 font-semibold  items-center flex justify-center" >
    
    <div className=" w-1/3 h-auto p-4 bg-black shadow-md rounded-md justify-start items-center relative">
    
    
    <img src= {user?.photoURL} alt="" className="  rounded-full shadow-md "/>
    <p className=" text-2xl font-sans">{user?.displayName}</p>
    </div>
    <IoLogOut fontSize={35} onClick={signOut}/>
    </div>
   
  )
}

export default index