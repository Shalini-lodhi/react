import ThemeToggle from './components/ThemeToggle'
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl text-black dark:text-white">Theme Switcher</h1>
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      </div>
    </div>
  );
}

export default App
