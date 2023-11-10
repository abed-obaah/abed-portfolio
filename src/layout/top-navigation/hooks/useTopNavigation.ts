import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default () => {
  const lenis = useLenis();
  const margin = "20px";

  const [offset, setOffset] = useState(0);
  const [top, setTop] = useState(margin);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > offset) {
        setTop("-84px"); // The Header height: 64px + Top: 20px === 84px
      } else {
        setTop(margin);
      }
      setOffset(scrollY);
      handleScroll(scrollY);
    };
  }, [offset]);

  const handleScroll = (scrollY: number) => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          const element = document.querySelector(`header nav a[href*="${id}"]`);
          if (element) {
            element.classList.add("active");
          }
        });
      }
    });
  };

  return { menu, top, margin, setMenu, lenis };
};
