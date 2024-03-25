"use client";
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthToken] = useState(null);
  const [wrongPassword, setWrongPasword] = useState(false);
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
      //user authenticated give token and redirect to his profile page
      setAuthToken(data);
      const decodedUser = jwtDecode(data.access);
      let userObj = {};
      fetch(`http://localhost:8000/api/profile_info/${decodedUser.user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          userObj = data;
          localStorage.setItem("user", JSON.stringify(userObj));
        })
        .catch((error) => {
          console.error("Error:", error);
        });

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
    if (response.status === 409) {
      setBadCredentials(true);
    } else if (response.status === 201) {
      //user created successfully
      setBadCredentials(false);
      router.push("/login");
    }
  };

  let updateToken = async (authtoken) => {
    let response = await fetch("http://localhost:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authtoken?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(data));
      setAuthToken(data);
    } else {
      logoutUser();
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthToken(null);
    router.push("/login");
  };

  useEffect(() => {
    if (authTokens) {
      let fourMinutes = 1000 * 60 * 4;
      let interval = setInterval(() => {
        if (authTokens) {
          updateToken(authTokens);
        }
      }, fourMinutes);
      return () => clearInterval(interval);
    }
  }, [authTokens]);

  let contextData = {
    loginUser,
    wrongPassword,
    badcredentials,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
