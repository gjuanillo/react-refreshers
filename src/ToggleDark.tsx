import { useEffect, useState } from "react";

function ToggleDark() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className="p-2 dark:bg-gray-200 bg-blue-600 text-gray-200 dark:text-gray-800 rounded"
        >
            Toggle Dark Mode
        </button>
    );
}

export default ToggleDark;
