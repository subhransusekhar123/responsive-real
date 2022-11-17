import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle,setToggle ] = useState(false);


  const clickHandler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }


  return (


      <nav class="navbar">
        <div class="brand-title">Realtor</div>
        <a href="#" className={`toggle-button `}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div className={`navbar-links ${toggle ? "active":""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        </nav>



  );
};

export default Navbar;
