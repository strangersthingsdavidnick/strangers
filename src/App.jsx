import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import AllPosts from './components/Posts/AllPosts';
import Profile from './components/Profile';
import Register from './components/Register';
import CreatePost from './components/Posts/CreatePost';
import { useState, useEffect } from 'react';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

function App() {

  const [allPosts, setAllPosts] = useState([])

  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [bonus, setBonus] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const translatedData = await response.json();
        setAllPosts(translatedData.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, []);


  return (
    <>
      <div className="container">
        <div id="navbar">
          <Link to="/login">Login</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/new-post">Create New Post</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="main-section"><Routes>
          <Route path="/login" element={<Login allPosts={allPosts}/>} />
          <Route path="/posts" element={<AllPosts allPosts={allPosts}/>} />
          <Route path="/new-post" element={<CreatePost allPosts={allPosts}/>} />
          <Route path="/profile" element={<Profile allPosts={allPosts}/>} />
          <Route path="/register" element={<Register allPosts={allPosts}/>} />
        </Routes></div>
      </div>
    </>
  )
}

export default App
