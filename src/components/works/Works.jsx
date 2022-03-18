import "./works.scss";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Freighter from "./Freighter.png";
import OpenCuisine from "./opencuisine.png";
import Portfolio from "./portfolio-icon.svg";
export default function Works() {
 
  return (
      <div className="works">
        <h1>Works</h1>
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
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
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
          <h1>Mastermind</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="Mastermind"
          height="35%"
          width="35%"
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