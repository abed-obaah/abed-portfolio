import classNames from "classnames";
import Logo from "@/assets/icons/john.svg?react";
import CustomButton from "@/components/CustomButton";
import useTopNavigation from "./hooks/useTopNavigation";

import "./nav.scss";

const NAV_ITEMS = [
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];

const TopNavigation = () => {
  const { menu, top, margin, setMenu, lenis } = useTopNavigation();

  return (
    <header
      className="flex items-center justify-between h-16 px-4 md:px-12 border animate-fade-in"
      style={{
        top,
        right: margin,
        left: margin,
      }}
    >
      <a href="/" className="text-zinc-50">
        <Logo width={100} height={100} />
      </a>
      <nav
        className={classNames("border-l md:border-l-0", {
          "nav-visible": menu,
        })}
      >
        {NAV_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="text-zinc-500 text-base h-fit px-5 transition-all"
            onClick={() => {
              setMenu(false);
              lenis.scrollTo(item.path);
            }}
          >
            {item.name}
          </a>
        ))}
        <div className="block md:hidden mt-5">
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
        className={classNames("menu-btn", { close: menu })}
        onClick={() => setMenu(!menu)}
      >
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="btn-line bg-zinc-50" />
        ))}
      </div>
    </header>
  );
};

export default TopNavigation;
