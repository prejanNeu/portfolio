import type { Metadata } from "next";
import { Outfit, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prejan Neupane | Django & Full-stack Developer",
  description: "Personal portfolio of Prejan Neupane — CS graduate & Django developer from Nepal. Crafting clean, scalable backend systems and beautiful frontend designs.",
  keywords: ["Prejan Neupane", "Django Developer", "Fullstack Developer", "Nepal", "BSc CSIT", "Web Development", "Python Developer"],
  authors: [{ name: "Prejan Neupane" }],
  openGraph: {
    title: "Prejan Neupane | Django & Full-stack Developer",
    description: "Personal portfolio of Prejan Neupane — CS graduate & Django developer from Nepal.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prejan Neupane",
    "url": "https://prejanneupane.com.np",
    "jobTitle": "Django Developer & Full-stack Architect",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Patan Multiple Campus, Tribhuvan University"
    },
    "knowsAbout": ["Django", "Python", "React", "Next.js", "Machine Learning", "Full-stack Web Development"],
    "sameAs": [
      "https://github.com/prejanNeu",
      "https://www.linkedin.com/in/prejan-neupane-461b01263/"
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${playfair.variable} ${firaCode.variable}`}
    >
      <head>
        {/* Anti-FOUC Blocking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const activeTheme = savedTheme || systemTheme;
                  document.documentElement.setAttribute('data-theme', activeTheme);
                  document.documentElement.style.colorScheme = activeTheme;
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

