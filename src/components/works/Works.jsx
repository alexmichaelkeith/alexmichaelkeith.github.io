import "./works.scss";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Freighter from "./Freighter.png";
export default function Works() {
 
  return (
      <div className="Works">
        <h1>Portfolio</h1>
      <Carousel className="carousel" variant="dark">

      <Carousel.Item className="emulatorFreighter">
      <div className="title">
          <h1>Emulator Freighter</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="Emulator Freighter"
        />
        <div className="description">
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
        </div>
      </Carousel.Item>

      <Carousel.Item className="openCuisine">
      <div className="title">
          <h1>OpenCuisine</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="First slide"
        />
        <div className="description">
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
        </div>
      </Carousel.Item>

      <Carousel.Item className="mastermind">
      <div className="title">
          <h1>Mastermind</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="Mastermind"
        />
        <div className="description">
          <h2>Section Head</h2>
          <p>Description</p>
          <h2>Section Head</h2>
          <p>Description</p>
        </div>
      </Carousel.Item>

      <Carousel.Item className="portfolio">
      <div className="title">
          <h1>Portfolio</h1>
        </div>
        <img
          className="image"
          src={Freighter}
          alt="Portfolio"
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