import { CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'Google Cloud Professional DevOps Engineer', issuer: 'Google Cloud' },
  { name: 'Google Cloud Professional Cloud Architect', issuer: 'Google Cloud' },
];

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Certifications
          </h2>
          <p className="section-subtitle">Professional validation of skills</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="cert-card fade-in"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <CheckCircle size={20} strokeWidth={1.5} className="cert-icon-mono" />
              <div>
                <div className="cert-name">{cert.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
