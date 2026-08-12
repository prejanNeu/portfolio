import SectionHeader from "@/components/SectionHeader";
import styles from "./Journey.module.css";

const education = [
  {
    date: "2022 – 2026",
    title: "BSc in Computer Science & Information Technology",
    institution: "Patan Multiple Campus, Tribhuvan University",
    description:
      "Coursework in algorithms, databases, software engineering, networking, and machine learning.",
  },
  {
    date: "2024",
    title: "CS50: Introduction to Python",
    institution: "Harvard University (Online)",
    description:
      "Harvard's CS50 Python course — OOP, file I/O, libraries, and problem-solving with Python.",
    certLink:
      "https://certificates.cs50.io/67ae5892-3f8c-453b-9362-9c92a45a1fc2.pdf?size=letter",
  },
  {
    date: "2020 – 2022",
    title: "Higher Secondary (+2) — Science",
    institution: "Manasalu College",
    description: "Science stream with focus on mathematics and physics.",
  },
];

export default function Journey() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          title="Background"
        />

        <ol className={styles.timeline} role="list">
          {education.map((item) => (
            <li key={item.title} className={styles.item}>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
              <div className={styles.body}>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{item.title}</h3>
                  {item.certLink && (
                    <a
                      href={item.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certLink}
                    >
                      Certificate ↗
                    </a>
                  )}
                </div>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
