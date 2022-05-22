import React from 'react'
import {Mail, LinkedIn} from "@material-ui/icons"
import "./topbar.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Alex Keith</a>
            <div className="itemContainer">
              <Link to=""style={{ textDecoration: 'none'}}
                onClick={() => window.location = 'mailto:alexmichaelkeith@gmail.com'}>
                  <Mail className="icon"/>
                  alexmichaelkeith@gmail.com
              </Link>
            </div>
            <div className="itemContainer">
              <a href="https://www.linkedin.com/in/alexmichaelkeith/"style={{ textDecoration: 'none' }}>
                  <LinkedIn className="icon"/>
                  LinkedIn/alexmichaelkeith
              </a>
            </div>
            <div className="itemContainer">
              <a href="https://www.github.com/alexmichaelkeith/"style={{ textDecoration: 'none' }}>
                  <GitHubIcon className="icon"/>
                  Github/alexmichaelkeith
              </a>
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
