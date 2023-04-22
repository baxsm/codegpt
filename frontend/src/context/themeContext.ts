/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});