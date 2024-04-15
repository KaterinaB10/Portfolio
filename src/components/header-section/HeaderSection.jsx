import { HeroText } from "./hero-text/HeroText";
import { HeroButtons } from "./hero-buttons/HeroButtons";

import styles from "./headerSection.module.css";

export function HeaderSection() {
  return (
    <div className={styles.headerContainer}>
      <HeroText />
      <HeroButtons />
    </div>
  );
}
