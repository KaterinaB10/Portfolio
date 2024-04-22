import styles from "./aboutSection.module.css";
import { SectionTitle } from "./section-title/SectionTitle";
import { Pitch } from "./pitch/Pitch";

export function AboutSection() {
  return (
    <div className={styles.aboutSectionContainer}>
      <SectionTitle />
      <div>
        <Pitch />
      </div>
    </div>
  );
}
