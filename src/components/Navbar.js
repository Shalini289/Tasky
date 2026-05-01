import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Smart Task Planner</h2>
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
