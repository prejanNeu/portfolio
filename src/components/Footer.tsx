export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          © {currentYear} Prejan Neupane. Crafted with care in Nepal.
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/prejanNeu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prejan-neupane-461b01263/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            LinkedIn
          </a>
          <a href="mailto:prejan@prejanneupane.com.np" className="footer-social">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
