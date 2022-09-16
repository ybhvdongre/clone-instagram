import React from "react";
import "./Story.css";
import story from "../component/stories.json";

function Story() {
  return (
    <div className="story">
      {story.length > 0  &&
        story.map((item, i) => (
          <img key={item.id} src={item.avatarImage} alt="" />
        ))}
    </div>
  );
}

export default Story;
