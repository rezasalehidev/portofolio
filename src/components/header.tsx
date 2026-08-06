import React, { useRef, useEffect } from "react";
import { init } from "ityped";
import type { HeaderData } from "../types/portfolio";

interface HeaderProps {
  data?: HeaderData;
}

export const Header = ({ data }: HeaderProps): JSX.Element => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    init(textRef.current, {
      startDelay: 650,
      typeSpeed: 220,
      showCursor: true,
      strings: ["Hi, I'm Reza", "Welcome to my website", "Let's build something"],
    });
  }, []);

  return (
    <header id="header">
      <div className="intro">
        <div className="intro-glow intro-glow-one" aria-hidden="true"></div>
        <div className="intro-glow intro-glow-two" aria-hidden="true"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-xs-12 intro-text">
                <p className="intro-eyebrow">Full-Stack Specialist · Frontend</p>
                <h2 className="intro-heading">
                  <span className="typed-text" ref={textRef}></span>
                </h2>
                <p className="intro-paragraph">
                  {data?.paragraph ?? "Loading"}
                </p>
                <div className="intro-actions">
                  <a href="#about" className="btn btn-custom btn-lg page-scroll">
                    About me
                  </a>
                  <a
                    href="#portfolio"
                    className="btn btn-outline-light page-scroll"
                  >
                    View projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
