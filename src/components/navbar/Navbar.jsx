import React from "react";
import Input from "../input/Input";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <h1 className="logo">Neetflx Review</h1>
        <ul>
          <li>Home</li>
          <li>Tv Series</li>
          <li>Animation</li>
          <li>My List</li>
          <li>Reviewed</li>
        </ul>
      </div>
      <div className="navbar-search">
        <Input
          inputClassName={"inputNavbar"}
          type="text"
          placeholder="Search"
        />
        <ul>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
