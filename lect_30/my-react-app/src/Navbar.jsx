import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
      <ul id="nav" style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
        
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>

        <li>
          <Link to='/task'>Task</Link>
        </li>

        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>

      </ul>
    </div>
  )
}

export default NavBar