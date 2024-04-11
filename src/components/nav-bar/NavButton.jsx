import { NavLink } from "react-router-dom";
import styles from "./navButton.module.css";

export function NavButton(property) {
  return (
    <NavLink to={property.link} className={styles.navLink}>
      {property.title}
    </NavLink>
  );
}
