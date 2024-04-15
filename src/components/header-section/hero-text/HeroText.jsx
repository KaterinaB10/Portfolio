import styles from "./heroText.module.css";

export function HeroText() {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.textFirstLine}>Hello, I’m Kateryna.</h1>
      <h1 className={styles.textSecondLine}>Front End Developer</h1>
      <p>
        I’m passionate about solving unique coding challenges and deeply drawn
        to creativity and problem-solving.
      </p>
    </div>
  );
}
