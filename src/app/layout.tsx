import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-src",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://prejanneupane.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prejan Neupane — Django & Full-stack Developer",
    template: "%s | Prejan Neupane",
  },
  description:
    "Portfolio of Prejan Neupane, a Django and full-stack developer from Nepal. Building scalable APIs, backend systems, and modern web applications.",
  keywords: [
    "Prejan Neupane",
    "Django Developer",
    "Full-stack Developer",
    "Python Developer",
    "Nepal",
    "Web Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Prejan Neupane", url: siteUrl }],
  creator: "Prejan Neupane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prejan Neupane",
    title: "Prejan Neupane — Django & Full-stack Developer",
    description:
      "Django developer from Nepal building scalable backend systems and clean web interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prejan Neupane — Django & Full-stack Developer",
    description:
      "Django developer from Nepal building scalable backend systems and clean web interfaces.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prejan Neupane",
    url: siteUrl,
    jobTitle: "Django & Full-stack Developer",
    email: "prejan@prejanneupane.com.np",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Patan Multiple Campus, Tribhuvan University",
    },
    knowsAbout: [
      "Django",
      "Python",
      "React",
      "Next.js",
      "PostgreSQL",
      "REST APIs",
      "Machine Learning",
    ],
    sameAs: [
      "https://github.com/prejanNeu",
      "https://www.linkedin.com/in/prejan-neupane-461b01263/",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || system;
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {}
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
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
