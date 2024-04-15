import styles from "./heroButtons.module.css";

export function HeroButtons() {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonLeft}>
        <a href="">Download CV</a>
      </button>
      <button className={styles.buttonRight}>
        <a href="">Contact Me</a>
      </button>
    </div>
  );
}
