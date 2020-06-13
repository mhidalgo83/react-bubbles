import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={credentials.username}
        placeholder="User Name"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={credentials.password}
        placeholder="Password"
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
