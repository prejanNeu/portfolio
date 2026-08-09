import styles from "./Projects.module.css";

export default function Projects() {
  const projectList = [
    {
      num: "Project 01",
      title: "ChatApp — Real-time Messaging",
      desc: "A modern real-time chat application built with Django Channels and WebSocket protocols. Features secure user authentication, live messaging, and a clean responsive interface.",
      tags: ["Django", "WebSockets", "Channels", "JavaScript"],
      link: "https://github.com/prejanNeu/chatApp",
    },
    {
      num: "Project 02",
      title: "ePasal — E-commerce Platform",
      desc: "A full-stack e-commerce solution with comprehensive product management, user authentication, shopping cart, and a RESTful API built with Django REST Framework.",
      tags: ["Django", "DRF", "REST API", "PostgreSQL"],
      link: "https://github.com/prejanNeu/E-Commerce",
    },
    {
      num: "Project 03",
      title: "Tic Tac Toe — AI Opponent",
      desc: "An intelligent Tic Tac Toe game featuring an unbeatable AI powered by the Minimax algorithm — a clean demonstration of game theory and recursive search in Python.",
      tags: ["Python", "Minimax", "Game Theory", "AI"],
      link: "https://github.com/prejanNeu/tic_tac_toe_AI",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <div className={styles.projectsHeader}>
          <div>
            <div className="section-label">
              <span className="num">03 / PROJECTS</span>
            </div>
            <h2>
              Featured<br />
              <em>Work</em>
            </h2>
          </div>
          <a
            href="https://github.com/prejanNeu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View all on GitHub ↗
          </a>
        </div>

        <div className={styles.projectsGrid}>
          {projectList.map((project) => (
            <div key={project.num} className={styles.projCard}>
              <div className={styles.projNum}>{project.num}</div>
              <h3 className={styles.projTitle}>{project.title}</h3>
              <p className={styles.projDesc}>{project.desc}</p>
              <div className={styles.projTech}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projLink}
              >
                View source
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
