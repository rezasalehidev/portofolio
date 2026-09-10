import React from "react";
import type { ContactData } from "../types/portfolio";

interface ContactProps {
  data?: ContactData;
}

export const Contact = ({ data }: ContactProps): JSX.Element => {
  return (
    <div id="contact">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Get in touch</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Feel free to reach out for collaborations or opportunities.
          </p>
        </div>
        <div className="row contact-row">
          <div
            className="col-xs-12 col-sm-6 contact-info"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="contact-item">
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>
              <p>{data?.address ?? "loading"}</p>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-6 contact-info"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="contact-item">
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>
              <p>
                {data?.email ? (
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="social" data-aos="zoom-in" data-aos-delay="250">
          <ul>
            <li>
              <a
                href={data?.Github ?? "/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href={data?.linkedin ?? "/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
