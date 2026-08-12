"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getLinkUrl = (item: { hash?: string; path?: string }) => {
    if (item.path) return item.path;
    if (pathname === "/") return item.hash || "/";
    return `/${item.hash}`;
  };

  return (
    <>
      <header className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label="Prejan Neupane — Home">
            Prejan Neupane
          </Link>

          <div className="nav-right">
            <ul className="nav-links" role="list">
              {navLinks.map((item) => {
                const href = getLinkUrl(item);
                const isActive = item.path
                  ? pathname.startsWith(item.path)
                  : false;
                return (
                  <li key={item.name}>
                    <Link href={href} aria-current={isActive ? "page" : undefined}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="nav-actions">
              <ThemeToggle />
              <a href="mailto:prejan@prejanneupane.com.np" className="btn btn-primary">
                Hire me
              </a>
            </div>
          </div>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-menu-links" role="list">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link href={getLinkUrl(item)} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          <ThemeToggle />
          <a
            href="mailto:prejan@prejanneupane.com.np"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Hire me
          </a>
        </div>
      </nav>
    </>
  );
}
