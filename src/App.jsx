import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import EducationPanel from "./components/panels/EducationPanel";
import ExperiencePanel from "./components/panels/ExperiencePanel";
import IntroPanel from "./components/panels/IntroPanel";
import ProjectsPanel from "./components/panels/ProjectsPanel";
import { NAV } from "./data/resume";

function App() {
  const savedPanel = localStorage.getItem("portfolio-acr-panel") || "intro";
  const savedTheme = localStorage.getItem("portfolio-acr-theme") || "dark";

  const [active, setActive] = useState(savedPanel);
  const [theme, setTheme] = useState(savedTheme);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-acr-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-acr-panel", active);
  }, [active]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      const idx = NAV.findIndex((n) => n.id === active);
      if (
        (e.key === "ArrowDown" || e.key === "ArrowRight") &&
        idx < NAV.length - 1
      )
        setActive(NAV[idx + 1].id);
      if ((e.key === "ArrowUp" || e.key === "ArrowLeft") && idx > 0)
        setActive(NAV[idx - 1].id);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="shell">
      <Sidebar
        active={active}
        setActive={setActive}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main">
        <div className={`panel${active === "intro" ? " active" : ""}`}>
          <IntroPanel />
        </div>
        <div className={`panel${active === "experience" ? " active" : ""}`}>
          <ExperiencePanel />
        </div>
        <div className={`panel${active === "projects" ? " active" : ""}`}>
          <ProjectsPanel />
        </div>
        <div className={`panel${active === "education" ? " active" : ""}`}>
          <EducationPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
