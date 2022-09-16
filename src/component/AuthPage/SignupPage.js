import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import BackgroundImage from "./BackgroundImage";

function SignupPage() {
  return (
    <div className="signupPage">
      <BackgroundImage />
      <div className="signupPage__form">
        <div className="signupPage__formAppLogo">
          <Link to="/">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </Link>
        </div>
        <Signup />
        <p>Get the app.</p>
        <span className="signupPage__downloadApp">
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

export default SignupPage;
