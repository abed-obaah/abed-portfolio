import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default () => {
  const lenis = useLenis();
  const margin = "20px";

  const [offset, setOffset] = useState(0);
  const [top, setTop] = useState(margin);
  const [menu, setMenu] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollUp = window.scrollY;
      if (scrollUp > offset) {
        setTop("-4.5rem");
      } else {
        setTop(margin);
      }
      setOffset(scrollUp);
      handleScroll();
    };
  }, [offset]);

  // --- Hide vertical scroll when mobile menu is active --- //
  useEffect(() => {
    if (menu) {
      lenis.stop();
    } else if (!menu && isDirty) {
      lenis.start();
    } else {
      setIsDirty(true);
    }
  }, [isDirty, lenis, menu]);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    sections.forEach((sec) => {
      const scrollY = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`header nav a[href*="${id}"]`)!
            .classList.add("active");
        });
      }
    });
  };

  return { menu, top, margin, setMenu, lenis };
};
