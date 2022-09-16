import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import LogIn from "./Login";
import BackgroundImage from "./BackgroundImage";

function LoginPage({ setToken }) {
  return (
    <div className="loginPage">
      <BackgroundImage />
      <div className="loginPage__form">
        <div className="loginPage__formAppLogo">
          <Link to="/">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </Link>
        </div>

        <LogIn setToken={setToken} />
        <p>Get the app.</p>
        <span className="loginPage__downloadApp">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
