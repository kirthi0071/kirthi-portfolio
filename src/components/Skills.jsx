import { Cloud, Layers, Boxes, GitBranch, Activity, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Cloud,
    name: 'Cloud Platforms',
    skills: ['GCP', 'AWS', 'Azure'],
  },
  {
    icon: Layers,
    name: 'Infrastructure as Code',
    skills: ['Terraform', 'Ansible'],
  },
  {
    icon: Boxes,
    name: 'Containers & Orchestration',
    skills: ['Docker', 'Kubernetes', 'Helm'],
  },
  {
    icon: GitBranch,
    name: 'CI/CD',
    skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Git'],
  },
  {
    icon: Activity,
    name: 'Monitoring & Alerting',
    skills: ['Prometheus', 'Grafana', 'Cloud Monitoring & Logging'],
  },
  {
    icon: Terminal,
    name: 'Scripting & OS',
    skills: ['Python', 'Bash / Shell', 'Linux', 'SQL'],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Skills &amp; Tech Stack
          </h2>
          <p className="section-subtitle">My technical toolkit</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="skill-category fade-in"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="skill-header">
                <cat.icon className="skill-cat-icon" size={24} strokeWidth={1.5} />
                <div className="skill-cat-name">{cat.name}</div>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
