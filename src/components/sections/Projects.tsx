import SectionHeader from "@/components/SectionHeader";
import styles from "./Projects.module.css";

const projects = [
  {
    year: "2024",
    title: "ChatApp",
    subtitle: "Real-time messaging",
    description:
      "Chat application with Django Channels and WebSockets. User auth, live messaging, and a responsive interface.",
    tags: ["Django", "WebSockets", "Channels", "JavaScript"],
    link: "https://github.com/prejanNeu/chatApp",
  },
  {
    year: "2024",
    title: "ePasal",
    subtitle: "E-commerce platform",
    description:
      "Full-stack store with product management, cart, checkout, and a REST API built with Django REST Framework.",
    tags: ["Django", "DRF", "PostgreSQL", "REST API"],
    link: "https://github.com/prejanNeu/E-Commerce",
  },
  {
    year: "2023",
    title: "Tic Tac Toe AI",
    subtitle: "Minimax opponent",
    description:
      "Two-player game with an unbeatable AI using the Minimax algorithm. A small project to explore game theory in Python.",
    tags: ["Python", "Minimax", "Game Theory"],
    link: "https://github.com/prejanNeu/tic_tac_toe_AI",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Projects"
            title="Things I've built"
          />
          <a
            href="https://github.com/prejanNeu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            All on GitHub →
          </a>
        </div>

        <ul className={styles.list} role="list">
          {projects.map((project) => (
            <li key={project.title}>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.year}>{project.year}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>
                <ul className={styles.tags} role="list">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
