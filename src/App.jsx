import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Register from './components/Register';
import { useState } from 'react';


function App() {

  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [bonus, setBonus] = useState('')

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/login">login</Link>
          <Link to="/posts">posts</Link>
          <Link to="/profile">profile</Link>
          <Link to="/register">register</Link>
        </div>
        <div id="main-section"><Routes>
          <Route path="/login" element={Login()} />
          <Route path="/posts" element={Posts()} />
          <Route path="/profile" element={Profile()} />
          <Route path="/register" element={Register()} />
        </Routes></div>
      </div>
    </>
  )
}

export default App
