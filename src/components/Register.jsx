import React, { useState } from "react";
import { registerUser } from "./api-adapters";
import { Navigate, useNavigate } from "react-router-dom";

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

// This runs when submit is clicked
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await registerUser(username, password)

      localStorage.setItem("token", result.token)
      setIsLoggedIn(true)

      // navigates back to homepage
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h2>Register</h2>

      {/* Register form for username and password */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;