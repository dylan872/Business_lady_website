import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("pos-theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("pos-theme", theme);
    }, [theme]);

   const toggleTheme = () => {
    setTheme((t) => {
        if (t === "dark") return "light";
        if (t === "light") return "gray";
        return "dark"; 
    });
};

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}