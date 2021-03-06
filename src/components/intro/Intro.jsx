import React from 'react'
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack Developer", "Software Development Engineer", "UI/UX Developer", "Data Scientist"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/AlexKeith.png" alt="Alex Keith" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alex Keith</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <div className="downArrow">
          <a href="#works">
            <img src="assets/down.png" alt="arrow-down" />
          </a>
        </div>
      </div>
    </div>
  );
}