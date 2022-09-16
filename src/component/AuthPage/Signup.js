import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Signup() {
  var [email, setEmail] = useState();
  var [fullname, setFullname] = useState();
  var [username, setUsername] = useState();
  var [password, setPassword] = useState();

  const handleSubmit = () => {
    // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:8080/api/user/"; //Our previously set up route in the backend
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        email: email,
        fullname: fullname,
        username: username,
        password: password,
        clockedIn: false,
        dates: [],
      }),
    }).then(() => {
      // Once posted, the user will be notified
      alert("Your account has been created!");
    });
  };

  return (
    <div className="signup">
      <div className="signup__form">
        <p id="signup__text">
          Sign up to see photos and videos from your friends.
        </p>
        <form
          method="post"
          action="/api/user"
          onSubmit={handleSubmit}
          className="signup__formText"
        >
          <label htmlFor="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              required
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <strong>Learn More</strong>
          </p>
          <p>
            By signing up, you agree to our{" "}
            <strong>Terms, Privacy Policy</strong> and{" "}
            <strong>Cookies Policy </strong>.
          </p>
          <button type="submit" value="Submit">
            Sign Up
          </button>
        </form>
        <div className="signup__formMoreText">
          <p>
            Have an account?{" "}
            <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
              <strong>Log in</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
