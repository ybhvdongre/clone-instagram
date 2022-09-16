import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onToggle }) {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__appLogo">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </div>
      </Link>
      <div className="navbar__searchbox">
        <input
          type="search"
          name="searchbox"
          id="searchbox"
          placeholder="Search"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
          alt=""
        />
      </div>
      <div className="navbar__icons">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
          alt="home_logo"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1617/1617469.png"
          alt="messenger_logo"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/7263/7263985.png"
          alt="newpost_logo"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/77/77521.png"
          alt="explore_logo"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          alt="like_logo"
        />
        <img
          onClick={onToggle}
          src="https://i.pravatar.cc/100?random=1"
          alt="user_avatar"
          id="navbar__userAvatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
