import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./component/AuthPage/LoginPage";
import SignupPage from "./component/AuthPage/SignupPage";
import useToken from "./component/AuthPage/useToken";
import MainPage from "./component/MainPage";

function App() {
  const { token, setToken } = useToken();
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(!token);
    console.log("User logged out");
  };

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <MainPage onToggle={handleToggle} show={show} logout={logout} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
