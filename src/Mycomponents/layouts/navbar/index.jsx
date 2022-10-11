import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import  './index.css'
function Navbar() {
  const navigate = useNavigate();
  const [navbarStatus, setnavbarStatus] = useState(false)
  return (
    <nav>
      <div className='container'>
        <h1 className='Navbrand' onClick={()=>{navigate("/")}}>Blog</h1>
        <ul className='desktop_navbar'>
          <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./news"}>News</Link>
            </li>
            <li>
              <Link to={"./login"}>Login</Link>
            </li>
            <li>
              <Link to={"./login"}>Sport</Link>
            </li>
            <li>
              <Link to={"./login"}>Reel</Link>
            </li>
            <li>
              <Link to={"./login"}>Worklife</Link>
            </li>
            <li>
              <Link to={"./login"}>Travel</Link>
            </li>
            <li>
              <Link to={"./login"}>Future</Link>
            </li>
            <li>
              <Link to={"./login"}>Culture</Link>
            </li>
            <li>
              <Link to={"./login"}>Tech</Link>
            </li>
        </ul>
        <div className='nav_box'>
          <h3 className='nav_box__log'>Log in</h3>
          <h1 className='nav_box__icon' onClick={()=>{setnavbarStatus(!navbarStatus)}}>{!navbarStatus? <>☰</> : <>⛌</>}</h1>
        </div>
      </div>
      <ul className= {navbarStatus?'mobile_navbar--open':'mobile_navbar--close'}  >
          <li>
              <Link to={"./"}>Home</Link>
            </li>
            <li>
              <Link to={"./news"}>News</Link>
            </li>
            <li>
              <Link to={"./login"}>Login</Link>
            </li>
            <li>
              <Link to={"./login"}>Sport</Link>
            </li>
            <li>
              <Link to={"./login"}>Reel</Link>
            </li>
            <li>
              <Link to={"./login"}>Worklife</Link>
            </li>
            <li>
              <Link to={"./login"}>Travel</Link>
            </li>
            <li>
              <Link to={"./login"}>Future</Link>
            </li>
            <li>
              <Link to={"./login"}>Culture</Link>
            </li>
            <li>
              <Link to={"./login"}>Tech</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar