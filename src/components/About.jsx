const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '4', label: 'Projects Built' },
  { number: '2', label: 'Cloud Certifications' },
  { number: '3', label: 'Cloud Platforms' },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text fade-in">
            <div className="section-header">
              <h2 className="section-title">
                <span className="accent-dot" />
                About Me
              </h2>
              <p className="section-subtitle">Who I am & what I do</p>
            </div>
            <p>
              I am an <strong>Associate Cloud Engineer</strong> at Enhub.ai with 2 years of experience
              architecting and operating <strong>multi-cloud infrastructure across GCP, AWS, and Azure</strong> in
              multi-client, microservices environments.
            </p>
            <p>
              I'm Google Cloud certified in <strong>DevOps Engineering and Cloud Architecture</strong>, with a track
              record of driving <strong>GitOps CI/CD adoption</strong> using ArgoCD, building resilient
              <strong> Kubernetes</strong> platforms, and optimizing infrastructure cost and performance.
            </p>
            <p>
              I work extensively with <strong>Terraform</strong> for infrastructure as code, <strong>Docker and
              Kubernetes</strong> for container orchestration, and <strong>Jenkins, GitHub Actions, and GitLab
              CI</strong> for building automated delivery pipelines across dozens of microservices.
            </p>
            <p>
              I enjoy solving hard infrastructure problems — from cloud migrations to production reliability — and
              I'm always looking to <strong>learn, build, and grow</strong> in the cloud and DevOps space.
            </p>
          </div>

          <div className="about-stats fade-in">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
