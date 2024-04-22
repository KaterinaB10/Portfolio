import styles from "./sectionTitle.module.css";

export function SectionTitle() {
  return (
    <div className={styles.titleContainer}>
      <h2>About Me</h2>
      <div className={styles.titleLine}></div>
    </div>
  );
}
