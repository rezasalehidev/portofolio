import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";
import type { ServiceItem } from "../types/portfolio";

interface ServicesProps {
  data?: ServiceItem[];
}

const FRONTEND_NAMES = new Set([
  "React",
  "Next.js",
  "React Native",
  "Vue",
  "Angular",
  "Nuxt",
  "Javascript",
  "Typescript",
  "Pwa",
  "FlexBox / CssGrid",
  "Bootstrap / Tailwind css",
  "Material ui / Ant",
  "ReactQuery / RTK-query",
]);

const groupSkills = (skills: ServiceItem[]) => {
  const frontend: ServiceItem[] = [];
  const backend: ServiceItem[] = [];

  skills.forEach((skill) => {
    if (skill.category === "backend") {
      backend.push(skill);
      return;
    }

    if (skill.category === "frontend" || FRONTEND_NAMES.has(skill.name)) {
      frontend.push(skill);
      return;
    }

    backend.push(skill);
  });

  return { frontend, backend };
};

const SkillCard = ({ skill }: { skill: ServiceItem }) => (
  <div className="col-xs-12 col-sm-6 col-md-4" data-aos="fade-up">
    <div className="service-desc">
      <div className="skill-header">
        <h3>{skill.name}</h3>
        <span className="skill-percent">{skill.text}</span>
      </div>
      <ProgressBar striped variant="success" now={Number(skill.percent)} />
    </div>
  </div>
);

export const Services = ({ data }: ServicesProps): JSX.Element => {
  const { frontend, backend } = groupSkills(data ?? []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        {!data ? (
          "loading"
        ) : (
          <>
            <div className="skills-group">
              <h3 className="skills-group-title">Frontend</h3>
              <div className="row skills-grid">
                {frontend.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h3 className="skills-group-title">Backend</h3>
              <div className="row skills-grid">
                {backend.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
