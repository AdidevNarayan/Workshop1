import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteData";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative px-6 md:px-12 py-12 md:py-16"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Name & Identity */}
        <div>
          <p
            className="text-2xl md:text-3xl mb-2 tracking-tight"
            style={{
              fontFamily: "var(--font-family-display)",
              fontStyle: "italic",
              color: "var(--color-charcoal)",
              fontWeight: 400,
            }}
          >
            Adidev Narayan<span style={{ color: "var(--color-accent)" }}>.</span>
          </p>
          <p
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--color-charcoal-muted)" }}
          >
            {siteConfig.location} — BTech CSE (1st Year) · {new Date().getFullYear()}
          </p>
        </div>

        {/* Center: Clean Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
            {["Work", "About", "Playground", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xs tracking-wider uppercase transition-colors duration-200"
                  style={{
                    color: "var(--color-charcoal-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-family-sans)",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-charcoal-muted)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Social Links with LinkedIn, GitHub, Instagram */}
        <div className="flex gap-4 items-center">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-charcoal-muted hover:text-accent transition-colors"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-charcoal-muted hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-charcoal-muted hover:text-accent transition-colors"
            title="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Legal / Editorial Row */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-10 pt-8"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <p className="text-xs font-mono" style={{ color: "var(--color-charcoal-muted)" }}>
          © {new Date().getFullYear()} Adidev Narayan. Crafted with purpose & curiosity.
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--color-charcoal-muted)" }}>
          Amal Jyothi College of Engineering · Kerala, India
        </p>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 p-3 transition-all duration-200 z-40 shadow-lg cursor-pointer border"
            style={{
              backgroundColor: "var(--color-accent)",
              borderColor: "var(--color-accent)",
              color: "#ffffff",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)";
            }}
          >
            <ArrowUp size={18} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
