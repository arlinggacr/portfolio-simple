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
                  <button className={`sp${skillFilter === s ? ' selected' : ''}`} type="button" key={s} onClick={() => setSkillFilter(skillFilter === s ? 'All skills' : s)}>{s}</button>
                ))}
              </div>
            </div>
          ))}
      </div>
      {!visibleProjects.length && <div className="empty-state">No projects use <strong>{skillFilter}</strong> yet. Clear the filter to view all projects.</div>}
    </div>
  )
}
