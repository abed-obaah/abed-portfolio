import React, { useEffect, useState } from 'react';

const Header = () => {
  const [offset, setOffset] = useState(0)
  const [headerTop, setHeaderTop] = useState("0")
  const [headerShadow, setHeaderShadow] = useState("none")
  const [headerHeight, setHeaderHeight] = useState("5rem")
  const [toggleNav, setNavToggle] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.pageYOffset
      if(scrollUp > offset) {
        setHeaderTop("-5rem")
      } else {
        setHeaderTop("0")
      }
      setOffset(scrollUp)
    }

    if(offset > 0) {
      setHeaderShadow("0 20px 20px rgba(0,0,0,0.05)")
      setHeaderHeight("4.5rem")
    } else {
      setHeaderShadow("none")
      setHeaderHeight("5rem")
    }

  }, [offset]);

  return (
    <header id="nav" style={{ top: headerTop, boxShadow: headerShadow, height: headerHeight }}>
      <h1>
        <a href="#" id="logo">jOHN</a>
      </h1>
      <nav>
        <ul className="primary-nav">
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
          <button>R&eacute;sum&eacute;</button>
        </ul>
      </nav>
      <button>Let's Connect</button>
      <div className={toggleNav ? "menu-btn close" : "menu-btn"} onClick={() => setNavToggle(!toggleNav)}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    </header>
  )
}

export default Header;
