import { PROJECTS } from "../../data/resume";

export default function ProjectsPanel() {
  return (
    <div className="projects-content">
      <div className="eyebrow">PROJECTS</div>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div className="proj-item" key={i}>
            <div className="proj-name">{p.name}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="sp" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
