export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} Prejan Neupane. Built in Kathmandu, Nepal.
        </p>
        <ul className="footer-links" role="list">
          <li>
            <a
              href="https://github.com/prejanNeu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prejan-neupane-461b01263/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:prejan@prejanneupane.com.np">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
