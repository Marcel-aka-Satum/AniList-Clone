"use client";
import React, { useState } from "react";
import { Footer, Navbar } from "../components/imports";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625]">
        <div className="container-loginpage w-96 bg-[#152232] p-8 rounded shadow-md h-3/5 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-16 items-center text-center">
              Login
            </h1>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-1/3 p-2 bg-blue-500 text-white rounded"
              >
                Log in
              </button>
            </form>
            <Link href="/Recovery" className="mb-4 hover:text-[#2596be]">
              Forgot password?
            </Link>
          </div>
          <Link href="/register" className="text-sm flex hover:text-[#2596be]">
            Not registered?
            <p className="text-[#2596be]">Create an account</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
