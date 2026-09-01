import { CERTS, NON_FORMAL_EDUCATION } from '../../data/resume'

export default function EducationPanel() {
  return (
    <div className="edu-content">
      <div className="eyebrow">EDUCATION & CERTIFICATIONS</div>
      <div className="edu-block">
        <div className="edu-degree">S1 Informatics Engineering</div>
        <div className="edu-school">University of Muhammadiyah Prof. Dr. Hamka</div>
        <div className="edu-meta">2019 – 2023 · GPA 3.69 / 4.00</div>
      </div>
      <div className="edu-block edu-non-formal">
        <div className="edu-section-label">NON-FORMAL EDUCATION</div>
        <div className="edu-degree">{NON_FORMAL_EDUCATION.title}</div>
        <div className="edu-school">{NON_FORMAL_EDUCATION.school}</div>
        <div className="edu-meta">{NON_FORMAL_EDUCATION.period} · {NON_FORMAL_EDUCATION.meta}</div>
        <div className="edu-description">{NON_FORMAL_EDUCATION.desc}</div>
        <div className="tl-stack">
          {NON_FORMAL_EDUCATION.stack.map((item) => <span className="sp" key={item}>{item}</span>)}
        </div>
      </div>
      <div className="eyebrow" style={{ marginBottom: '16px' }}>CERTIFICATIONS</div>
      <div className="cert-list">
        {CERTS.map((c, i) => (
          <div className="cert-item" key={i}>
            <span className="cert-year">{c.year}</span>
            <span className="cert-name">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
