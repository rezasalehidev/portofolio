import React from "react";
import type { ExperienceItem } from "../types/portfolio";

interface ExperienceProps {
  data?: ExperienceItem[];
}

export const Experience = ({ data }: ExperienceProps): JSX.Element => {
  return (
    <div id="experience">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Professional Experience</h2>
          <p>
            Roles across product companies and remote teams, focused on
            full-stack delivery, frontend architecture, and scalable systems.
          </p>
        </div>

        <div className="experience-timeline">
          {!data
            ? "loading"
            : data.map((job, index) => (
                <article
                  key={`${job.company}-${job.period}`}
                  className="experience-card"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 80, 320)}
                >
                  <div className="experience-card-header">
                    <div>
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-company">
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </p>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{job.period}</span>
                      <span className="experience-location">{job.location}</span>
                    </div>
                  </div>

                  {job.extras && job.extras.length > 0 ? (
                    <p className="experience-extras">{job.extras.join(" · ")}</p>
                  ) : null}

                  {job.links && job.links.length > 0 ? (
                    <div className="experience-links">
                      {job.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-link"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <ul className="experience-highlights">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="experience-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
        </div>
      </div>
    </div>
  );
};
