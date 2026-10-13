import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [activeTech, setActiveTech] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "Cevro",
      desc: "Community management platform.",
      tech: ["javascript", "html5", "css3"],
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Modmail Bot - Close Hours",
      desc: "A plugin for the famous reddit-like discord modmail bot.",
      tech: ["python", "discordpy"],
      tags: ["JavaScript", "discord.js"],
    },
    {
      title: "Lanyard Alternative",
      desc: "Self-built Discord presence API for Cloudflare Workers.",
      tech: ["javascript", "cloudflare"],
      tags: ["Cloudflare"],
    },
    {
      title: "Lumo Ranking",
      desc: "Self-Built discord bot to handle staffing-related matters.",
      tech: ["python", "discordpy"],
      tags: ["discord.py", "Python"],
    },
    {
      title: "Lumo Harrison",
      desc: "Self-Built discord bot to handle moderation, member counts and fun commands.",
      tech: ["python", "discordpy"],
      tags: ["discord.py", "Python"],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skillGroups = [
    {
      label: "Languages",
      skills: [
        ["javascript", "JavaScript"],
        ["python", "Python"],
        ["lua", "Lua"],
        ["html5", "HTML5"],
        ["css3", "CSS3"],
        ["sql", "SQL"],
      ],
    },
    {
      label: "Backend & Data",
      skills: [
        ["discordpy", "discord.py"],
        ["postgresql", "PostgreSQL"],
      ],
    },
    {
      label: "Platforms & Tools",
      skills: [
        ["cloudflare", "Cloudflare"],
        ["vercel", "Vercel"],
        ["netlify", "Netlify"],
        ["insomnia", "Insomnia"],
        ["vscode", "VS Code"],
      ],
    },
  ];

  return (
    <>
      <div
        className="cursor"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <nav className="nav">
        <a href="#home" className="logo">
          ACE <span>SPECTRA</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="shape shape-ring" />
          <div className="shape shape-square" />
          <div className="shape shape-dot-grid" />
          <div className="shape shape-diagonal" />
          <div className="shape shape-blur" />

          <div className="hero-content">
            <div className="hero-title-wrap">
              <div className="word word-ace visible">
                <span className="title-star">✦</span>
                <span className="word-text">ACE</span>
                <span className="word-line" />
              </div>

              <div className="word word-spectra visible">
                <span className="word-text outline">
                  SPECTRA
                </span>
                <span className="word-line" />
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="shape shape-ring shape-skills" />
          <div className="shape shape-dot-grid shape-skills" />
          <div className="shape shape-blur shape-skills" />

          <div className="section-head">
            <h2>
              Things I <span>code with</span>
            </h2>

            <p className="section-sub">
              Hover a skill. Matching projects
              light up below.
            </p>
          </div>

          {skillGroups.map((group) => (
            <div
              className="skill-group"
              key={group.label}
            >
              <span className="skill-group-label">
                {group.label}
              </span>

              <div className="skill-tags">
                {group.skills.map(([id, name]) => (
                  <button
                    key={id}
                    className={`skill-tag ${
                      activeTech === id
                        ? "is-active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveTech(
                        activeTech === id
                          ? null
                          : id
                      )
                    }
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section
          className="projects"
          id="projects"
        >
          <div className="shape shape-square shape-projects" />
          <div className="shape shape-diagonal shape-projects" />

          <div className="section-head">
            <h2>
              Selected <span>projects</span>
            </h2>
          </div>

          {projects.map((project) => {
            const match =
              !activeTech ||
              project.tech.includes(activeTech);

            return (
              <a
                key={project.title}
                href="#"
                className={`project-row ${
                  !match
                    ? "is-dimmed"
                    : ""
                }`}
              >
                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-desc">
                  {project.desc}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </section>
      </main>
    </>
  );
}