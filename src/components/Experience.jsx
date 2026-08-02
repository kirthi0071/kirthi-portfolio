import { MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Cloud Engineer',
    company: 'Enhub.ai',
    period: 'Feb 2025 – Present',
    type: 'Full-time',
    location: 'Bengaluru, Karnataka',
    paragraphs: [
      'Architected modular Terraform configurations using a root-and-submodule structure with environment-specific tfvars files, automating provisioning via GitHub Actions on every commit for consistent, repeatable deployments across client environments.',
      'Led the migration of an ad server workload from Azure to GCP, including upgrading deprecated Windows Server instances, with zero service disruption during cutover.',
      'Centralized traffic routing for 40+ microservices under a single shared Ingress controller, cutting load balancer infrastructure overhead by 10% and streamlining cluster ingress management.',
      'Architected a FedRAMP-compliant cloud landing zone using Infrastructure as Code, establishing automated guardrails, strict multi-account governance, and enterprise security baselines to accelerate ATO readiness.',
      'Orchestrated a transition from push-based pipelines to ArgoCD-driven GitOps across 40+ microservices, unlocking automated state reconciliation, end-to-end auditability, and instant rollbacks.',
      'Migrated legacy Chef-based infrastructure to containerized Docker environments, deployed and tuned a self-hosted multi-node OpenSearch cluster on GCP Compute Engine, and handled 24x7 on-call support with minimal downtime.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Experience
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="timeline fade-in">
          {experiences.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">{exp.title}</div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-meta">
                      <span className="exp-meta-badge">
                        <MapPin size={12} strokeWidth={2} style={{ marginRight: '4px' }} />
                        {exp.location}
                      </span>
                      <span className="exp-meta-badge">
                        <Briefcase size={12} strokeWidth={2} style={{ marginRight: '4px' }} />
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-paras">
                  {exp.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
