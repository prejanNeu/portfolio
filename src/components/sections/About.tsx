import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className={styles.aboutInner}>
        <div className={styles.aboutLeft}>
          <div className="section-label">
            <span className="num">01 / ABOUT</span>
          </div>
          <h2>
            A builder at<br />
            <em>heart</em>
          </h2>
          
          <div className="about-text-content" style={{ marginTop: "2.5rem" }}>
            <p className={styles.aboutText}>
              I am a computer science graduate who loves solving complex backend problems and developing high-fidelity web products. My passion lies in understanding <strong>how digital architecture functions</strong>, which has driven me to specialize in scalable APIs, server robustness, and intelligent data systems.
            </p>
            <p className={styles.aboutText}>
              Having completed my <strong>BSc in CSIT in 2026</strong> from Patan Multiple Campus, and possessing practical professional experience at Intellisoft Nepal, I craft production-ready applications combining solid backend foundations with modern frontend aesthetics.
            </p>
          </div>

          <div className={styles.skillsBlock}>
            <div className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>Languages</div>
              <div className={styles.skillChips}>
                <span className={styles.chip}>Python</span>
                <span className={styles.chip}>JavaScript</span>
                <span className={styles.chip}>TypeScript</span>
                <span className={styles.chip}>SQL</span>
                <span className={styles.chip}>C / C++</span>
              </div>
            </div>
            <div className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>Frameworks &amp; Tools</div>
              <div className={styles.skillChips}>
                <span className={styles.chip}>Django</span>
                <span className={styles.chip}>Django REST Framework</span>
                <span className={styles.chip}>Next.js</span>
                <span className={styles.chip}>React</span>
                <span className={styles.chip}>Git</span>
                <span className={styles.chip}>Linux</span>
                <span className={styles.chip}>Docker</span>
              </div>
            </div>
            <div className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>Web Technologies</div>
              <div className={styles.skillChips}>
                <span className={styles.chip}>HTML5</span>
                <span className={styles.chip}>CSS3</span>
                <span className={styles.chip}>REST APIs</span>
                <span className={styles.chip}>WebSockets</span>
                <span className={styles.chip}>PostgreSQL</span>
                <span className={styles.chip}>Redis</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutAside}>
          <div className={styles.asideCard}>
            <div className={styles.asideLabel}>developer.profile</div>
            <p>
              <span className={styles.highlight}>Current Focus →</span> Backend Architecture &amp; ML<br />
              <span className={styles.highlight}>Location →</span> Kathmandu, Nepal<br />
              <span className={styles.highlight}>Status →</span> Open for opportunities<br />
              <span className={styles.highlight}>Education →</span> BSc CSIT (Completed 2026)<br />
              <br />
              <span className={styles.highlight}>Email →</span> prejan@prejanneupane.com.np<br />
              <span className={styles.highlight}>GitHub →</span> @prejanNeu<br />
              <span className={styles.highlight}>LinkedIn →</span> Prejan Neupane<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
