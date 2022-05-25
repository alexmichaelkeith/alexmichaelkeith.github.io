import "./works.scss";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Freighter from "./Freighter.png";
import OpenCuisine from "./OpenCuisine.svg";
import Portfolio from "./portfolio-icon.svg";
export default function Works() {
 
  return (
      <div className="works" id="works">
      <Carousel className="carousel" variant="dark">

      <Carousel.Item className="item">
      <div className="title">
          <h1>Emulator Freighter</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="Emulator Freighter"
          height="35%"
          width="35%"
        />
        <div className="description">
          <p><br/>A fullstack C++ application to manage emulators and roms. Automatically scrapes and manages metadata as well as displaying an interactive menu to organize and launch roms. Active builds maintained for Windows and Linux. </p>
        </div>
          <div className="technologies">
            <h4>Technologies: </h4>
            <p>C++, QT, Python, Linux</p>
          </div>
      </Carousel.Item>

      <Carousel.Item className="item">
      <div className="title">
          <h1>Open Cuisine</h1>
        </div>
        <img
          className="image"
          src={OpenCuisine}
          alt="OpenCuisine"
          height="15%"
          width="15%"
        />
        <div className="description">
          <p>A docker-compose tech stack that features a Python flask web application that allows for CRUD functionalities within a recipe database MySQL server.</p>
        </div>
          <div className="technologies">
            <h4>Technologies: </h4>
            <p>Python, MySQL, Flask, HTML, Docker</p>
          </div>
      </Carousel.Item>

      <Carousel.Item className="item">
      <div className="title">
          <h1>Portfolio Website</h1>
        </div>
        <img
          className="image"
          src={Portfolio}
          alt="Portfolio Website"
          height="15%"
          width="15%"
        />
        <div className="description">
          <p>A personal portfolio showcasing myself and my knowledge, featuring interactive demonstrations of my personal projects using the source code hosted within a dynamic React website hosted with GitHub Pages.</p>
        </div>
          <div className="technologies">
            <h4>Technologies: </h4>
            <p>JavaScript, React, HTML, Sass</p>
          </div>
      </Carousel.Item>
      
    </Carousel>
    </div>

  );
}