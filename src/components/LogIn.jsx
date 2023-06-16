import React, { useState } from 'react';
import { loginRequest } from './api-adapters';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // This runs when submit is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await loginRequest(username, password);

      localStorage.setItem("token", result.token);
      localStorage.setItem("username", username);
      
      setIsLoggedIn(true);
      
    } catch (error) {
        
    }
    // navigates back to homepage
    navigate('/')
};
  return (
    <>
    
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
    </>
  );
};

export default Login;