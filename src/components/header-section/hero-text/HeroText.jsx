import styles from "./heroText.module.css";

export function HeroText() {
  return (
    <div className={styles.textContainer}>
      <h1>Hello, I’m Kateryna.</h1>
      <h1>Front End Developer</h1>
      <p>
        I’m passionate about solving unique coding challenges and deeply drawn
        to creativity and problem-solving.
      </p>
    </div>
  );
}
