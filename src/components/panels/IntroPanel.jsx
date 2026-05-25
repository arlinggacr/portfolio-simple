import { SKILLS } from "../../data/resume";

export default function IntroPanel() {
  return (
    <div className="intro-content">
      <div className="eyebrow">BACKEND ENGINEER · JAKARTA</div>
      <h1 className="intro-headline">
        Building systems and logical business solutions
        <br />
        <strong>as u wish.</strong>
      </h1>
      <p className="intro-body">
        4+ years delivering scalable backend services with NestJS, ASP.NET Core,
        Spring Boot, and Go, also On Learning with Rust. Experienced in DDD,
        CQRS, and event-driven architecture across telco, cloud, ERP, and SaaS
        domains.
      </p>
      <div className="skill-groups">
        {SKILLS.map((g) => (
          <div className="skill-row" key={g.cat}>
            <span className="skill-cat">{g.cat}</span>
            <div className="skill-pills">
              {g.items.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
