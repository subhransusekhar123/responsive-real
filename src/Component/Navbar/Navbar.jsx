import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      
      <div className="logo" onClick={()=>navigate("/")}>Estary</div>
      
      <div className="menu">
        <div className="sub-menu">Rent</div>
        <div className="sub-menu">Buy</div>
        <div className="sub-menu">sell</div>
         
        <div className="sub-menu">
            <Dropdown data="manageProperty"/>
        </div>
        <div className="sub-menu">
          <Dropdown data = "resourses"/>
        </div>
        <div className="sub-menu" onClick={()=>navigate("/liked")}>
       
        <i class="fa fa-bag-shopping"></i>
        fav
        </div>
      </div>
      <div className="auth">
        <button className="btn">Login</button>
        <button className="btn">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
