import React from "react";
import "./MainPage.css";
import Header from "./Header";
import Section from "./Section";

function MainPage({ show, onToggle, logout }) {
  return (
    <div className="mainpage">
      <Header show={show} onToggle={onToggle} logout={logout} />
      <Section />
    </div>
  );
}

export default MainPage;
