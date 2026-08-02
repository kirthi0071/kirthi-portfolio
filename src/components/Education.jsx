import { GraduationCap, Award, MapPin } from 'lucide-react';

const education = [
  {
    school: 'Sri Krishna College of Engineering and Technology',
    degree: 'B.Tech – Information Technology',
    location: 'Coimbatore, Tamil Nadu',
    cgpa: 'CGPA: 8.0 / 10',
    period: 'Nov 2020 – Mar 2024',
  },
];

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Education
          </h2>
          <p className="section-subtitle">Academic background</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {education.map((edu, i) => (
            <div
              key={edu.school}
              className="edu-card fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="edu-icon">
                <GraduationCap size={32} strokeWidth={1.2} />
              </div>
              <div className="edu-info">
                <h3 className="edu-school">{edu.school}</h3>
                <div className="edu-location">
                  <MapPin size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {edu.location} · {edu.period}
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-cgpa">
                  <Award size={14} strokeWidth={2} style={{ marginRight: '6px' }} />
                  {edu.cgpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
