import { resume } from "@/data/resume";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.label}>reach out</div>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for new opportunities
          </div>
          <p className={styles.desc}>
            Open to full-time roles and contract work in Sydney or remote.
            Let&apos;s build something great together.
          </p>
        </div>
        <div className={styles.links}>
          <a href={`mailto:${resume.email}`} className={styles.link}>
            <span className={styles.icon}>✉</span>
            {resume.email}
          </a>
          <a href={`tel:${resume.phone}`} className={styles.link}>
            <span className={styles.icon}>☎</span>
            {resume.phone}
          </a>
          <a href={resume.github} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon} style={{ fontFamily: "monospace", fontSize: 12 }}>GH</span>
            GitHub
          </a>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon} style={{ fontFamily: "monospace", fontSize: 11 }}>in</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
