import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";
import type { ServiceItem } from "../types/portfolio";

interface ServicesProps {
  data?: ServiceItem[];
}

export const Services = ({ data }: ServicesProps): JSX.Element => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-grid">
          {data?.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="col-xs-12 col-sm-6 col-md-4"
              data-aos="fade-up"
            >
              <div className="service-desc">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-percent">{skill.text}</span>
                </div>
                <ProgressBar
                  striped
                  variant="success"
                  now={Number(skill.percent)}
                />
              </div>
            </div>
          )) ?? "loading"}
        </div>
      </div>
    </div>
  );
};
