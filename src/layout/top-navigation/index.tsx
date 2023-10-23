import classNames from "classnames";
import { useEffect, useState } from "react";
import Logo from "@/assets/img/john.svg?react";
import CustomButton from "@/components/CustomButton";
import { useLenis } from "@studio-freight/react-lenis";

import "./nav.scss";

const NAV_ITEMS = [
  { path: "#about", name: "About" },
  { path: "#services", name: "Services" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

const TopNavigation = () => {
  const lenis = useLenis();
  const margin = "20px";

  const [offset, setOffset] = useState(0);
  const [headerTop, setHeaderTop] = useState(margin);
  const [toggleNav, setNavToggle] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.scrollY;
      if (scrollUp > offset) {
        setHeaderTop("-4.5rem");
      } else {
        setHeaderTop(margin);
      }
      setOffset(scrollUp);
      handleScroll();
    };
  }, [offset]);

  // --- Hide vertical scroll when mobile menu is active --- //
  useEffect(() => {
    if (toggleNav) {
      lenis.stop();
    } else if (!toggleNav && isDirty) {
      lenis.start();
    } else {
      setIsDirty(true);
    }
  }, [isDirty, lenis, toggleNav]);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`header nav a[href*="${id}"]`)
            .classList.add("active");
        });
      }
    });
  };

  return (
    <header
      className="flex items-center justify-between h-16 px-4 md:px-12 border"
      style={{
        top: headerTop,
        right: margin,
        left: margin,
      }}
    >
      <a href="/" className="text-white">
        <Logo width={100} height={100} />
      </a>
      <nav
        className={classNames("border-l md:border-l-0", {
          "nav-visible": toggleNav,
        })}
      >
        {NAV_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="text-white/60 text-base h-fit px-5 transition-all"
            onClick={() => {
              setNavToggle(false);
              lenis.scrollTo(item.path);
            }}
          >
            {item.name}
          </a>
        ))}
        <div className="block md:hidden">
          <CustomButton
            href="https://drive.google.com/file/d/1s1DPe36CaSGmsjSEJ3jmQUuOMHqIqVYO/view"
            text="Résumé"
            icon="file-link"
          />
        </div>
      </nav>
      <div className="hidden md:block">
        <CustomButton
          href="https://drive.google.com/file/d/1s1DPe36CaSGmsjSEJ3jmQUuOMHqIqVYO/view"
          text="Résumé"
          icon="file-link"
        />
      </div>
      <div
        className={classNames("menu-btn", { close: toggleNav })}
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
