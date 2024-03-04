import React from "react";
import { Footer, Navbar } from "../components/imports";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625]">
        <div className="container-loginpage w-96 bg-[#152232] p-8 rounded shadow-md h-3/5 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-16 items-center text-center">
              Sign Up To UNOFFICIAL AniList
            </h1>
            <form className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <input
                type="Password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <input
                type="Password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
              />
              <button
                type="submit"
                className="w-1/3 p-2 bg-blue-500 text-white rounded"
              >
                Log in
              </button>
            </form>
          </div>
          <Link href="/login" className="text-sm flex hover:text-[#2596be]">
            Already have account?
            <p className="text-[#2596be]"> Log In</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
