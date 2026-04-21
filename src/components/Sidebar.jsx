import { NAV } from "../data/resume";

export default function Sidebar({ active, setActive, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <aside className="sidebar">
      <div className="sidebar-identity">
        <div className="sidebar-name">
          Arlingga Cahya
          <br />
          Ramdhana
        </div>
        <div className="sidebar-role">backend_engineer.godev</div>
      </div>

      <ul className="sidebar-nav">
        {NAV.map((n, i) => (
          <li
            key={n.id}
            className={`nav-item${active === n.id ? " active" : ""}`}
            onClick={() => setActive(n.id)}
          >
            <span className="nav-index">0{i + 1}</span>
            <span className="nav-label">{n.label}</span>
          </li>
        ))}
      </ul>

      <div className="sidebar-contact">
        <a className="contact-link" href="mailto:arlinggacr.dev@gmail.com">
          arlinggacr.dev@gmail.com
        </a>
        <a
          className="contact-link"
          href="https://linkedin.com/in/arlinggacr"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/arlinggacr
        </a>
        <a
          className="contact-link"
          href="https://github.com/arlinggacr"
          target="_blank"
          rel="noreferrer"
        >
          github.com/arlinggacr
        </a>
      </div>

      <div className="theme-toggle">
        <span className="toggle-label">{isDark ? "DARK" : "LIGHT"} MODE</span>
        <div
          className={`toggle-btn${isDark ? " on" : ""}`}
          onClick={onToggleTheme}
        >
          <div className="toggle-knob" />
        </div>
      </div>

      <div className="sidebar-footer" style={{ marginTop: "20px" }}>
        ↑ ↓ to navigate
      </div>
    </aside>
  );
}
