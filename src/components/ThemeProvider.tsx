"use client";

import React, { useSyncExternalStore } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="ashrit-portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
};

export const usePortfolioTheme = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return {
    theme: isMounted ? theme : "dark",
    setTheme,
    isMounted
  };
};
