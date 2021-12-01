import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [offset, setOffset] = useState(0)
  const [navTop, setNavTop] = useState("0")
  const [navShadow, setNavShadow] = useState("none")
  const [navHeight, setNavHeight] = useState("5rem")
  const [mobileNav, setMobileNav] = useState(false)

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
      setNavHeight("4rem")
    } else {
      setNavShadow("none")
      setNavHeight("5rem")
    }

  }, [offset]);

  return (
    <nav id="nav" style={{ top: navTop, boxShadow: navShadow, height: navHeight }}>
      <h1>
        <a href="#" id="logo">jOHN</a>
      </h1>
       <div className="right-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button>Let's Connect</button>
      <div className={mobileNav ? "menu-btn close" : "menu-btn"} onClick={() => setMobileNav(!mobileNav)}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    </nav>
  )
}

export default Navbar;
