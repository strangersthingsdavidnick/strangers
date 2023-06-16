import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPosts from './components/AllPosts'
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import Login from "./components/LogIn";
import Profile from "./components/Profile";
import Inbox from "./components/Inbox";


function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false)

 useEffect(()=>{
  const token = localStorage.getItem('token')
  if(token){
    setIsLoggedIn(true)
  }
 },[])

  return(
    <div>
    <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path='/' element={<AllPosts setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}/>
      <Route path='/register' element={<Register setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/new-post' element={<CreatePost setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/inbox' element={<Inbox />}/>
    </Routes>
    </div>
  )

}

export default App;