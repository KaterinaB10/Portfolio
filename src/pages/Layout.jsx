import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="header">
        <h1>Kateryna</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </>
  );
}
