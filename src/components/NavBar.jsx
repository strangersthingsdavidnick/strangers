import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const navigate = useNavigate();

    const handleLogout = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("username");
      setIsLoggedIn(false)
      navigate('/')
    }
  
  return (
    <div>
      {/* If User is Logged in show this */}
      {isLoggedIn ? (
        <>
          <Link to="/">Home </Link>

          <Link to="/new-post">Create Post</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/inbox">Inbox</Link>

          <button onClick={handleLogout}>Logout</button>
        </>

      ) : (
        // If User isn't logged in
        <>
          <div className="anonUserNav">
          <Link to="/register">Register </Link>
          <Link to="/login">Login </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;