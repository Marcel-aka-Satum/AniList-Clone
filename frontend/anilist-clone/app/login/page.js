import React from "react";
import { Footer, Navbar } from "../components/imports";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625]">
        <div className="container-loginpage w-96 bg-[#152232] p-8 rounded shadow-md h-3/5 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-16 items-center text-center">
              Login
            </h1>
            <form className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <button
                type="submit"
                className="w-1/3 p-2 bg-blue-500 text-white rounded"
              >
                Log in
              </button>
              <Link href="/Recovery" className="mb-4 hover:text-[#2596be]">
                Forgot password?
              </Link>
            </form>
          </div>
          <Link href="/Register" className="text-sm flex hover:text-[#2596be]">
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
