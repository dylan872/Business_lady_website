// src/components/layout/ThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Current theme: ${theme}. Click to switch.`}
            title={`Theme: ${theme}`}
        >
            <span className="theme-toggle-icon"></span>
        </button>
    );
}
export default ThemeToggle;