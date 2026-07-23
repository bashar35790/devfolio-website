"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (newTheme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [muted, setMuted] = useState(false);

  const setTheme = (newTheme:"light" | "dark") => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleTheme = () => {
    setTheme(theme==="light"?"dark":"light");
  }

  useEffect(
    ()=>{
        const saveTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark":"light";
        const initialTheme = saveTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMuted(true);
    }
  ,[]);

  if(!muted){
    return null;
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};


// custom hooks

export const useTheme = ()=>{
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("useTheme must be used within a themeProvider");
    }
    return context;
}