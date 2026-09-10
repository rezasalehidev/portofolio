import React from "react";
import ParticleText from "./particle-text";
import type { HeaderData } from "../types/portfolio";

interface HeaderProps {
  data?: HeaderData;
}

export const Header = ({ data }: HeaderProps): JSX.Element => {
  const title = data?.title ?? "Reza Salehi";

  return (
    <header id="header">
      <div className="intro">
        <div className="intro-glow intro-glow-one" aria-hidden="true"></div>
        <div className="intro-glow intro-glow-two" aria-hidden="true"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-xs-12 intro-text">
                <div className="intro-particle" data-aos="fade-down">
                  <ParticleText
                    text={title}
                    particleSize={2.2}
                    density={4}
                    color="#ffffff"
                    highlightColor="#5ca9fb"
                    scatter={190}
                    gatherDuration={1600}
                    stagger={420}
                    pointerRepel={42}
                    repelRadius={120}
                    idleDrift={0.8}
                    trigger="hover"
                    fontSize="clamp(2.6rem, 10vw, 6.5rem)"
                    fontWeight={800}
                    fontFamily="Raleway, sans-serif"
                    glow
                  />
                </div>
                <p
                  className="intro-paragraph"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {data?.paragraph ?? "Loading"}
                </p>
                <div
                  className="intro-actions"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
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
