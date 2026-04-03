import { resume } from "@/data/resume";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.label}>career</div>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.statsRow}>
        {resume.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.value}</span>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.list}>
        {resume.experience.map((job) => (
          <div key={job.company} className={styles.item}>
            <div className={styles.meta}>
              <div className={styles.period}>{job.period}</div>
              <div className={styles.company}>{job.company}</div>
              <div className={styles.loc}>{job.location}</div>
            </div>
            <div className={styles.content}>
              <div className={styles.role}>{job.role}</div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
