import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './index.css'
function Navbar() {
  const navigate = useNavigate();
  const [navbarStatus, setnavbarStatus] = useState(false)
  const navLinks = [
    {
      id: 1,
      name: "Home",
      route: ""
    },
    {
      id: 2,
      name: "News",
      route: "News"
    },
    {
      id: 3,
      name: "Sport",
      route: "Sport"
    },
    {
      id: 4,
      name: "Reel",
      route: "Reel"
    },
    {
      id: 5,
      name: "Worklife",
      route: "Worklife"
    },
    {
      id: 6,
      name: "Travel",
      route: "Travel"
    },
    {
      id: 7,
      name: "Future",
      route: "Future"
    },
    {
      id: 8,
      name: "Culture",
      route: "Culture"
    },
    {
      id: 9,
      name: "Tech",
      route: "Tech"
    },
  ]
  return (
    <nav className='mynav'>
      <div className='container'>
        <h1 className='Navbrand' onClick={() => { navigate("/") }}>Blog</h1>
        <ul className='desktop_navbar'>
          {navLinks.map((item, index) => (
            <li key={item.id}>
              <Link to={`/${item.route}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className='nav_box'>
          <Link to="/login" className='nav_box__log'>Log in</Link>
          <h1 className='nav_box__icon' onClick={() => { setnavbarStatus(!navbarStatus) }}>{!navbarStatus ? <>☰</> : <>⛌</>}</h1>
        </div>
      </div>
      <ul className={navbarStatus ? 'mobile_navbar--open' : 'mobile_navbar--close'}  >
        {navLinks.map((item, index) => (
          <li key={item.id}>
            <Link to={`/${item.route}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar