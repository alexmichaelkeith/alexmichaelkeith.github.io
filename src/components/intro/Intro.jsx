import React from 'react'
import "./intro.scss"

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alex Keith</h1>
          <h3>
            Fullstack Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow-down" />
        </a>
      </div>
    </div>
  );
}