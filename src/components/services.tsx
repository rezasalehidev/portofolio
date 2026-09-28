import React, { useMemo, useState } from "react";
import type { ServiceItem } from "../types/portfolio";

interface ServicesProps {
  data?: ServiceItem[];
}

type SkillCategory = "frontend" | "mobile" | "backend" | "devops" | "ai";
type FilterKey = "all" | SkillCategory;
type SkillLevel = "Expert" | "Advanced" | "Intermediate";

const FRONTEND_NAMES = new Set([
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "RxJS",
  "NgRx",
  "Angular Signals",
  "Reactive Forms",
  "Angular Router / DI",
  "Nuxt",
  "Pwa",
  "FlexBox / CssGrid",
  "Bootstrap",
  "Tailwind css",
  "Material ui / Ant",
  "ReactQuery / RTK-query",
  "MicroFrontend",
  "Angular Material",
  "Vuetify",
]);

const MOBILE_NAMES = new Set(["React Native", "Dart", "Flutter"]);

const DEVOPS_NAMES = new Set(["Docker", "Kubernetes"]);

const AI_NAMES = new Set([
  "RAG",
  "LLM Integration",
  "Vector Databases",
  "AI Agents",
  "Prompt Engineering",
  "LangChain / LangGraph",
  "Embeddings",
]);

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "mobile", label: "Mobile" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "ai", label: "AI" },
];

const CATEGORY_META: Record<
  SkillCategory,
  { label: string; icon: string; blurb: string }
> = {
  frontend: {
    label: "Frontend",
    icon: "fa-desktop",
    blurb: "UI frameworks and web architecture",
  },
  mobile: {
    label: "Mobile",
    icon: "fa-mobile",
    blurb: "Cross-platform app development",
  },
  backend: {
    label: "Backend",
    icon: "fa-server",
    blurb: "APIs, services, and data layers",
  },
  devops: {
    label: "DevOps",
    icon: "fa-cogs",
    blurb: "Containers and orchestration",
  },
  ai: {
    label: "AI Engineering",
    icon: "fa-magic",
    blurb: "LLM apps, agents, and RAG systems",
  },
};

const LEVEL_LEGEND: SkillLevel[] = ["Expert", "Advanced", "Intermediate"];

const resolveCategory = (skill: ServiceItem): SkillCategory => {
  if (skill.category === "ai" || AI_NAMES.has(skill.name)) return "ai";
  if (skill.category === "devops" || DEVOPS_NAMES.has(skill.name)) {
    return "devops";
  }
  if (skill.category === "mobile" || MOBILE_NAMES.has(skill.name)) return "mobile";
  if (skill.category === "backend") return "backend";
  if (skill.category === "frontend" || FRONTEND_NAMES.has(skill.name)) {
    return "frontend";
  }
  return "backend";
};

const resolveLevel = (percent: string | number): SkillLevel => {
  const value = Number(percent);
  if (value >= 90) return "Expert";
  if (value >= 75) return "Advanced";
  return "Intermediate";
};

export const Services = ({ data }: ServicesProps): JSX.Element => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const skills = useMemo(
    () =>
      (data ?? []).map((skill) => ({
        ...skill,
        category: resolveCategory(skill),
        level: resolveLevel(skill.percent),
      })),
    [data]
  );

  const visibleSkills = useMemo(
    () =>
      filter === "all"
        ? skills
        : skills.filter((skill) => skill.category === filter),
    [filter, skills]
  );

  const grouped = useMemo(() => {
    const groups: Record<SkillCategory, typeof skills> = {
      frontend: [],
      mobile: [],
      backend: [],
      devops: [],
      ai: [],
    };

    visibleSkills.forEach((skill) => {
      groups[skill.category].push(skill);
    });

    return groups;
  }, [visibleSkills]);

  const columns: SkillCategory[][] =
    filter === "all"
      ? [
          ["frontend", "ai"],
          ["mobile", "backend", "devops"],
        ]
      : [[filter]];

  const renderGroup = (category: SkillCategory) => {
    const items = grouped[category];
    if (items.length === 0) return null;

    const meta = CATEGORY_META[category];

    return (
      <section
        key={category}
        className={`skills-group-card skills-group-card--${category}`}
        data-aos="fade-up"
      >
        <header className="skills-group-header">
          <span className="skills-group-icon" aria-hidden="true">
            <i className={`fa ${meta.icon}`} />
          </span>
          <div className="skills-group-copy">
            <div className="skills-group-heading">
              <h3 className="skills-group-title">{meta.label}</h3>
              <span className="skills-group-count">{items.length}</span>
            </div>
            <p className="skills-group-blurb">{meta.blurb}</p>
          </div>
        </header>

        <ul
          className={`skills-chip-list${
            items.length <= 4 ? " skills-chip-list--compact" : ""
          }`}
        >
          {items.map((skill, index) => (
            <li
              key={skill.name}
              className={`skills-chip skills-chip--${skill.level.toLowerCase()}`}
              data-aos="zoom-in"
              data-aos-delay={Math.min(index * 35, 280)}
            >
              <span className="skills-chip-dot" aria-hidden="true" />
              <span className="skills-chip-name">{skill.name}</span>
              <span className="skills-chip-level">{skill.level}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p className="skills-note" data-aos="fade-up" data-aos-delay="100">
            Core stack across frontend, mobile, backend, DevOps, and AI
            engineering.
          </p>
        </div>

        {!data ? (
          "loading"
        ) : (
          <>
            <div
              className="skills-filters"
              role="tablist"
              aria-label="Filter skills"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              {FILTERS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.key}
                  className={`skills-filter${
                    filter === item.key ? " is-active" : ""
                  }`}
                  onClick={() => setFilter(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <ul
              className="skills-legend"
              aria-label="Skill level legend"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              {LEVEL_LEGEND.map((level) => (
                <li
                  key={level}
                  className={`skills-legend-item skills-legend-item--${level.toLowerCase()}`}
                >
                  <span />
                  {level}
                </li>
              ))}
            </ul>

            <div
              className={`skills-groups${
                filter !== "all" ? " skills-groups--single" : ""
              }`}
            >
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="skills-col">
                  {column.map((category) => renderGroup(category))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
