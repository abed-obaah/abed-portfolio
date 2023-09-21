import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import Logo from "@/assets/img/john.svg?react";
import "./top_nav.scss";

const NAV_ITEMS = [
  { path: "#about", name: "About" },
  { path: "#services", name: "Services" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

const TopNavigation = () => {
  const ref = useRef<HTMLUListElement>(null);
  const margin = "20px";

  const [offset, setOffset] = useState(0);
  const [headerTop, setHeaderTop] = useState(margin);
  const [headerHeight, setHeaderHeight] = useState("4.5rem");
  const [toggleNav, setNavToggle] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.scrollY;
      if (scrollUp > offset) {
        setHeaderTop("-4.5rem");
      } else {
        setHeaderTop(margin);
      }
      setOffset(scrollUp);
    };

    if (offset > 0) {
      setHeaderHeight("4.25rem");
    } else {
      setHeaderHeight("4.5rem");
    }
  }, [offset]);

  // --- Hide vertical scroll when mobile menu is active --- //
  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleNav]);

  // --- Handle clicking each menu item --- //
  const handleClickMenu = () => {
    setNavToggle(false);
  };

  // --- Handling clicking outside --- //
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setNavToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header
      className="flex items-center justify-between px-4 md:px-12"
      style={{
        top: headerTop,
        right: margin,
        left: margin,
        height: headerHeight,
      }}
    >
      <a href="/" className="text-white">
        <Logo width={100} height={100} />
      </a>
      <nav className={classNames({ "nav-visible": toggleNav })}>
        <ul ref={ref} className="primary-nav">
          {NAV_ITEMS.map((item, idx) => (
            <li key={idx} className="flex h-fit" onClick={handleClickMenu}>
              <a href={item.path} className="text-white h-fit px-5">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={toggleNav ? "menu-btn close" : "menu-btn"}
        onClick={() => setNavToggle(!toggleNav)}
      >
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="btn-line bg-white" />
        ))}
      </div>
    </header>
  );
};

export default TopNavigation;
