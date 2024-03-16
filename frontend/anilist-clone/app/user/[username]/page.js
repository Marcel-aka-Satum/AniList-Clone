"use client";
import React, {useState} from 'react'
import {Footer, Navbar} from '../../../components/imports'

export default function page() {
  const [user, setUser] = useState(window.localStorage.getItem('user') || null);

  if (!user) {
    return <div className='text-red-500'>Not logged in.</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a1625]"> 
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <h1 className='text-red-500'>Welcome {user}</h1>
      </div>
      <Footer/>
    </div>
  );
}