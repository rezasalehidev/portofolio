import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-4"
                  data-aos="fade-up"
                >
                  <div className="service-desc">
                    <div className="skill-header">
                      <h3>{d.name}</h3>
                      <span className="skill-percent">{d.text}</span>
                    </div>
                    <ProgressBar striped variant="success" now={d.percent} />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
