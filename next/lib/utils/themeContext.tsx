'use client';
import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

type ThemeProviderType = {
  children: React.ReactNode;
  theme: Theme;
};

const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children, theme }: ThemeProviderType) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
