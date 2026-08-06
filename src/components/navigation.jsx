import React, { useEffect, useState } from "react";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const menu = document.getElementById("menu");
      if (!menu) return;

      if (scrollTop > 30) {
        menu.classList.add("blur-active");
      } else {
        menu.classList.remove("blur-active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle${menuOpen ? "" : " collapsed"}`}
            aria-expanded={menuOpen}
            aria-controls="bs-example-navbar-collapse-1"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" onClick={closeMenu}>
            Reza Salehi
          </a>
        </div>

        <div
          className={`navbar-collapse collapse${menuOpen ? " in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll" onClick={closeMenu}>
                About me
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
