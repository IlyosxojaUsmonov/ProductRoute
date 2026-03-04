import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyBrand</div>

        <nav className="nav">
          <NavLink to="/" end>Login</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
