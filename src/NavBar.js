import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => (
<nav>
<ul>
  <li><NavLink exact to="/">Home</NavLink></li>
  <li><NavLink exact to="/settings">Settings</NavLink></li>
  <li><NavLink exact to="/messages">Messages</NavLink></li>
  <li><NavLink exact to="/chat">Chat</NavLink></li>
</ul>
</nav>
); 

export default NavBar; 
