import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span>Django Developer</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>2026</span>
          </p>

          <h1 id="hero-heading" className={styles.title}>
            Prejan Neupane
          </h1>

          <p className={styles.description}>
            I build backend systems and web products — mostly with Django and
            Python, sometimes with React and Next.js on the front. CS graduate
            from Patan Multiple Campus, currently working at Intellisoft Nepal.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <Link href="/blog" className="btn btn-secondary">
              Read blog
            </Link>
            <a
              href="https://github.com/prejanNeu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>

          <div className={styles.meta}>
            <span className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Open to opportunities
            </span>
            <span className={styles.location}>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
