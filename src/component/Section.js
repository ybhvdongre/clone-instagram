import React from "react";
import Post from "./Post";
import "./Section.css";
import Story from "./Story";
import posts from "../component/posts.json";

function Section() {
  return (
    <div className="section">
      <div className="section__left">
        <Story />
        {posts.map((item, i) => (
          <Post
            key={item.id}
            avatarImage={item.avatarImage}
            username={item.username}
            location={item.location}
            postImage={item.postImage}
            caption={item.caption}
          />
        ))}
      </div>
      <div className="section__right">
        <div className="section__rightUser">
          <img src="https://i.pravatar.cc/100?random=1" alt="user_avatar" />
        </div>
        <div className="section__rightUser ">
          <p>
            <b>rchadderton01</b>
          </p>
          <p>Richard Tonne</p>
        </div>
        <div className="section__rightUser">
          <button>Switch</button>
        </div>
      </div>
    </div>
  );
}

export default Section;
