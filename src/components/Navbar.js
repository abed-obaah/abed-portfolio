import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.pageYOffset
      if(scrollUp > offset) {
        document.getElementById("nav").style.top = "-5rem";
      } else {
        document.getElementById("nav").style.top = "0";
      }
      setOffset(scrollUp)
    }

    if(offset > 0) {
      document.getElementById("nav").style.boxShadow = "0 2px 1px rgba(0,0,0,0.09),0 4px 2px rgba(0,0,0,0.09),0 8px 4px rgba(0,0,0,0.09),0 16px 8px rgba(0,0,0,0.09),0 32px 16px rgba(0,0,0,0.09)";
    } else {
      document.getElementById("nav").style.boxShadow = "none";
    }

  }, [offset]);

  return (
    <nav id="nav">
      <h1>
        <a href="#" id="logo">Johnphealipto</a>
      </h1>
      <div className="right-nav">
        <ul>
          <li>
            <a href="#home">Home.</a>
          </li>
          <li>
            <a href="#about">About.</a>
          </li>
          <li>
            <a href="#experience">Experience.</a>
          </li>
          <li>
            <a href="#projects">Projects.</a>
          </li>
          <li>
            <a href="#contact">Contact.</a>
          </li>
        </ul>
      </div>
      <button>Connect</button>
    </nav>
  )
}

export default Navbar;
