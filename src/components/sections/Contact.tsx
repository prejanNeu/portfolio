import SectionHeader from "@/components/SectionHeader";
import styles from "./Contact.module.css";

const links = [
  {
    label: "Email",
    value: "prejan@prejanneupane.com.np",
    href: "mailto:prejan@prejanneupane.com.np",
  },
  {
    label: "Phone",
    value: "+977 9818141245",
    href: "tel:+9779818141245",
  },
  {
    label: "GitHub",
    value: "@prejanNeu",
    href: "https://github.com/prejanNeu",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Prejan Neupane",
    href: "https://www.linkedin.com/in/prejan-neupane-461b01263/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's connect"
              description="Open to full-stack and backend roles, freelance work, and interesting side projects. Drop a line — I usually reply within a day."
            />
            <a href="mailto:prejan@prejanneupane.com.np" className="btn btn-primary">
              Send an email
            </a>
          </div>

          <address className={styles.links}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.linkItem}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
}
