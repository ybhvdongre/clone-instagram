import React, { useEffect, useState } from "react";
import "./BackgroundImage.css";

const images = [
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
];

function BackgroundImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="backgroundImage__image">
      <img
        src={images[currentIndex]}
        alt=""
        className="backgroundImage__imageProp"
      />
    </div>
  );
}

export default BackgroundImage;
