import { EXPERIENCE, EMPLOYMENT_EXPERIENCE, FREELANCE_EXPERIENCE } from '../../data/resume'

export default function ExperiencePanel({ skillFilter, setSkillFilter, selectedExperience, setSelectedExperience }) {
  const renderTimeline = (entries) => entries.filter((entry) => skillFilter === 'All skills' || entry.stack.includes(skillFilter)).map((e) => {
          const originalIndex = EXPERIENCE.indexOf(e)
          return <article className={`tl-item${e.current ? ' current' : ''}${selectedExperience === originalIndex ? ' selected' : ''}`} key={originalIndex} onClick={() => setSelectedExperience(originalIndex)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedExperience(originalIndex) }} tabIndex={0}>
            <span className="tl-marker" aria-hidden="true" />
            <div className="tl-left">
              <div className="tl-period">{e.period}</div>
              <div className="tl-badges">
                <span className="tl-badge">{e.type}</span>
                {e.current && <span className="tl-current">Current</span>}
              </div>
            </div>
            <div className="tl-right">
              <div className="tl-title">{e.title}</div>
              <div className="tl-company">{e.company}</div>
              <div className="tl-desc">{e.desc}</div>
              <div className="tl-stack">
                {e.stack.map((s) => (
                  <button className={`sp${skillFilter === s ? ' selected' : ''}`} type="button" key={s} onClick={(event) => { event.stopPropagation(); setSkillFilter(skillFilter === s ? 'All skills' : s) }}>{s}</button>
                ))}
              </div>
            </div>
          </article>
        })
  return (
    <div className="exp-content">
      <div className="eyebrow">PROFESSIONAL EXPERIENCE</div>
      <div className="experience-group">
        <div className="experience-group-title">Employment</div>
        <div className="timeline">{renderTimeline(EMPLOYMENT_EXPERIENCE)}</div>
      </div>
      <div className="experience-group">
        <div className="experience-group-title">Freelance</div>
        <div className="timeline">{renderTimeline(FREELANCE_EXPERIENCE)}</div>
      </div>
    </div>
  )
}
