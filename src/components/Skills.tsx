import { resume } from "@/data/resume";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.label}>capabilities</div>
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.grid}>
        {resume.skills.map((group) => (
          <div key={group.category} className={styles.card}>
            <div className={styles.cat}>{group.category}</div>
            <div className={styles.tags}>
              {group.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
