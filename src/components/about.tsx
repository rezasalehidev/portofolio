import React from "react";
import type { AboutData } from "../types/portfolio";

interface AboutProps {
  data?: AboutData;
}

const DEFAULT_CAREER_START_YEAR = 2018;

const getYearsOfExperience = (careerStartYear: number): number => {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - careerStartYear);
};

const formatAboutParagraph = (paragraph: string, years: number): string =>
  paragraph.replace(/\{\{\s*years\s*\}\}/g, String(years));

export const About = ({ data }: AboutProps): JSX.Element => {
  const years = getYearsOfExperience(
    data?.careerStartYear ?? DEFAULT_CAREER_START_YEAR
  );
  const paragraph = data?.paragraph
    ? formatAboutParagraph(data.paragraph, years)
    : "loading...";

  return (
    <div id="about">
      <div className="container">
        <div className="row about-row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text" data-aos="fade-up">
              <h2>About me</h2>
              <p>{paragraph}</p>
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
