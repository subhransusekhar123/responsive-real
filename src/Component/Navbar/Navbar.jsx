import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Estary</div>
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
      </div>
      <div className="auth">
        <button className="btn">Login</button>
        <button className="btn">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
