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
          <p>A fullstack C++ application to manage emulators and roms. Automatically scrapes and manages metadata as well as displaying an interactive menu to organize and launch roms. Active builds maintained for Windows and Linux. </p>
          <div className="features">
            <h4>Features</h4>
            <ul>
              <li>Intelligent ROM scanning</li>
              <li>One time emulator configuration</li>
              <li>IGDB Metadata scraping</li>
              <li>Cross platform</li>
            </ul>
          </div>
          <div className="roadmap">
            <ul>
              <li>Intelligent ROM scanning</li>
              <li>One time emulator configuration</li>
              <li>IGDB Metadata scraping</li>
              <li>Cross platform</li>
            </ul>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="item">
      <div className="title">
          <h1>OpenCuisine</h1>
        </div>
        <img
          className="image"
          src={OpenCuisine}
          alt="First slide"
        />
        <div className="description">
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
        </div>
      </Carousel.Item>

      <Carousel.Item className="item">
      <div className="title">
          <h1>Portfolio</h1>
        </div>
        <img
          className="image"
          src={Portfolio}
          alt="Portfolio"
          height="15%"
          width="15%"
        />
        <div className="description">
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
        </div>
      </Carousel.Item>
      
    </Carousel>
    </div>

  );
}