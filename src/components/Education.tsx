import { resume } from "@/data/resume";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.label}>academics</div>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.grid}>
        {resume.education.map((edu) => (
          <div key={edu.degree} className={styles.card}>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.uni}>{edu.institution}</div>
            <div className={styles.date}>
              {edu.period} · {edu.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
