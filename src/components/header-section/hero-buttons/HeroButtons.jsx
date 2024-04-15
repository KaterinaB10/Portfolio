import { Link } from "react-router-dom";
import styles from "./heroButtons.module.css";

export function HeroButtons() {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonLeft}>
        <Link to="">Download CV</Link>
      </button>
      <button className={styles.buttonRight}>
        <Link to="">Contact Me</Link>
      </button>
    </div>
  );
}
