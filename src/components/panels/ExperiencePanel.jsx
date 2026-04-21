import { EXPERIENCE } from "../../data/resume";

export default function ExperiencePanel() {
  return (
    <div className="exp-content">
      <div className="eyebrow">PROFESSIONAL EXPERIENCE</div>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-left">
              <div className="tl-period">{e.period}</div>
              <span className="tl-badge">{e.type}</span>
            </div>
            <div className="tl-right">
              <div className="tl-title">{e.title}</div>
              <div className="tl-company">{e.company}</div>
              <div className="tl-desc">{e.desc}</div>
              <div className="tl-stack">
                {e.stack.map((s) => (
                  <span className="sp" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
