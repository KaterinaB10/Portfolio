import styles from "./navBar.module.css";
import { NavButton } from "./NavButton";

export function NavBar() {
  return (
    <nav>
      <div>
        <div className={styles.navButtons}>
          <NavButton title="Home" />
          <NavButton title="About" />
          <NavButton title="Projects" />
          <NavButton title="Contact" />
        </div>
        <div className={styles.navExternalLinks}></div>
        <div className={styles.themeSwitcher}></div>
      </div>
    </nav>
  );
}
