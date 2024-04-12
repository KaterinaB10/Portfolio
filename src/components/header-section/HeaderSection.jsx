import styles from "./headerSection.module.css";

export function HeaderSection() {
  <div className={styles.headerContainer}>
    <div className={styles.textContainer}>
      <h1>Hello, I’m Kateryna.</h1>
      <h1>Front End Developer</h1>
      <p>
        I’m passionate about solving unique coding challenges and deeply drawn
        to creativity and problem-solving.
      </p>
    </div>
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonLeft}>
        <a href="">Download CV</a>
      </button>
      <button className={styles.buttonRight}>
        <a href="">Contact Me</a>
      </button>
    </div>
  </div>;
}
