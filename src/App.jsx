import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import AllPosts from './components/AllPosts';
import Profile from './components/Profile';
import Register from './components/Register';
import { useState, useEffect } from 'react';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

function App() {

  const [allPosts, setAllPosts] = useState([])

  return (
    <>
      <div className="container">
        <div id="navbar">
          <Link to="/login">Login</Link>
          <Link to="/">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="main-section"><Routes>
          <Route path="/login" element={<Login BASE_URL={BASE_URL} />} />
          <Route path="/" element={<AllPosts allPosts={allPosts} setAllPosts={setAllPosts} BASE_URL={BASE_URL} />} />
          <Route path="/profile" element={<Profile BASE_URL={BASE_URL}/>} />
          <Route path="/register" element={<Register BASE_URL={BASE_URL}/>} />
        </Routes></div>
      </div>
    </>
  )
}

export default App
