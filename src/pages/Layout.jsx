import { Outlet } from "react-router-dom";
import { NavBar } from "../components/nav-bar/NavBar";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
