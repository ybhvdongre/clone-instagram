import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import AvatarClickMenu from "./AvatarClickMenu";

function Header({ show, onToggle, logout }) {
  return (
    <div className="header">
      <Navbar onToggle={onToggle} />
      <AvatarClickMenu show={show} logout={logout} />
    </div>
  );
}

export default Header;
