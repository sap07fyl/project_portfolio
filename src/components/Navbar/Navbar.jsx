// import React from 'react'
import React, { useContext, useState , useEffect} from "react"
// import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { MdOutlineMenu } from "react-icons/md";
import {portfolioContext } from "../Context/Context"


export default function Navbar() {
  const style = { color: "#727983", fontSize: "2em", display: 'flex', marginLeft: "auto", marginRight: "auto"}

  const {toggleMenu, setToggleMenu} = useContext(portfolioContext)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])

  
  window.addEventListener("scroll", reveal);
          
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }

  return (
      <nav>
        <div className="nav_left">
          <div className="icon responsive_icon"><a href="/">SF</a></div>
          <button onClick={toggleNav} className="btn">
            <MdOutlineMenu style={style}/>
          </button> 
        </div>
        <div className="nav_right">
          {((toggleMenu || screenWidth > 1000) && (
          <ul className="list">
            <li className="items"><a href="/project/1">Blogging Site</a></li>
            <li className="items"><a href="/project/2">Project Portfolio</a></li>
            <li className="items"><a href="/project/3">Mirror App</a></li>
            <li className="items"><a href="/project/4">Academic Matching System</a></li>
          </ul>)
          )}
        </div>
      </nav>

  );
}