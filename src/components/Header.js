import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
  const ref = useRef()

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

  // --- Hide vertical scroll when mobile menu is active --- //
  useEffect(() => {
    if(toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleNav])

  // --- Handle clicking each menu item --- //
  const handleClickMenu = () => {
    setNavToggle(false)
  }

  // --- Handling clicking outside --- //
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setNavToggle(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <header id="header" style={{ top: headerTop, boxShadow: headerShadow, height: headerHeight }}>
      <h1>
        <a href="/" id="logo">jOHN</a>
      </h1>
      <nav className={toggleNav ? "nav-visible" : ""}>
        <ul ref={ref} className="primary-nav">
          <li onClick={handleClickMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleClickMenu}>
            <a href="#services">Services</a>
          </li>
          <li onClick={handleClickMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleClickMenu}>
            <a href="#contact">Contact</a>
          </li>
          <button onClick={handleClickMenu}>R&eacute;sum&eacute;</button>
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
