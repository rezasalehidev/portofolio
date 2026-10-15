import React, { useEffect, useState } from "react";
import GooeyNav from "./react-bits/gooey-nav";
import StaggeredMenu from "./react-bits/staggered-menu";
import { UseSize } from "./useSize";

const CAFE_BAZAAR_URL = "https://cafebazaar.ir/developer/347168781117";

const NAV_ITEMS = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#message" },
];

const STAGGERED_ITEMS = [
  ...NAV_ITEMS.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: item.href,
  })),
  {
    label: "Cafe Bazaar",
    ariaLabel: "Cafe Bazaar Android apps",
    link: CAFE_BAZAAR_URL,
  },
];

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
        <div className="nav-desktop-links">
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
          <a
            className="nav-bazaar-link"
            href={CAFE_BAZAAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Cafe Bazaar Android apps"
          >
            <i className="fa fa-android" aria-hidden="true" />
            Cafe Bazaar
          </a>
        </div>
      </div>
    </nav>
  );
};
