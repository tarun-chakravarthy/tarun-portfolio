import { resume } from "@/data/resume";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {resume.name} · {resume.title} ·{" "}
      {resume.location}
    </footer>
  );
}
