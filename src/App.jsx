import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import TechStack from "./screens/TechStack";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import ColorModeIcon from "./components/ColorModeIcon";
import Navbar from "./components/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On initial render, check if user prefers dark mode
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isDarkMode={isDarkMode}
                  toggleColorMode={toggleColorMode}
                />
              }
            />
            <Route
              path="about"
              element={
                <About
                  isDarkMode={isDarkMode}
                  toggleColorMode={toggleColorMode}
                />
              }
            />
            <Route
              path="tech-stack"
              element={
                <TechStack
                  isDarkMode={isDarkMode}
                  toggleColorMode={toggleColorMode}
                />
              }
            />
            <Route
              path="projects"
              element={
                <Projects
                  isDarkMode={isDarkMode}
                  toggleColorMode={toggleColorMode}
                />
              }
            />
            <Route
              path="contact"
              element={
                <Contact
                  isDarkMode={isDarkMode}
                  toggleColorMode={toggleColorMode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
