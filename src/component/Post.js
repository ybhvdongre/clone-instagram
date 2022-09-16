import React from "react";
import "./Post.css";
import comments from "../component/comments.json";

function Post({ avatarImage, username, location, postImage, caption }) {
  return (
    <div className="app__post">
      <div className="post">
        <div className="post__user">
          <img src={avatarImage} alt="user_avatar" id="post__userAvatar" />
        </div>
        <div className="post__user">
          <p>
            <b>{username}</b>
          </p>
          <p>{location}</p>
        </div>
        <div className="post__user">
          <img
            id="moreOptionsLogo"
            src="https://cdn-icons-png.flaticon.com/512/17/17764.png"
            alt="moreOptions_logo"
          />
        </div>
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__iconsSection">
        <div className="post__icons post__iconsLeft">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="Like"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/134/134783.png"
            alt="Comment"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
            alt="Share"
          />
        </div>
        <div className="post__icons post__iconsRight">
          <img
            src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
            alt="Save"
          />
        </div>
      </div>
      <div className="post__caption">
        <p>
          <strong>{username} </strong>
          {caption}
        </p>
      </div>
      <div className="post__comment">
        {comments.map((data, i) => (
          <p key={data.postId}>
            <strong>{data.uname} </strong>
            {data.body}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Post;
