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

    console.log(toggle);
  }


  return (


      <nav class="navbar">
        <div class="brand-title">Realtor</div>
       <div className="toggle-button" onClick={clickHandler}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
       </div>
       
        <div className={`navbar-links ${toggle? "margin-right" : ""}`}>
          <ul>
            <li><a href="#" onClick={()=>navigate("/")}>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li onClick={()=>navigate("/liked")}><a href="#">like</a></li>
          </ul>
        <div className="close" onClick={clickHandler}>
          <h1 >x</h1>
        </div>
        </div>

        </nav>



  );
};

export default Navbar;
