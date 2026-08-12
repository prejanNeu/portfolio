import SectionHeader from "@/components/SectionHeader";
import styles from "./Experience.module.css";

const roles = [
  {
    title: "Junior Django Developer",
    period: "Dec 2025 – Jun 2026",
    description:
      "Worked on database schema improvements, authentication modules, and REST APIs with Django REST Framework. Focused on query optimization and production-ready endpoints.",
  },
  {
    title: "Django Developer Intern",
    period: "Jun 2025 – Dec 2025",
    description:
      "Built and debugged Django applications, handled migrations, and shipped client features alongside senior engineers.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Work"
          title="Selected experience"
        />

        <article className={styles.entry}>
          <header className={styles.entryHeader}>
            <div>
              <h3 className={styles.company}>Intellisoft Nepal</h3>
              <p className={styles.duration}>Jun 2025 – Jun 2026 · 1 year</p>
            </div>
          </header>

          <div className={styles.roles}>
            {roles.map((role) => (
              <div key={role.title} className={styles.role}>
                <div className={styles.roleHeader}>
                  <h4 className={styles.roleTitle}>{role.title}</h4>
                  <time className={styles.rolePeriod} dateTime={role.period}>
                    {role.period}
                  </time>
                </div>
                <p className={styles.roleDesc}>{role.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
