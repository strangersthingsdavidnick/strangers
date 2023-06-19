import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div id="userNavBar">
      {/* If User is Logged in show this */}
      {isLoggedIn ? (
        <>
          <Link to="/">
            <span class="material-icons">home</span>{" "}
          </Link>

          <Link to="/profile">
            <span class="material-icons">account_circle</span>
          </Link>

          <Link to="/inbox"><span class="material-icons">
mail
</span></Link>

          <button onClick={handleLogout}>
            <span class="material-icons">logout</span>
          </button>
        </>
      ) : (
        // If User isn't logged in

        <>
          <Link to="/register">Register </Link>
          <Link to="/login">Login </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
