import React from 'react'
import Intro from "./intro/Intro"
import Works from "./works/Works"
import Contact from "./contact/Contact"
export default function MainComponent() {
  return (
      <div className="sections">
        <Intro/>
        <Works/>
        <Contact/>
      </div>
  );
}