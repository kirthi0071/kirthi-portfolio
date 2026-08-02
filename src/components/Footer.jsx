export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-copyright">
            © {new Date().getFullYear()} <strong>Kirthi Kumar L</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
