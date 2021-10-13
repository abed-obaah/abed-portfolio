import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [offset, setOffset] = useState(0)
  const [navShadow, setNavShadow] = useState("0")

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.pageYOffset
      if(scrollUp > offset) {
        setNavTop("-5rem")
      } else {
        setNavTop("0")
      }
      setOffset(scrollUp)
    }

    if(offset > 0) {
      setNavShadow("0 20px 20px rgba(0,0,0,0.05)")
    } else {
      setNavShadow("none")
    }

  }, [offset]);

  return (
    <nav id="nav" style={{ top: navTop, boxShadow: navShadow }}>
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
