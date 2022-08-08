import React from "react";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input type="text" name="name" placeholder="Name" />
      <br />
      <br />
      <input type="text" name="email" placeholder="Email" />
      <br />
      <br />
      <input type="text" name="password" placeholder="Password" />
      <br />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default Login;
