import React, { useMemo, useState } from "react";
import type { ServiceItem } from "../types/portfolio";
import "./services.css";

interface ServicesProps {
  data?: ServiceItem[];
}

type SkillCategory = "frontend" | "mobile" | "backend" | "devops" | "ai";
type FilterKey = "all" | SkillCategory;
type SkillLevel = "Expert" | "Advanced" | "Intermediate";

interface EnrichedSkill extends ServiceItem {
  category: SkillCategory;
  level: SkillLevel;
  iconSrc?: string;
  badgeLabel: string;
}

const CATEGORY_META: Record<
  SkillCategory,
  { label: string; blurb: string; glyph: string }
> = {
  frontend: {
    label: "Frontend Architecture",
    blurb: "Modern reactive frameworks, state management, and responsive UI design systems",
    glyph: "⚡",
  },
  mobile: {
    label: "Cross-Platform Mobile",
    blurb: "Single-codebase production apps deployed to Google Play and Apple App Store",
    glyph: "📱",
  },
  backend: {
    label: "Backend & Data Layers",
    blurb: "High-throughput APIs, caching layers, message queues, and relational schemas",
    glyph: "🗄️",
  },
  ai: {
    label: "AI Engineering & LLMs",
    blurb: "Agentic workflows, vector search, embeddings, and RAG architectures",
    glyph: "✨",
  },
  devops: {
    label: "DevOps & Cloud",
    blurb: "Containerization, orchestration, and continuous deployment automation",
    glyph: "⚙️",
  },
};

// "All Skills" is the first item on the left side
const TABS: { key: FilterKey; label: string; glyph: string }[] = [
  { key: "all", label: "All Skills", glyph: "✦" },
  { key: "frontend", label: "Frontend", glyph: "⚡" },
  { key: "mobile", label: "Mobile", glyph: "📱" },
  { key: "backend", label: "Backend", glyph: "🗄️" },
  { key: "ai", label: "AI Engineering", glyph: "✨" },
  { key: "devops", label: "DevOps", glyph: "⚙️" },
];

const FRONTEND_SET = new Set([
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "React Query",
  "RTK Query",
  "Material UI",
  "Ant Design",
  "Vue",
  "Nuxt",
  "Vuetify",
  "Angular",
  "Angular Material",
  "Angular Router / DI",
  "Angular Signals",
  "Reactive Forms",
  "RxJS",
  "NgRx",
  "Tailwind css",
  "Bootstrap",
  "Flexbox",
  "CSS Grid",
  "MicroFrontend",
  "Pwa",
]);

// Explicit ecosystem grouping order for Frontend
const FRONTEND_ORDER: Record<string, number> = {
  // Core Languages
  Javascript: 1,
  Typescript: 2,

  // React Ecosystem
  React: 10,
  "Next.js": 11,
  "React Query": 12,
  "RTK Query": 13,
  "Material UI": 14,
  "Ant Design": 15,

  // Vue Ecosystem
  Vue: 20,
  Nuxt: 21,
  Vuetify: 22,

  // Angular Ecosystem
  Angular: 30,
  "Angular Material": 31,
  "Angular Router / DI": 32,
  "Angular Signals": 33,
  "Reactive Forms": 34,
  RxJS: 35,
  NgRx: 36,

  // Styling & Web Architecture
  "Tailwind css": 40,
  Bootstrap: 41,
  Flexbox: 42,
  "CSS Grid": 43,
  MicroFrontend: 44,
  Pwa: 45,
};

const MOBILE_SET = new Set(["React Native", "Dart", "Flutter", "Kotlin"]);
const DEVOPS_SET = new Set(["Docker", "Kubernetes", "Linux", "Network", "Networking"]);
const AI_SET = new Set([
  "RAG",
  "LLM Integration",
  "Vector Databases",
  "AI Agents",
  "Prompt Engineering",
  "LangChain",
  "LangGraph",
  "Embeddings",
]);

const ICON_MAP: Record<string, string> = {
  Javascript: "assets/icons/js.svg",
  Typescript: "assets/icons/typescript.svg",
  React: "assets/icons/react.svg",
  "Next.js": "assets/icons/nextjs.svg",
  "React Native": "assets/icons/react.svg",
  Vue: "assets/icons/vue.svg",
  Angular: "assets/icons/angular.svg",
  RxJS: "assets/icons/angular.svg",
  NgRx: "assets/icons/redux.svg",
  "Angular Signals": "assets/icons/angular.svg",
  "Reactive Forms": "assets/icons/angular.svg",
  "Angular Router / DI": "assets/icons/angular.svg",
  Nuxt: "assets/icons/nuxt.svg",
  Pwa: "assets/icons/pwa.svg",
  Bootstrap: "assets/icons/bootstrap.svg",
  "Tailwind css": "assets/icons/tailwindcss.svg",
  Flexbox: "assets/icons/flexbox.svg",
  "CSS Grid": "assets/icons/cssgrid.svg",
  "Material UI": "assets/icons/material-ui.svg",
  "Ant Design": "assets/icons/ant-design.svg",
  "React Query": "assets/icons/react-query-icon.svg",
  "RTK Query": "assets/icons/redux.svg",
  MicroFrontend: "assets/icons/microfrontend.svg",
  "Angular Material": "assets/icons/angular.svg",
  Vuetify: "assets/icons/vue.svg",
  Dart: "assets/icons/dart.svg",
  Flutter: "assets/icons/flutter.svg",
  Kotlin: "assets/icons/kotlin.svg",
  Nodejs: "assets/icons/nodejs.svg",
  NestJS: "assets/icons/nestjs.svg",
  Django: "assets/icons/django.svg",
  Flask: "assets/icons/python.svg",
  Microservices: "assets/icons/microservices.svg",
  Microservice: "assets/icons/microservices.svg",
  RabbitMQ: "assets/icons/rabbitmq.svg",
  "Rabbit MQ": "assets/icons/rabbitmq.svg",
  "RESTful APIs": "assets/icons/openapi.svg",
  GraphQL: "assets/icons/graphql.svg",
  gRPC: "assets/icons/grpc.svg",
  PostgreSQL: "assets/icons/postgres.svg",
  MongoDB: "assets/icons/mongodb.svg",
  Docker: "assets/icons/docker.svg",
  Kubernetes: "assets/icons/kubernetes.svg",
  Linux: "assets/icons/linux-tux.svg",
  Network: "assets/icons/network.svg",
  Networking: "assets/icons/network.svg",
  RAG: "assets/icons/rag.svg",
  "LLM Integration": "assets/icons/openai.svg",
  "Vector Databases": "assets/icons/pinecone.svg",
  "AI Agents": "assets/icons/ai-agents.svg",
  "Prompt Engineering": "assets/icons/prompt.svg",
  LangChain: "assets/icons/langchain.svg",
  LangGraph: "assets/icons/langgraph.svg",
  Embeddings: "assets/icons/embeddings.svg",
};

const resolveCategory = (name: string, rawCat?: string): SkillCategory => {
  if (rawCat === "ai" || AI_SET.has(name)) return "ai";
  if (rawCat === "devops" || DEVOPS_SET.has(name)) return "devops";
  if (rawCat === "mobile" || MOBILE_SET.has(name)) return "mobile";
  if (rawCat === "frontend" || FRONTEND_SET.has(name)) return "frontend";
  return "backend";
};

const resolveLevel = (percent: string | number): SkillLevel => {
  const num = Number(percent);
  if (num >= 90) return "Expert";
  if (num >= 75) return "Advanced";
  return "Intermediate";
};

// Fallback vector glyph for items without a dedicated brand SVG
const FallbackGlyph = ({ name, category }: { name: string; category: SkillCategory }): JSX.Element => {
  if (category === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    );
  }
  if (name.toLowerCase().includes("pwa") || name.toLowerCase().includes("grid")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

// Reusable Skill Category Card
const CategoryCard = ({
  category,
  items,
}: {
  category: SkillCategory;
  items: EnrichedSkill[];
}): JSX.Element | null => {
  if (!items || items.length === 0) return null;
  const meta = CATEGORY_META[category];

  return (
    <div className="taste-skills-console" data-aos="fade-up">
      <header className="taste-skills-console-header">
        <div className="taste-skills-console-meta">
          <span className="taste-skills-console-icon" aria-hidden="true">
            {meta.glyph}
          </span>
          <div>
            <h3 className="taste-skills-console-title">{meta.label}</h3>
            <p className="taste-skills-console-blurb">{meta.blurb}</p>
          </div>
        </div>

        <span className="taste-skills-console-badge">
          {items.length} {items.length === 1 ? "Technology" : "Technologies"}
        </span>
      </header>

      <ul className="taste-skills-grid">
        {items.map((skill) => (
          <li
            key={skill.name}
            className="taste-skill-tile"
            tabIndex={0}
            title={`${skill.name} (${skill.level})`}
          >
            {/* Sleek Tooltip */}
            <div className="taste-skill-tooltip" role="tooltip" aria-hidden="true">
              <span className="taste-skill-tooltip-name">{skill.name}</span>
              <span className="taste-skill-tooltip-meta">
                {skill.level} ({skill.percent || "90"}%)
              </span>
            </div>

            <div className="taste-skill-icon-tile" aria-hidden="true">
              {skill.iconSrc ? (
                <img src={skill.iconSrc} alt="" loading="lazy" />
              ) : (
                <FallbackGlyph name={skill.name} category={category} />
              )}
            </div>

            <div className="taste-skill-info">
              <div className="taste-skill-name-row">
                <span className="taste-skill-name">{skill.name}</span>
                <span className={`taste-skill-pill taste-skill-pill--${skill.level.toLowerCase()}`}>
                  {skill.badgeLabel}
                </span>
              </div>

              <div className="taste-skill-bar-wrap" aria-hidden="true">
                <div
                  className={`taste-skill-bar-fill taste-skill-bar-fill--${skill.level.toLowerCase()}`}
                  style={{ width: `${Math.min(100, Math.max(30, Number(skill.percent) || 85))}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Services = ({ data }: ServicesProps): JSX.Element => {
  // Default selected tab is "all"
  const [activeTab, setActiveTab] = useState<FilterKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const enrichedSkills: EnrichedSkill[] = useMemo(() => {
    return (data ?? []).map((skill) => {
      const cat = resolveCategory(skill.name, skill.category);
      const lvl = resolveLevel(skill.percent);
      return {
        ...skill,
        category: cat,
        level: lvl,
        iconSrc: ICON_MAP[skill.name],
        badgeLabel: lvl === "Expert" ? "Core" : lvl,
      };
    });
  }, [data]);

  const countFor = (key: FilterKey): number => {
    if (key === "all") return enrichedSkills.length;
    return enrichedSkills.filter((s) => s.category === key).length;
  };

  const isSearching = searchQuery.trim().length > 0;

  // Compute items to display based on tab or active search
  const displayedItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      return enrichedSkills.filter(
        (s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
      );
    }
    if (activeTab === "all") {
      return enrichedSkills;
    }
    return enrichedSkills.filter((s) => s.category === activeTab);
  }, [enrichedSkills, activeTab, searchQuery]);

  // Group items by category for rendering
  const frontendItems = useMemo(
    () =>
      displayedItems
        .filter((s) => s.category === "frontend")
        .sort((a, b) => (FRONTEND_ORDER[a.name] ?? 999) - (FRONTEND_ORDER[b.name] ?? 999)),
    [displayedItems]
  );
  const mobileItems = useMemo(
    () => displayedItems.filter((s) => s.category === "mobile"),
    [displayedItems]
  );
  const backendItems = useMemo(
    () => displayedItems.filter((s) => s.category === "backend"),
    [displayedItems]
  );
  const aiItems = useMemo(
    () => displayedItems.filter((s) => s.category === "ai"),
    [displayedItems]
  );
  const devopsItems = useMemo(
    () => displayedItems.filter((s) => s.category === "devops"),
    [displayedItems]
  );

  // Dynamic stats calculation linked directly to data and current filter
  const totalSkillsCount = enrichedSkills.length;
  const totalDomainsCount = useMemo(() => {
    return new Set(enrichedSkills.map((s) => s.category)).size;
  }, [enrichedSkills]);

  const yearsOfExperience = useMemo(() => {
    return Math.max(1, new Date().getFullYear() - 2017);
  }, []);

  const activeSkillsCount = displayedItems.length;
  const activeDomainsCount = useMemo(() => {
    return new Set(displayedItems.map((s) => s.category)).size;
  }, [displayedItems]);

  const currentTabMeta = useMemo(() => {
    if (isSearching) {
      return {
        skillsLabel: activeSkillsCount === 1 ? "Matching Technology" : "Matching Technologies",
        domainsLabel: activeDomainsCount === 1 ? "Active Domain" : "Specialized Domains",
      };
    }
    if (activeTab === "all") {
      return {
        skillsLabel: "Production Technologies",
        domainsLabel: "Specialized Domains",
      };
    }
    const tabObj = TABS.find((t) => t.key === activeTab);
    return {
      skillsLabel: `${tabObj ? tabObj.label : ""} Technologies`,
      domainsLabel: "Specialized Domain",
    };
  }, [isSearching, activeTab, activeSkillsCount, activeDomainsCount]);

  return (
    <div id="services">
      <div className="container">
        {/* Section Header */}
        <div className="taste-skills-header" data-aos="fade-up">
          <div className="taste-skills-kicker">
            <span className="taste-skills-kicker-dot" aria-hidden="true" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="taste-skills-title">Skills &amp; Engineering Arsenal</h2>
          <p className="taste-skills-subtitle">
            Battle-tested technologies delivering end-to-end reliability across responsive web, cross-platform mobile apps, scalable microservices, and AI integrations.
          </p>
        </div>

        {/* Dynamic Stats Strip */}
        <div className="taste-skills-stats" data-aos="fade-up" data-aos-delay="50">
          <div className="taste-skills-stat-item">
            <span className="taste-skills-stat-val">
              {activeTab === "all" && !isSearching
                ? `${totalSkillsCount}+`
                : activeSkillsCount}
            </span>
            <span className="taste-skills-stat-lbl">{currentTabMeta.skillsLabel}</span>
          </div>
          <div className="taste-skills-stat-divider" aria-hidden="true" />
          <div className="taste-skills-stat-item">
            <span className="taste-skills-stat-val">
              {activeTab === "all" && !isSearching
                ? totalDomainsCount
                : activeDomainsCount}
            </span>
            <span className="taste-skills-stat-lbl">{currentTabMeta.domainsLabel}</span>
          </div>
          <div className="taste-skills-stat-divider" aria-hidden="true" />
          <div className="taste-skills-stat-item">
            <span className="taste-skills-stat-val">{yearsOfExperience}+</span>
            <span className="taste-skills-stat-lbl">Years Hands-on Delivery</span>
          </div>
        </div>

        {/* Controls: Segmented Tabs & Search Bar */}
        <div className="taste-skills-nav-bar" data-aos="fade-up" data-aos-delay="80">
          <div className="taste-skills-tabs" role="tablist" aria-label="Skill domains">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key && !isSearching}
                className={`taste-skills-tab-btn${activeTab === tab.key && !isSearching ? " is-active" : ""}`}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSearchQuery("");
                }}
              >
                <span className="taste-skills-tab-glyph" aria-hidden="true">{tab.glyph}</span>
                <span>{tab.label}</span>
                <span className="taste-skills-tab-count">{countFor(tab.key)}</span>
              </button>
            ))}
          </div>

          <div className="taste-skills-search-wrap">
            <span className="taste-skills-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="taste-skills-search-input"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search technologies"
            />
          </div>
        </div>

        {/* Empty Search State */}
        {displayedItems.length === 0 && (
          <div className="taste-skills-empty">
            <p>No technologies matched &quot;{searchQuery}&quot;</p>
            <button
              type="button"
              className="taste-skills-empty-btn"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
            >
              Reset to All Skills
            </button>
          </div>
        )}

        {/* Default View: All Skills in a Balanced 2-Column Bento Grid */}
        {!isSearching && activeTab === "all" && (
          <div className="taste-skills-bento-grid">
            {/* Left Column: Frontend (21 skills) + DevOps & Cloud (4 skills) */}
            <div className="taste-skills-bento-col">
              <CategoryCard category="frontend" items={frontendItems} />
              <CategoryCard category="devops" items={devopsItems} />
            </div>

            {/* Right Column: Mobile (3) + Backend (7) + AI Engineering (7) */}
            <div className="taste-skills-bento-col">
              <CategoryCard category="mobile" items={mobileItems} />
              <CategoryCard category="backend" items={backendItems} />
              <CategoryCard category="ai" items={aiItems} />
            </div>
          </div>
        )}

        {/* Focused Single Category View (when a specific category tab is selected) */}
        {!isSearching && activeTab !== "all" && (
          <CategoryCard
            category={activeTab}
            items={
              activeTab === "frontend"
                ? frontendItems
                : displayedItems.filter((s) => s.category === activeTab)
            }
          />
        )}

        {/* Active Search Result View */}
        {isSearching && displayedItems.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <CategoryCard category="frontend" items={frontendItems} />
            <CategoryCard category="mobile" items={mobileItems} />
            <CategoryCard category="backend" items={backendItems} />
            <CategoryCard category="ai" items={aiItems} />
            <CategoryCard category="devops" items={devopsItems} />
          </div>
        )}
      </div>
    </div>
  );
};
