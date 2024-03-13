"use client";
import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';

export default function page() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  return (
    <div>User page</div>
  )
}
