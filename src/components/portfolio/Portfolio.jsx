import React from 'react'
import "./portfolio.scss"
export default function portfolio() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="left">
          <h1>Portfolio</h1>
          <ul>
            <li className="active">Emulator Freighter</li>
            <li className="active">OpenCuisine</li>
            <li className="active">Mastermind</li>
            <li className="active">Personal Website</li>
          </ul>
          <div className="container">
            <img src="" alt=""/>
          </div>
        </div>
        <div className="right">

          <div className="imgContainer">
            <img src="assets/Freighter.png" alt="" />
          </div>
          <h1>Emulator Freighter</h1>

        </div>
      </div>
    )
  }
