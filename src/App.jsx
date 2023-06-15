import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import AllPosts from "./components/AllPosts";
import Profile from "./components/Profile";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import { useState, useEffect } from "react";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="container">
        <div id="navbar">
          {!token && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {token && (
            <>
              <Link to="/">Posts</Link>
              <Link to="/profile">Profile</Link>
            </>
          )}
        </div>

        <div className="main-section">
          <Routes>
            <Route path="/login" element={<Login BASE_URL={BASE_URL} />} />
            <Route
              path="/"
              element={
                <AllPosts
                  allPosts={allPosts}
                  setAllPosts={setAllPosts}
                  BASE_URL={BASE_URL}
                />
              }
            />
            <Route
              path="/register"
              element={<Register BASE_URL={BASE_URL} />}
            />
            <Route path="/profile" element={<Profile BASE_URL={BASE_URL} />} />
            <Route
              path="/newpost"
              element={
                <CreatePost
                  BASE_URL={BASE_URL}
                  allPosts={allPosts}
                  setAllPosts={setAllPosts}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
