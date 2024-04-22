import styles from "./landing.module.css";
import { HeaderSection } from "../components/header-section/HeaderSection";
import { AboutSection } from "../components/about-section/AboutSection";

export function Landing() {
  return (
    <div className={styles.landingContainer}>
      <HeaderSection />
      <AboutSection />
    </div>
  );
}
