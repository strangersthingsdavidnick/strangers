import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Turn Blue</Link>
          <Link to="/red">Turn Red</Link>
        </div>
        <div id="main-section"><Routes>
          <Route path="/home" element={Home()} />
          <Route path="/blue" element={Blue()} />
          <Route path="/red" element={Red()} />
        </Routes></div>
      </div>

    </>
  )
}

export default App
