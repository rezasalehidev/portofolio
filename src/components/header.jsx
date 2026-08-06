import React, { useRef, useEffect } from "react";
import { init } from "ityped";

export const Header = (props) => {
  const textRef = useRef();

  useEffect(() => {
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
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-xs-12 intro-text">
                <h2 className="intro-heading">
                  <span className="typed-text" ref={textRef}></span>
                </h2>
                <p className="intro-paragraph">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  About me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
