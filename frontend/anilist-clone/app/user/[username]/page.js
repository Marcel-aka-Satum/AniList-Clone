"use client";
import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';
import {useRouter } from 'next/navigation'

export default function page() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  if (!user) {
    alert('You need to be logged in to view this page');
    router.push('/login');
  }
  
  return (
    <div>
      {user && user.username && <p className='text-red-500'>Hello {user.username}</p>}
    </div>
  )
}
