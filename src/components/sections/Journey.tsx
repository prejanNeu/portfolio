import styles from "./Journey.module.css";

export default function Journey() {
  const educationTimeline = [
    {
      date: "2022 – 2026",
      title: "Bachelor of Science in CSIT",
      institution: "Patan Multiple Campus, Tribhuvan University",
      desc: "Completed an intensive Bachelor's degree program covering computational complexity, relational databases, software construction algorithms, networks, and advanced machine learning modeling.",
    },
    {
      date: "2024",
      title: "CS50: Introduction to Python",
      institution: "Harvard University (Online)",
      desc: "Completed Harvard's rigorous CS50 introduction to Python program. Focused on mastery of language fundamentals, exceptions handling, libraries implementations, file management structure, and object-oriented architectures.",
      certLink: "https://certificates.cs50.io/67ae5892-3f8c-453b-9362-9c92a45a1fc2.pdf?size=letter",
    },
    {
      date: "2020 – 2022",
      title: "Higher Secondary Education (+2) — Science",
      institution: "Manasalu College",
      desc: "Formulated core skills in arithmetic, mechanics, and physical systems which established the foundation for computational reasoning.",
    },
    {
      date: "2020",
      title: "Secondary Education Examination (SEE)",
      institution: "Shree Mahalaxmi Secondary School",
      desc: "Achieved high scores in standard testing, preparing for scientific curriculum.",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-inner">
        <div className="section-label">
          <span className="num">04 / JOURNEY</span>
        </div>
        <h2>
          Education &<br />
          <em>Growth</em>
        </h2>

        <div className={styles.eduTimeline}>
          {educationTimeline.map((item, idx) => (
            <div key={idx} className={styles.eduItem}>
              <div className={styles.eduDate}>{item.date}</div>
              <div className={styles.eduBody}>
                {item.certLink ? (
                  <div className={styles.eduTitleRow}>
                    <h3>{item.title}</h3>
                    <a
                      href={item.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.eduCertBtn}
                    >
                      View Certificate ↗
                    </a>
                  </div>
                ) : (
                  <h3>{item.title}</h3>
                )}
                <div className={styles.eduInstitution}>{item.institution}</div>
                <p className={styles.eduDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
