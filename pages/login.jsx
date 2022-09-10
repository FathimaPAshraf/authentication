import React from 'react'
import { FcGoogle } from "react-icons/fc";
import Router, { useRouter } from 'next/router'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../pages/firebase-config";
import { async, stringify } from '@firebase/util';


const login = () => {
  const firebaseAuth= getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
const router = useRouter();

    const SignIn = async () => {
   const {user} = await signInWithPopup (firebaseAuth, provider)
   const { refreshToken, providerData } = user;
   localStorage.setItem('user', JSON.stringify(providerData));
   localStorage.setItem('accessToken', JSON.stringify(providerData));
   router.push("/");
  

    };
  return (
    <div className="w-screen  flex justify-center items-center">
        <img className="absolute top-0 left-0 w-screen object-cover h-screen" src="https://pixabay.com/photos/butterfly-insect-winged-insect-7433586/" alt=""></img>
   <div className= " w-screen h-screen bg-black  bg-opacity-50"></div>
   <div className=" z-40  absolute left-18 ml-8 flex justify-center items-center border  border-gray-300  rounded-lg bg-white bg-opacity-20 p-2 cursor-pointer hover:shadow hover:bg-opacity-80"
   onClick={SignIn}
   >
    
    <FcGoogle fontSize={25} />
    <p className=" text-lg font-semibold  z-40  relative top-1 left-">Sign in With Google</p>
   </div>
    </div>
    
  )
}

export default login