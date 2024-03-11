"use client";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({ children }) => {

  return (
    <AuthContext.Provider value={{ name :'marcel'}}>
      {children}
    </AuthContext.Provider>
  );
};
