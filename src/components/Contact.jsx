import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            <span className="accent-dot" />
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Open to opportunities and collaborations — feel free to reach out!
          </p>
        </div>

        <div className="contact-grid fade-in">
          <a
            href="mailto:kirthikumar077@gmail.com"
            className="contact-item"
            id="contact-email-link"
          >
            <span className="contact-icon">
              <Mail size={18} strokeWidth={2} />
            </span>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">kirthikumar077@gmail.com</span>
            </div>
          </a>

          <a href="tel:+919344160867" className="contact-item" id="contact-phone-link">
            <span className="contact-icon">
              <Phone size={18} strokeWidth={2} />
            </span>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 93441 60867</span>
            </div>
          </a>

          <div className="contact-item">
            <span className="contact-icon">
              <MapPin size={18} strokeWidth={2} />
            </span>
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <span className="contact-value">Bengaluru, KA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
