import React from 'react'
import {Person, Mail, LinkedIn} from "@material-ui/icons"
import "./topbar.scss"

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Alex Keith</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+1 (513)-802-8383</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>alex.michael.keith@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedIn className="icon"/>
              <span><a href="https://www.linkedin.com/in/alexmichaelkeith/">LinkedIn/alexmichaelkeith</a></span>
            </div>

        </div>




        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
