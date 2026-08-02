import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-area">
            <h2>{project.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <span className="modal-section-title">Detailed Overview</span>
            <div className="modal-details">
              {project.details.map((detail, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-dot" />
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <span className="modal-section-title">Technologies Used</span>
            <div className="modal-tech-grid">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
