import React from "react";
import "./AvatarClickMenu.css";

function AvatarClickMenu({ show, logout }) {
  return (
    <>
      {show && (
        <div className="avatarClickMenu">
          <div className="avatarClickMenu__profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="profile"
            />
            <p>Profile</p>
          </div>
          <div className="avatarClickMenu__saved">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1159/1159823.png"
              alt="saved_items"
            />
            <p>Saved</p>
          </div>
          <div className="avatarClickMenu__settings">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2099/2099174.png"
              alt="settings"
            />
            <p>Settings</p>
          </div>
          <div className="avatarClickMenu__switch">
            <img
              src="https://cdn-icons-png.flaticon.com/512/519/519848.png"
              alt="switch_accounts"
            />
            <p>Switch accounts</p>
          </div>
          <hr />
          <div className="avatarClickMenu__logout">
            <img
              onClick={logout}
              src="https://cdn-icons-png.flaticon.com/512/402/402593.png"
              alt="logout"
            />
            <p onClick={logout}>Logout</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AvatarClickMenu;
