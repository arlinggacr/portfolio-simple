import { CERTS } from '../../data/resume'

export default function EducationPanel() {
  return (
    <div className="edu-content">
      <div className="eyebrow">EDUCATION & CERTIFICATIONS</div>
      <div className="edu-block">
        <div className="edu-degree">S1 Informatics Engineering</div>
        <div className="edu-school">University of Muhammadiyah Prof. Dr. Hamka</div>
        <div className="edu-meta">2019 – 2023 · GPA 3.69 / 4.00</div>
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
