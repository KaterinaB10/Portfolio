import styles from "./navBar.module.css";
import { NavButton } from "./NavButton";
import { ThemeSwitcher } from "./theme-switcher/ThemeSwitcher";
import { GitHubLogo } from "./link-logos/GitHubLogo";
import { LinkInLogo } from "./link-logos/LinkInLogo";

export function NavBar() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.navButtons}>
          <NavButton title="Home" />
          <NavButton title="About" />
          <NavButton title="Projects" />
          <NavButton title="Contact" />
        </div>
        <div className={styles.navExternalLinks}>
          <a href="">
            <GitHubLogo />
          </a>
          <a href="">
            <LinkInLogo />
          </a>
        </div>
        <div className={styles.themeSwitcher}>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
