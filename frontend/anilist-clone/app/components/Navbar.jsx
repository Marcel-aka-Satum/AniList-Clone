import Image from "next/image";
import Link from "next/link";
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
          <li>
            <Link href="/search">Login</Link>
          </li>
          <li>
            <Link href="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
