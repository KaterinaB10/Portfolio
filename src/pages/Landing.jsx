import styles from "./landing.module.css";
import { HeaderSection } from "../components/header-section/HeaderSection";

export function Landing() {
  return (
    <div className={styles.landingContainer}>
      <HeaderSection />
    </div>
  );
}
