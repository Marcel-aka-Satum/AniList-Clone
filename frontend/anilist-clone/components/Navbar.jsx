"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../app/context/AuthProvider";

const Navbar = ({ transparant }) => {
  let { logoutUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 bg-[#152232] ${
        transparant ? "bg-opacity-80" : "bg-opacity-90"
      } h-16 flex items-center px-6 transition-all duration-1000 ease-in-out
  ${transparant ? "hover:bg-opacity-100" : ""}`}
    >
      <a href="/" className="navbar-logo">
        <Image src="/icon.svg" alt="logo" height={50} width={50} />
      </a>
      <div className="navbar-container flex justify-center flex-grow ">
        <ul className="navbar-links flex space-x-4">
          <li className="navbar-search ">
            <Link href="/search">Search</Link>
          </li>
          <li className="navbar-search">
            <Link href="/social">Social</Link>
          </li>
          <li className="navbar-search">
            <Link href="/forum">Forum</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {user ? (
            <li className="flex">
              <Link href={`/user/${user.username}`}>Profile </Link>
              <button className="ml-3" onClick={logoutUser}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
