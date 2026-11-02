import resumePdf from "../../cv/my_resume.pdf";
import { SKILLS } from "../../data/resume";

export default function IntroPanel({ skillFilter, setSkillFilter }) {
  return (
    <div className="intro-content">
      <div className="eyebrow">
        SOFTWARE ENGINEER <span>///</span> JAKARTA
      </div>
      <h1 className="intro-headline">
        Architecting the backend behind
        <br />
        <strong>a better products.</strong>
      </h1>
      <p className="intro-body">
        Hi, I'm Arlingga, a Backend Engineer specializing in distributed systems
        and scalable architecture. Driven by clean architecture and
        Domain-Driven Design, I leverage TypeScript, Go, and ASP.NET Core to
        build highly resilient backend engines for complex telco analytics and
        enterprise SaaS platforms."
      </p>
      <div className="intro-status">
        <span className="status-dot" />
        <span>Available for thoughtful software and backend work</span>
      </div>
      <a
        className="cv-link"
        href={resumePdf}
        download="Arlingga_Cahya_Ramdhana_Resume.pdf"
      >
        <span>Download CV</span>
        <span className="cv-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
      <div className="intro-actions">
        <a className="secondary-link" href="#projects">
          Explore projects <span aria-hidden="true">↗</span>
        </a>
        <a className="secondary-link" href="mailto:arlinggacr.dev@gmail.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="profile-stats" aria-label="Profile highlights">
        <div className="profile-stat">
          <strong>4+</strong>
          <span>years building</span>
        </div>
        <div className="profile-stat">
          <strong>30+</strong>
          <span>regions supported</span>
        </div>
        <div className="profile-stat">
          <strong>API</strong>
          <span>backend focus</span>
        </div>
      </div>
      <div className="skill-groups">
        {SKILLS.map((g) => (
          <div className="skill-row" key={g.cat}>
            <span className="skill-cat">{g.cat}</span>
            <div className="skill-pills">
              {g.items.map((item) => (
                <button
                  className={`pill${skillFilter === item ? " selected" : ""}`}
                  key={item}
                  type="button"
                  onClick={() =>
                    setSkillFilter(skillFilter === item ? "All skills" : item)
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
