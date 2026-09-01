import { PROJECTS } from '../../data/resume'

export default function ProjectsPanel({ skillFilter, setSkillFilter }) {
  const visibleProjects = PROJECTS.filter((project) => skillFilter === 'All skills' || project.stack.includes(skillFilter))
  return (
    <div className="projects-content">
      <div className="eyebrow">PROJECTS</div>
      <div className="filter-bar">
        <span>FILTER</span>
        <button className={skillFilter === 'All skills' ? 'active' : ''} type="button" onClick={() => setSkillFilter('All skills')}>All skills</button>
        {skillFilter !== 'All skills' && <button className="active" type="button" onClick={() => setSkillFilter('All skills')}>{skillFilter} ×</button>}
      </div>
      <div className="proj-grid">
        {visibleProjects.map((p, i) => (
          <div className="proj-item" key={i}>
            <div className="proj-heading">
              <div className="proj-name">{p.name}</div>
              {p.category && <span className="proj-category">{p.category}</span>}
              {p.status && <span className="proj-status">{p.status}</span>}
              <span className="proj-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="sp" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
