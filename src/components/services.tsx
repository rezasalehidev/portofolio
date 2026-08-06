import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";
import type { ServiceItem } from "../types/portfolio";

interface ServicesProps {
  data?: ServiceItem[];
}

const FRONTEND_NAMES = new Set([
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Nuxt",
  "Pwa",
  "FlexBox / CssGrid",
  "Bootstrap",
  "Tailwind css",
  "Material ui / Ant",
  "ReactQuery / RTK-query",
]);

const MOBILE_NAMES = new Set(["React Native", "Flutter"]);

const groupSkills = (skills: ServiceItem[]) => {
  const frontend: ServiceItem[] = [];
  const mobile: ServiceItem[] = [];
  const backend: ServiceItem[] = [];

  skills.forEach((skill) => {
    if (skill.category === "mobile" || MOBILE_NAMES.has(skill.name)) {
      mobile.push(skill);
      return;
    }

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

  return { frontend, mobile, backend };
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

const SkillsGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: ServiceItem[];
}) => {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div className="skills-group">
      <h3 className="skills-group-title">{title}</h3>
      <div className="row skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const Services = ({ data }: ServicesProps): JSX.Element => {
  const { frontend, mobile, backend } = groupSkills(data ?? []);

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
            <SkillsGroup title="Frontend" skills={frontend} />
            <SkillsGroup title="Mobile" skills={mobile} />
            <SkillsGroup title="Backend" skills={backend} />
          </>
        )}
      </div>
    </div>
  );
};
