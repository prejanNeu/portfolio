import SectionHeader from "@/components/SectionHeader";
import styles from "./About.module.css";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C / C++"],
  },
  {
    label: "Backend",
    items: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "REST APIs", "WebSockets"],
  },
  {
    label: "Frontend & Tools",
    items: ["React", "Next.js", "HTML / CSS", "Git", "Linux", "Docker"],
  },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="What I do"
          description="I like working on problems where the backend has to be reliable and the interface stays out of the way."
        />

        <div className={styles.grid}>
          <div className={styles.main}>
            <p className={styles.text}>
              I&apos;m a computer science graduate who spends most of my time
              on Django backends — APIs, auth, database design, and making
              things run well under load. I also pick up frontend work when a
              project needs a clean UI on top.
            </p>
            <p className={styles.text}>
              After a year at Intellisoft Nepal and finishing my BSc in CSIT
              from Patan Multiple Campus, I&apos;m looking for roles where I can
              go deep on backend engineering while still shipping complete
              features end to end.
            </p>
          </div>

          <aside className={styles.aside} aria-label="Focus areas">
            <h3 className={styles.asideTitle}>Focus</h3>
            <ul className={styles.focusList} role="list">
              <li>Backend architecture &amp; API design</li>
              <li>Django / Python development</li>
              <li>Database optimization</li>
              <li>Full-stack web applications</li>
            </ul>
          </aside>
        </div>

        <div className={styles.skills}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>{group.label}</h3>
              <ul className={styles.skillList} role="list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="tag">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
