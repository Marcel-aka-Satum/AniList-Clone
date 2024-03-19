"use client";
import React, { useState, useContext } from "react";
import { Footer, Navbar } from "../../components/imports";
import Link from "next/link";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [username, setUserName] = useState("");
  const [badpassword, setBadPassword] = useState(false);
  //context
  const { registerUser, badcredentials } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625]">
        <div className="container-loginpage w-96 bg-[#152232] p-8 rounded shadow-md h-3/5 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-16 items-center text-center">
              Sign Up To UNOFFICIAL AniList
            </h1>
            {badcredentials && (
              <h2 className="text-red-500 text-lg font-bold mb-4">
                Wrong credentials
              </h2>
            )}
            {badpassword && (
              <h2 className="text-red-500 text-lg font-bold mb-4">
                Both passwords needs to be the same
              </h2>
            )}
            <form
              className="flex flex-col items-center"
              onSubmit={(e) => registerUser(e, email, password, username)}
            >
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="Password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="Password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded bg-[#0a1625]"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
