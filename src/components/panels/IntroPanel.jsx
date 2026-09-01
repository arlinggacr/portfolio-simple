import { SKILLS } from "../../data/resume";

export default function IntroPanel({ skillFilter, setSkillFilter }) {
  return (
    <div className="intro-content">
      <div className="eyebrow">
        SOFTWARE ENGINEER <span>///</span> JAKARTA
      </div>
      <h1 className="intro-headline">
        Building the systems behind
        <br />
        <strong>better products.</strong>
      </h1>
      <p className="intro-body">
        4+ years building scalable backend systems and APIs with NestJS, ASP.NET
        Core, Spring Boot, and Go, also On Learning with Rust. Experienced in
        DDD, CQRS, and event-driven architecture across telco, cloud, ERP, and
        SaaS domains. My main focus is backend engineering, with a software
        engineer's view of the products and teams those systems support.
      </p>
      <div className="intro-status">
        <span className="status-dot" />
        <span>Available for thoughtful software and backend work</span>
      </div>
      <a
        className="cv-link"
        href="/src/cv/resume.pdf"
        download="Arlingga Cahya Ramdhana_Resume.pdf"
      >
        <span>Download CV</span>
        <span className="cv-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
      <div className="intro-actions">
        <a className="secondary-link" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
        <a className="secondary-link" href="mailto:arlinggacr.dev@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
      <div className="profile-stats" aria-label="Profile highlights">
        <div className="profile-stat"><strong>4+</strong><span>years building</span></div>
        <div className="profile-stat"><strong>30+</strong><span>regions supported</span></div>
        <div className="profile-stat"><strong>API</strong><span>backend focus</span></div>
      </div>
      <div className="skill-groups">
        {SKILLS.map((g) => (
          <div className="skill-row" key={g.cat}>
            <span className="skill-cat">{g.cat}</span>
            <div className="skill-pills">
              {g.items.map((item) => (
                <button className={`pill${skillFilter === item ? ' selected' : ''}`} key={item} type="button" onClick={() => setSkillFilter(skillFilter === item ? 'All skills' : item)}>
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
