// import React from "react";
import LoginForm from "./Login";

var isRegistered = false;
var isLoggedin = false;

export default function App() {
  return (
    <div className="container">
      <LoginForm isRegistered={isRegistered} />
    </div>
  );
}
