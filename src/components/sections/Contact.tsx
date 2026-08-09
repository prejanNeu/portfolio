import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <div className="section-label">
            <span className="num">05 / CONTACT</span>
          </div>
          <h2>
            Let&apos;s build<br />
            something <em>great</em>
          </h2>
          <p className={styles.contactDesc}>
            I am open to fullstack developer roles, backend specializations, and collaborative coding initiatives. If you have an exciting project or opportunity, reach out.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:prejan@prejanneupane.com.np" className={styles.contactLinkItem}>
              <div className={styles.clinkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.clinkInfo}>
                <h4>Email</h4>
                <p>prejan@prejanneupane.com.np</p>
              </div>
            </a>

            <a href="tel:+9779818141245" className={styles.contactLinkItem}>
              <div className={styles.clinkIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.2 2 2 0 012.22.03h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className={styles.clinkInfo}>
                <h4>Phone</h4>
                <p>+977 9818141245</p>
              </div>
            </a>

            <a
              href="https://github.com/prejanNeu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLinkItem}
            >
              <div className={styles.clinkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className={styles.clinkInfo}>
                <h4>GitHub</h4>
                <p>@prejanNeu</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/prejan-neupane-461b01263/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLinkItem}
            >
              <div className={styles.clinkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className={styles.clinkInfo}>
                <h4>LinkedIn</h4>
                <p>Prejan Neupane</p>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.contactRight}>
          <div className={styles.availBadge}>
            <div className={styles.availDot}></div>
            <span>Available for opportunities</span>
          </div>
          <p className={styles.availDesc}>
            I am currently open to fullstack developer roles, backend engineering opportunities, and freelance projects. Let&apos;s build software that excels.
          </p>
          <div className={styles.contactNote}>
            &quot;I believe in building software that operates cleanly, performs efficiently, and is maintained with absolute pride.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
