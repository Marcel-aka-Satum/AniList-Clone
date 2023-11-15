import React from "react";
import { Navbar } from "@/app/components/imports";

const login = () => {
  return (
    <div className="login-page flex min-h-screen flex-col bg-[#0a1625]">
      <div className="login-page__content">
        <div className="login-page__content__form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <button>Forgot password?</button>

          <p>Not registered?</p>
          <a href="/register">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default login;
