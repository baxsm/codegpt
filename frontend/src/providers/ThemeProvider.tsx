import { ThemeContext } from "../context/themeContext";
import { ReactNode, useEffect, useState } from 'react';

const getTheme = (): string => {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'dark');
    return 'dark';
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(getTheme());

  const toggleTheme = (): void => {
    if (theme === 'dark') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      setTheme('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setTheme('dark');
    }
  };

  useEffect(() => {
    const refreshTheme = (): void => {
      localStorage.setItem('theme', theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;