import React, { useMemo, useState } from "react";
import type { ProjectCategory, ProjectItem } from "../types/portfolio";

const projects: ProjectItem[] = [
  {
    href: "https://www.gbtmarket.com",
    title: "GBT Market",
    description:
      "Trading platform providing fast, secure access to global financial markets",
    category: "web",
    tags: ["Trading", "Fintech"],
  },
  {
    href: "https://propertyflow-neon.vercel.app/",
    title: "PropertyFlow",
    description: "Real estate CRM dashboard for listings and client pipelines",
    category: "dashboard",
    tags: ["CRM", "Real Estate"],
  },
  {
    href: "https://www.agileful.com",
    title: "Agileful",
    description:
      "AI automation, digitalisation, and software for growing companies",
    category: "web",
    tags: ["AI", "Automation"],
  },
  {
    href: "https://www.apsy.com",
    title: "Apsy",
    description: "Product platform for building and shipping digital apps",
    category: "web",
    tags: ["Platform", "Product"],
  },
  {
    href: "https://www.apsaaz.com",
    title: "Apsaaz",
    description: "Company website for Apsaaz product and services",
    category: "web",
    tags: ["Company", "Web"],
  },
  {
    href: "http://chime-beauty.com/",
    title: "Chime Beauty",
    description: "E-commerce storefront for cosmetic products",
    category: "web",
    tags: ["E-commerce"],
  },
  {
    href: "https://staging.loopa.dev/",
    title: "Loopa",
    description: "AI-powered problem solver platform",
    category: "web",
    tags: ["AI", "SaaS"],
  },
  {
    href: "https://vip.myknitnet.com/login",
    title: "myKnitnet",
    description: "Monitoring and operations solution",
    category: "web",
    tags: ["Monitoring"],
  },
  {
    href: "https://heyhudu.com/",
    title: "Hudu",
    description: "Product platform for teams and workflows",
    category: "web",
    tags: ["Product"],
  },
  {
    href: "https://qa.socialorder.io/",
    title: "Social Order",
    description: "Ordering and fulfillment platform",
    category: "web",
    tags: ["Ordering"],
  },
  {
    href: "https://www.tryboxy.com/en/",
    title: "Boxy",
    description: "Shipping and delivery platform",
    category: "web",
    tags: ["Logistics"],
  },
  {
    href: "https://fjalla.net/",
    title: "Fjalla",
    description: "Music and video streaming platform",
    category: "web",
    tags: ["Streaming"],
  },
  {
    href: "https://angular-jira.vercel.app/dashboard",
    title: "Angular Jira",
    description: "Issue tracking dashboard inspired by Jira workflows",
    category: "dashboard",
    tags: ["Angular", "Productivity"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.tryboxy.merchant&hl=en",
    title: "Boxy Android",
    description: "Merchant delivery app for Android",
    category: "mobile",
    tags: ["Android", "Logistics"],
  },
  {
    href: "https://apps.apple.com/us/app/boxy-%D8%A8%D9%88%D9%83%D8%B3%D9%8A/id6739261592",
    title: "Boxy iOS",
    description: "Merchant delivery app for iOS",
    category: "mobile",
    tags: ["iOS", "Logistics"],
  },
  {
    href: "https://apps.apple.com/ca/app/fjalla/id6670492390",
    title: "Fjalla iOS",
    description: "Music and video streaming app for iOS",
    category: "mobile",
    tags: ["iOS", "Streaming"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=fjalla.net.fjalla_fan_mobile&hl=en",
    title: "Fjalla Android",
    description: "Music and video streaming app for Android",
    category: "mobile",
    tags: ["Android", "Streaming"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.kma.appy",
    title: "Appy",
    description: "Mobile application available on Google Play",
    category: "mobile",
    tags: ["Android"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=io.apsy.chimebeauty&hl=de_CH&gl=US",
    title: "Chime Beauty App",
    description: "Mobile shopping experience for cosmetic products",
    category: "mobile",
    tags: ["Android"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=io.apsy.socialmodel",
    title: "Social App",
    description: "Social networking mobile application",
    category: "mobile",
    tags: ["Android"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.asociar.ecomm",
    title: "Apsy E-comm",
    description: "Mobile e-commerce shopping app",
    category: "mobile",
    tags: ["Android"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=io.apsy.edu",
    title: "Apsy Edu",
    description: "Education and learning mobile application",
    category: "mobile",
    tags: ["Android", "Education"],
  },
  {
    href: "https://t.me/MyChessPlayBot",
    title: "MyChessPlayBot",
    description: "Telegram bot for playing chess with friends and opponents",
    category: "bots",
    tags: ["Telegram", "Chess"],
  },
];

type FilterKey = "all" | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "dashboard", label: "Dashboards" },
  { key: "bots", label: "Telegram Bots" },
];

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  dashboard: "Dashboard",
  bots: "Telegram Bot",
};

const getPreviewHost = (href: string): string => {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};

const ProjectPreview = ({
  project,
}: {
  project: ProjectItem;
}): JSX.Element => {
  const host = getPreviewHost(project.href);

  if (project.category === "mobile") {
    return (
      <div className="portfolio-preview portfolio-preview--phone" aria-hidden="true">
        <div className="portfolio-preview-phone">
          <span className="portfolio-preview-notch" />
          <div className="portfolio-preview-screen">
            <span className="portfolio-preview-icon">
              <i className="fa fa-mobile" />
            </span>
            <span className="portfolio-preview-name">{project.title}</span>
            <span className="portfolio-preview-meta">Mobile app</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.category === "dashboard") {
    return (
      <div
        className="portfolio-preview portfolio-preview--dashboard"
        aria-hidden="true"
      >
        <div className="portfolio-preview-window">
          <div className="portfolio-preview-chrome">
            <span />
            <span />
            <span />
            <em>{host}</em>
          </div>
          <div className="portfolio-preview-dash">
            <aside>
              <b />
              <b />
              <b />
            </aside>
            <main>
              <span className="portfolio-preview-name">{project.title}</span>
              <span className="portfolio-preview-bars">
                <i />
                <i />
                <i />
              </span>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (project.category === "bots") {
    return (
      <div className="portfolio-preview portfolio-preview--bot" aria-hidden="true">
        <div className="portfolio-preview-chat">
          <div className="portfolio-preview-chat-header">
            <span className="portfolio-preview-icon">
              <i className="fa fa-paper-plane" />
            </span>
            <div>
              <span className="portfolio-preview-name">{project.title}</span>
              <span className="portfolio-preview-meta">@{project.title}</span>
            </div>
          </div>
          <div className="portfolio-preview-chat-body">
            <span className="portfolio-preview-bubble portfolio-preview-bubble--bot">
              Ready to play chess?
            </span>
            <span className="portfolio-preview-bubble portfolio-preview-bubble--user">
              /start
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-preview portfolio-preview--browser" aria-hidden="true">
      <div className="portfolio-preview-window">
        <div className="portfolio-preview-chrome">
          <span />
          <span />
          <span />
          <em>{host}</em>
        </div>
        <div className="portfolio-preview-screen portfolio-preview-screen--web">
          <span className="portfolio-preview-icon">
            <i className="fa fa-globe" />
          </span>
          <span className="portfolio-preview-name">{project.title}</span>
          <span className="portfolio-preview-meta">{host}</span>
        </div>
      </div>
    </div>
  );
};

export const Gallery = (): JSX.Element => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p className="portfolio-note" data-aos="fade-up" data-aos-delay="100">
            Selected product work across web apps, mobile clients, dashboards, and
            Telegram bots.
          </p>
          <p className="portfolio-note portfolio-note--vpn" data-aos="fade-up" data-aos-delay="150">
            Please turn on your VPN before opening some live demos.
          </p>
        </div>

        <div
          className="portfolio-filters"
          role="tablist"
          aria-label="Filter projects"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={filter === item.key}
              className={`portfolio-filter${
                filter === item.key ? " is-active" : ""
              }`}
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="portfolio-card"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 60, 360)}
            >
              <a
                className="portfolio-card-link"
                href={project.href}
                title={`Open ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`portfolio-card-media portfolio-card-media--${project.category}`}
                >
                  <span className="portfolio-card-badge">
                    {CATEGORY_LABEL[project.category]}
                  </span>
                  <ProjectPreview project={project} />
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  {project.description ? (
                    <p className="portfolio-card-desc">{project.description}</p>
                  ) : null}
                  {project.tags?.length ? (
                    <ul className="portfolio-card-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                  <span className="portfolio-card-cta">
                    View project
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
