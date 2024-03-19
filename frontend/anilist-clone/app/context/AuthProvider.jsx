"use client";
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthToken] = useState(null);
  let [user, setUser] = useState(null);
  const [wrongPassword, setWrongPasword] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [badcredentials, setBadCredentials] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    });

    const data = await response.json();

    if (response.status === 401 || response.status === 400) {
      //user not found
      setWrongPasword(true);
    } else if (response.status === 200) {
      //user authenticated give token and redirect to home
      setAuthToken(data);
      const decodedUser = jwtDecode(data.access);
      setUser(decodedUser);
      localStorage.setItem("user", decodedUser.username);
      localStorage.setItem("token", JSON.stringify(data));
      router.push(`/user/${decodedUser.username}`);
    } else {
      alert("something went wrong");
    }
  };

  const registerUser = async (event, email, password, username) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });
    console.log("starting register");
    if (response.status === 409) {
      setBadCredentials(true);
    } else if (response.status === 201) {
      //user created successfully
      setBadCredentials(false);
      console.log("user created");
      router.push("/login");
    }
  };

  let contextData = {
    user,
    loginUser,
    setUser,
    wrongPassword,
    loading,
    badcredentials,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
