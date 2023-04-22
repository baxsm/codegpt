import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Button from "./ui/Button";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button variant="ghost" size="sm" onClick={() => toggleTheme()}>
      <SunIcon className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
