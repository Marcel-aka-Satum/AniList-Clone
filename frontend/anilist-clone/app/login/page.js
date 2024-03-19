"use client";
import React, { useState, useContext } from "react";
import { Footer, Navbar } from "../../components/imports";
import Link from "next/link";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { loginUser, wrongPassword } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625]">
        <div className="container-loginpage w-96 bg-[#152232] p-8 rounded shadow-md h-3/5 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-16 items-center text-center">
              Login
            </h1>
            {wrongPassword && (
              <h2 className="text-red-500 text-lg font-bold mb-4">
                User not found with these credentials
              </h2>
            )}
            <form className="flex flex-col items-center" onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
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
