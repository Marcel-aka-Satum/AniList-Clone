"use client";
import React, { useState } from "react";
import { Footer, Navbar } from "../../components/imports";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpsswd, setConfirmPsswd] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleSave = async (event) => {
    event.preventDefault();
    let userObj = JSON.parse(window.localStorage.getItem("user"));
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    if (banner) {
      formData.append("banner", banner);
    }
    if (password !== null && password !== confirmpsswd) {
      if (password !== confirmpsswd) {
        console.error("Passwords do not match");
        return;
      }
    }
    const response = await fetch(
      `http://localhost:8000/api/update_profile/${userObj.id}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.status === 200) {
      fetch(`http://localhost:8000/api/profile_info/${userObj.id}`, {
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
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error("Failed to update profile");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#0a1625] space-y-4">
        <label className="flex flex-col items-center space-y-2">
          Change Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 rounded-md text-black"
          />
        </label>
        <label className="flex flex-col items-center space-y-2">
          Change Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 rounded-md text-black"
          />
        </label>
        <label className="flex flex-col items-center space-y-2">
          Confirm Password:
          <input
            type="password"
            value={confirmpsswd}
            onChange={(e) => setConfirmPsswd(e.target.value)}
            className="px-2 py-1 rounded-md text-black"
          />
        </label>
        <label className="flex flex-col items-center space-y-2">
          Change Avatar:
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="px-2 py-1 rounded-md"
          />
        </label>
        <label className="flex flex-col items-center space-y-2">
          Change Banner:
          <input
            type="file"
            onChange={(e) => setBanner(e.target.files[0])}
            className="px-2 py-1 rounded-md"
          />
        </label>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Save
        </button>
      </div>
      <Footer />
    </div>
  );
}
