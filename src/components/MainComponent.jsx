import React from 'react'
import Intro from "./intro/Intro"
import Portfolio from "./portfolio/Portfolio"
import Contact from "./contact/Contact"

export default function MainComponent() {
  return (
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
  );
}
