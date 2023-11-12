import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#152232] bg-opacity-90 h-16 flex items-center px-6">
      <a href="/" className="navbar-logo">
        <Image src="/icon.svg" alt="logo" height={50} width={50} />
      </a>
      <div className="navbar-container flex justify-center flex-grow">
        <ul className="navbar-links flex space-x-4">
          <li className="navbar-search ">
            <a href="Search">Search</a>
          </li>
          <li className="navbar-search">
            <a href="Social">Social</a>
          </li>
          <li className="navbar-search">
            <a href="Forum">Forum</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
