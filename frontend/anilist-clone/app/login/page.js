import React from "react";
import { Footer, Navbar } from "../components/imports";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="container-loginpage w-96 bg-white p-8 rounded shadow-md h-2/3">
          <h1 className="text-2xl font-bold mb-4">Login!</h1>
          <form>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
