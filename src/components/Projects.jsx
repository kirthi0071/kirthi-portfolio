import { useState } from 'react';
import { Info } from 'lucide-react';
import ProjectModal from './ProjectModal';

// Simple SVG Component for GitHub since brand icons were removed in modern Lucide
const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectGroups = [
  {
    company: 'PERSONAL PROJECTS',
    projects: [
      {
        title: 'Terraform GKE Autopilot Platform',
        description:
          'A production-grade GKE Autopilot platform provisioned with modular Terraform and deployed via a keyless GitHub Actions CI/CD pipeline using Workload Identity Federation.',
        details: [
          'Built decoupled root modules (vpc, iam, gke) with separate state files to reduce blast radius and prevent accidental destruction of networking or security resources during cluster updates.',
          'Implemented keyless GCP authentication via Workload Identity Federation, eliminating long-lived service account JSON keys from GitHub Secrets in favor of short-lived OIDC tokens.',
          'Designed a PR-driven infrastructure workflow: opening a PR runs terraform plan for changed modules and posts the plan diff as a PR comment for review.',
          'Configured merge-triggered automated apply — vpc and iam apply concurrently, followed by gke, which reads their outputs via terraform_remote_state.',
          'Set up GCS remote state storage with versioning and documented a path to add new environments (staging, prod) without duplicating module code.',
        ],
        tech: ['Terraform', 'GKE Autopilot', 'GitHub Actions', 'Workload Identity Federation', 'GCS', 'IAM'],
        github: 'https://github.com/kirthi0071/Terraform-GKE-Autopilot',
      },
      {
        title: 'GCP Terraform CI/CD Pipeline',
        description:
          'An end-to-end DevSecOps pipeline provisioning GCP infrastructure (VPC, firewall rules, VM) with Terraform, gated by linting, security scanning, and infrastructure tests.',
        details: [
          'Authored modular Terraform (VPC, firewall-rules, VM modules) with a dedicated dev environment configuration and remote backend.',
          'Built a GitHub Actions pipeline running TFLint and tfsec as quality and security gates before any terraform plan is generated.',
          'Authenticated to GCP using Workload Identity Federation for keyless, short-lived credentials in CI.',
          'Added Terratest (Go) to validate infrastructure behavior post-plan, catching regressions before they reach an environment.',
          'Mirrored the same pipeline stages in a Jenkinsfile (TFLint, tfsec, Terraform init) to support both GitHub Actions and Jenkins-based delivery.',
        ],
        tech: ['Terraform', 'GCP', 'GitHub Actions', 'Jenkins', 'TFLint', 'tfsec', 'Terratest'],
        github: 'https://github.com/kirthi0071/gcp-terraform-cicd',
      },
      {
        title: 'Food Website: Secure DevSecOps CI/CD Pipeline',
        description:
          'An end-to-end multi-stage Jenkins pipeline automating build, security analysis, containerization, and deployment of a Node.js web application.',
        details: [
          'Built a multi-stage Jenkins pipeline automating build, security analysis, containerization, and deployment of a Node.js web application.',
          'Integrated SonarQube for code quality gates and OWASP Dependency-Check to catch vulnerable NPM dependencies at build time, blocking non-compliant builds.',
          'Implemented Trivy for dual-level vulnerability scanning (filesystem and container image) to block critical vulnerabilities prior to registry push.',
          'Automated Docker container builds and image pushes to Docker Hub, establishing a fully containerized deployment flow.',
          'Provisioned infrastructure using Terraform and stood up real-time cluster monitoring with Prometheus and Grafana.',
        ],
        tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana'],
        github: null,
      },
      {
        title: 'Enterprise GitOps Pipeline & Microservices on AWS EKS',
        description:
          'A declarative GitOps continuous delivery model on AWS EKS using ArgoCD to auto-sync state between GitHub infrastructure configs and Kubernetes clusters.',
        details: [
          'Implemented a declarative GitOps continuous delivery model using ArgoCD to auto-sync state between GitHub infrastructure configs and AWS EKS clusters, eliminating manual deployment drift.',
          'Provisioned and managed production-grade AWS EKS clusters using Terraform, configuring managed node groups, IAM Roles for Service Accounts (IRSA), and custom Ingress Controllers.',
          'Engineered an automated Jenkins CI pipeline for testing, immutable Docker image builds, container layer scanning, and tagged image pushes to the GitOps manifest repository.',
          'Authored structured Helm charts and Kubernetes manifests in Git as the single source of truth for frontend and backend microservice configuration.',
          'Integrated Prometheus and Grafana dashboards on EKS for real-time cluster performance, pod lifecycle, and ArgoCD sync-status monitoring.',
        ],
        tech: ['AWS EKS', 'ArgoCD', 'GitOps', 'Jenkins', 'Kubernetes', 'Helm', 'Terraform', 'Prometheus', 'Grafana'],
        github: null,
      },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Projects
          </h2>
          <p className="section-subtitle">Things I&apos;ve built</p>
        </div>

        {projectGroups.map((group) => (
          <div key={group.company} className="project-group fade-in">
            <h3 className="company-tag">{group.company}</h3>
            <div className="projects-grid">
              {group.projects.map((project, i) => (
                <div
                  key={project.title}
                  className="project-card"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-actions">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-icon"
                          title="View Code on GitHub"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      <button
                        className="action-icon"
                        onClick={() => openModal(project)}
                        title="View Full Details"
                      >
                        <Info size={18} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
