"use client";

import Image from "next/image";
import Google from "../../../public/google.png";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleClickSubmit(e) {
    e.preventDefault();
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} ${setError(
            true
          )} ${setUserCreated(false)}
                    `);
        } else {
          setUserCreated(true);
          setError(false);
          setEmail("");
          setPassword("");
        }

        return response.json();
        // or response.text(), depending on what your server returns
      })
      .then((data) => {
        console.log("Success:", data);
        // Handle success, if needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, if needed
      });
  }

  setTimeout(() => {
    setUserCreated(false);
  }, 5000);

  return (
    <div className="register-parent-div max-w-xl mx-auto my-16 border-2 p-10 py-24 rounded-xl shadow-xl bg-slate-200">
      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={handleClickSubmit}
      >
        <h1 className="text-center text-3xl">Register</h1>
        {userCreated ? (
          <div className="user-created-div flex  items-center justify-center">
            <p className="text-center text-green-800">
              User created success Fully , Please got to{" "}
              <Link
                href={"/login"}
                className="text-blue-900 underline-offset-4"
              >
                Login
              </Link>
            </p>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="error-div flex items-center justify-center">
            <p className="text-center text-red-700">
              Some thing went wrong please try again
            </p>
          </div>
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="w-full text-center">
          or login with provider
          <button className="my-4 flex items-center justify-center gap-4">
            <Image src={Google} width={20} height={20} alt="google" />
            Login with Google
          </button>
        </div>
        <div>
            <p className="text-center">Already have an account? <Link className="text-blue-700 underline" href={'/login'}>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
