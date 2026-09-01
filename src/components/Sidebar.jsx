import { NAV } from "../data/resume";

export default function Sidebar({ active, setActive, theme, onToggleTheme, emailCopied, onCopyEmail }) {
  const isDark = theme === "dark";

  return (
    <aside className="sidebar">
      <div className="sidebar-identity">
        <div className="sidebar-name">
          Arlingga Cahya
          <br />
          Ramdhana
        </div>
        <div className="sidebar-role">software_engineer</div>
      </div>

      <ul className="sidebar-nav">
        {NAV.map((n, i) => (
          <li
            key={n.id}
            className={`nav-item${active === n.id ? " active" : ""}`}
            onClick={() => setActive(n.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setActive(n.id);
            }}
            role="button"
            tabIndex={0}
            aria-current={active === n.id ? "page" : undefined}
          >
            <span className="nav-index">0{i + 1}</span>
            <span className="nav-label">{n.label}</span>
            <span className="nav-arrow" aria-hidden="true">↗</span>
          </li>
        ))}
      </ul>

      <div className="sidebar-contact">
        <a className="contact-link" href="mailto:arlinggacr.dev@gmail.com">
          arlinggacr.dev@gmail.com
        </a>
        <button className="contact-link contact-button" type="button" onClick={onCopyEmail}>
          {emailCopied ? 'email copied' : 'copy email'}
        </button>
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
        <button
          type="button"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          className={`toggle-btn${isDark ? " on" : ""}`}
          onClick={onToggleTheme}
        >
          <div className="toggle-knob" />
        </button>
      </div>

      <div className="sidebar-footer" style={{ marginTop: "20px" }}>
        ↑ ↓ to navigate
      </div>
    </aside>
  );
}
