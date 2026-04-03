import { resume } from "@/data/resume";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.tag}>{resume.location}</div>
          <h1 className={styles.name}>
            {resume.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <em>{word}</em> : word}
                <br />
              </span>
            ))}
          </h1>
          <p className={styles.desc}>{resume.summary}</p>
          <div className={styles.btns}>
            <a href="#contact" className={styles.btnPrimary}>
              Get in touch
            </a>
            <a href="#experience" className={styles.btnGhost}>
              View experience
            </a>
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={`${styles.dot} ${styles.dotR}`} />
            <span className={`${styles.dot} ${styles.dotY}`} />
            <span className={`${styles.dot} ${styles.dotG}`} />
            <span className={styles.termTitle}>tarun@portfolio ~</span>
          </div>
          <div className={styles.termBody}>
            <p>
              <span className={styles.tPrompt}>$</span>{" "}
              <span className={styles.tCmd}>whoami</span>
            </p>
            <p>
              <span className={styles.tKey}>name</span>:{" "}
              <span className={styles.tVal}>&quot;{resume.name}&quot;</span>
            </p>
            <p>
              <span className={styles.tKey}>role</span>:{" "}
              <span className={styles.tVal}>&quot;{resume.title}&quot;</span>
            </p>
            <p>
              <span className={styles.tKey}>location</span>:{" "}
              <span className={styles.tVal}>&quot;{resume.location}&quot;</span>
            </p>
            <p>
              <span className={styles.tKey}>experience</span>:{" "}
              <span className={styles.tVal}>&quot;5+ years&quot;</span>
            </p>
            <br />
            <p>
              <span className={styles.tPrompt}>$</span>{" "}
              <span className={styles.tCmd}>cat stack.json</span>
            </p>
            <p>
              <span className={styles.tComment}>{'//frontend'}</span>
            </p>
            <p>
              <span className={styles.tKey}>fe</span>:{" "}
              <span className={styles.tVal}>
                [&quot;React&quot;, &quot;Next.js&quot;,
                &quot;TypeScript&quot;]
              </span>
            </p>
            <p>
              <span className={styles.tComment}>{'//backend'}</span>
            </p>
            <p>
              <span className={styles.tKey}>be</span>:{" "}
              <span className={styles.tVal}>
                [&quot;Node.js&quot;, &quot;GraphQL&quot;, &quot;PHP&quot;]
              </span>
            </p>
            <p>
              <span className={styles.tComment}>{'//cloud'}</span>
            </p>
            <p>
              <span className={styles.tKey}>cloud</span>:{" "}
              <span className={styles.tVal}>
                [&quot;AWS&quot;, &quot;Azure&quot;, &quot;Vercel&quot;]
              </span>
            </p>
            <br />
            <p>
              <span className={styles.tPrompt}>$</span>{" "}
              <span className={styles.cursor} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
