"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Journey", hash: "#education" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", hash: "#contact" },
  ];

  const getLinkUrl = (item: { name: string; hash?: string; path?: string }) => {
    if (item.path) return item.path;
    if (pathname === "/") return item.hash || "/";
    return `/${item.hash}`;
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <Link href="/" className="logo">
          P<span>.</span>Neupane
        </Link>

        {/* Desktop links */}
        <div className="nav-right">
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={getLinkUrl(item)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-divider" />
          <ThemeToggle />
          <a
            href="mailto:prejan@prejanneupane.com.np"
            className="nav-cta btn-hire"
          >
            Hire Me ↗
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-inner">
          <ul className="drawer-links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link href={getLinkUrl(item)} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="drawer-actions">
            <ThemeToggle />
            <a
              href="mailto:prejan@prejanneupane.com.np"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
            >
              Hire Me ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
