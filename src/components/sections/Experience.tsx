import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="section-label">
          <span className="num">02 / EXPERIENCE</span>
        </div>
        <h2>
          Professional<br />
          <em>Work</em>
        </h2>

        <div className={styles.expTimeline}>
          <div className={styles.expItem}>
            <div className={styles.expMeta}>
              <div className={styles.expCompany}>Intellisoft Nepal</div>
              <div className={styles.expDate}>Jun 2025 – Jun 2026</div>
              <div className={styles.expDuration}>1 Year Total</div>
            </div>
            <div className={styles.expBody}>
              <div className={styles.roleEntry}>
                <div className={styles.roleTitle}>Junior Django Developer</div>
                <div className={styles.roleDates}>Dec 2025 – Jun 2026 (6 mos)</div>
                <p className={styles.roleDesc}>
                  Promoted to a junior role to oversee database schema optimizations, implement authentication modules, and build secure RESTful interfaces using Django REST Framework. Developed clean, documented, and production-ready APIs that reduced load times by streamlining SQL queries.
                </p>
              </div>
              <div className={styles.roleEntry} style={{ marginTop: "2rem" }}>
                <div className={styles.roleTitle}>Django Developer Intern</div>
                <div className={styles.roleDates}>Jun 2025 – Dec 2025 (6 mos)</div>
                <p className={styles.roleDesc}>
                  Learned the ropes of enterprise-grade Python software design. Helped design, build, and debug core Django apps, handled model migrations, and collaborated closely with senior engineers to implement client features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
