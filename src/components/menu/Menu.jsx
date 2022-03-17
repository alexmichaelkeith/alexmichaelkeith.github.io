import "./menu.scss"
import React from "react"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
                <ul>
                    <li>
                        <a href="#portfolio">Emulator Freighter</a>
                    </li>
                    <li>
                        <a href="#portfolio">OpenCuisine</a>
                    </li>
                    <li>
                        <a href="#portfolio">Mastermind</a>
                    </li>
                    <li>
                        <a href="#works">Portfolio</a>
                    </li>
                </ul>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
