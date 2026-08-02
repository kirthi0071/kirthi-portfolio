import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#hero" className="navbar-logo">
            Kirthi<span>.</span>
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              id="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              id="hamburger-btn"
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
