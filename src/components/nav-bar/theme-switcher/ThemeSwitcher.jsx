import { UseTheme } from "../../../hooks/UseTheme";

export function ThemeSwitcher() {
  const { setTheme } = UseTheme("dark");

  function switchTheme() {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }

  return (
    <button>
      <a onClick={switchTheme} className="theme-switcher">
        Click
      </a>
    </button>
  );
}
