import React from "react";
import type { AboutData } from "../types/portfolio";

interface AboutProps {
  data?: AboutData;
}

export const About = ({ data }: AboutProps): JSX.Element => {
  return (
    <div id="about">
      <div className="container">
        <div className="row about-row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text" data-aos="fade-up">
              <h2>About me</h2>
              <p>{data?.paragraph ?? "loading..."}</p>
              <h3>Professional experiences</h3>
              <ul className="about-list">
                {data?.Why.map((item, i) => (
                  <li key={`${item}-${i}`}>{item}</li>
                )) ?? "loading"}
              </ul>
            </div>
          </div>
          <div
            className="col-xs-12 col-md-6 about-image-wrap"
            data-aos="fade-up"
          >
            <img
              src="img/sd.jpg"
              className="img-responsive about-image"
              alt="Reza Salehi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
