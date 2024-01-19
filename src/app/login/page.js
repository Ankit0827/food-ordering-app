"use client"

import Image from "next/image";
import Google from "../../../public/google.png";
import Link from "next/link";
import { useState } from "react";
import { signIn} from "next-auth/react"


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginProgress,setLoginProgress]=useState(false)



    async function handleClickSubmit(e) {
        e.preventDefault();
        setLoginProgress(true)
     const signin=await signIn('credentials',{email,password})

    
        setLoginProgress(false)
      }
    

    return(
        <div className="login-parent-div max-w-xl mx-auto my-16 border-2 p-10 py-24 rounded-xl shadow-xl bg-slate-200">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleClickSubmit}
        >
          <h1 className="text-center text-3xl">Login</h1>        
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loginProgress}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loginProgress}
          />
          <button type="submit" disabled={loginProgress}>Login</button>
          <div className="w-full text-center">
            or login with provider
            <button className="my-4 flex items-center justify-center gap-4" >
              <Image src={Google} width={20} height={20} alt="google" />
              Login with Google
            </button>
          </div>
          <div>
              <p className="text-center">Do not have an account? <Link className="text-blue-700 underline" href={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    )
}

