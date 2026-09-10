import React, { useEffect, useState } from "react";
import GooeyNav from "./react-bits/gooey-nav";
import StaggeredMenu from "./react-bits/staggered-menu";
import { UseSize } from "./useSize";

const NAV_ITEMS = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#message" },
];

const STAGGERED_ITEMS = NAV_ITEMS.map((item) => ({
  label: item.label,
  ariaLabel: item.label,
  link: item.href,
}));

export const Navigation = (): JSX.Element => {
  const { mobile } = UseSize();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (mobile) {
    return (
      <StaggeredMenu
        className="portfolio-staggered-menu"
        isFixed
        position="right"
        items={STAGGERED_ITEMS}
        displaySocials={false}
        displayItemNumbering
        logoText="Reza Salehi"
        menuButtonColor="#333333"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen
        colors={["#5ca9fb", "#6372ff"]}
        accentColor="#5ca9fb"
        closeOnClickAway
      />
    );
  }

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top portfolio-gooey-nav${
        scrolled ? " blur-active" : ""
      }`}
    >
      <div className="container nav-desktop-row">
        <a className="navbar-brand page-scroll" href="#page-top">
          Reza Salehi
        </a>
        <GooeyNav
          items={NAV_ITEMS}
          animationTime={600}
          particleCount={12}
          particleDistances={[80, 12]}
          particleR={90}
          timeVariance={260}
          initialActiveIndex={0}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  );
};
