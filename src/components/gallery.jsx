import React from "react";

const projects = [
  {
    href: "http://chime-beauty.com/",
    title: "Chime Beauty",
    description: "Selling cosmetic products",
  },
  {
    href: "https://staging.loopa.dev/",
    title: "Loopa",
    description: "AI-powered Problem Solver",
  },
  {
    href: "https://vip.myknitnet.com/login",
    title: "myKnitnet",
    description: "Monitoring solution",
  },
  {
    href: "https://play.google.com/store/apps/details?id=io.apsy.chimebeauty&hl=de_CH&gl=US",
    title: "Chime Beauty App",
    description: "Selling cosmetic products",
  },
  {
    href: "https://play.google.com/store/apps/details?id=io.apsy.socialmodel",
    title: "Social App",
    description: "Social mobile app",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.asociar.ecomm",
    title: "Apsy E-comm",
    description: "E-commerce app",
  },
  {
    href: "https://heyhudu.com/",
    title: "Hudu",
    description: "Product platform",
  },
  {
    href: "https://qa.socialorder.io/",
    title: "Social Order",
    description: "Ordering platform",
  },
  {
    href: "https://www.tryboxy.com/en/",
    title: "Boxy",
    description: "Shipping platform",
  },
];

export const Gallery = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p className="portfolio-note">
            Please turn on your VPN before viewing the sample projects
          </p>
        </div>
        <div className="row portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="col-xs-12 col-sm-6 col-md-4 portfolio-card"
              data-aos="fade-up"
            >
              <div className="ih-item circle colored effect1">
                <a
                  href={project.href}
                  title={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="img">
                    <img
                      src="img/portfolio/SolidImage.png"
                      className="img-responsive"
                      alt={project.title}
                    />
                  </div>
                  <div className="info">
                    <h3>{project.title}</h3>
                    {project.description ? <p>{project.description}</p> : null}
                  </div>
                </a>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
