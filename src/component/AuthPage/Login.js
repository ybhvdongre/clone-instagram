import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LogIn({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} action="" className="login__formText">
        <label>
          <input
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            id="username"
            placeholder="Username or email"
            required
          />
        </label>
        <label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <div className="login__formExtraText">
        <p>Forgot Password?</p>
      </div>
      <div className="login__formMoreText">
        <p>
          Don't have an account?
          <Link to="/signup" style={{ color: "blue", textDecoration: "none" }}>
            <strong>Sign up</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LogIn;
