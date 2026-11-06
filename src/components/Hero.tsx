import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useRef } from "react";
import { siteConfig, tickerItems } from "../data/siteData";

// Inline social SVGs for crisp rendering without icon bundle issues
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "var(--color-ivory)" }}
    >
      {/* ── Top Editorial Navigation Bar ── */}
      <header className="relative z-20 border-b px-6 md:px-12 py-5" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex items-center justify-between gap-4">
          {/* Brand Monogram & Live Status */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base font-semibold tracking-wider transition-opacity hover:opacity-75"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "var(--color-charcoal)",
                textDecoration: "none",
              }}
            >
              AN<span style={{ color: "var(--color-accent)" }}>.</span>
            </motion.a>

            <span className="hidden sm:inline-block w-px h-4" style={{ backgroundColor: "var(--color-border)" }} />

            {/* Status Pill inspired by Meghan Rose */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border"
              style={{
                backgroundColor: "var(--color-accent-pale)",
                borderColor: "rgba(15, 118, 110, 0.2)",
                color: "var(--color-accent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: "var(--color-accent)" }} />
              <span>1st-Year BTech CSE · Kerala, IN</span>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex gap-5 md:gap-7 list-none m-0 p-0"
            >
              {[
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Playground", href: "#playground" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs md:text-sm tracking-wider uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-family-sans)",
                      color: "var(--color-charcoal-muted)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-charcoal-muted)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* Quick Social Icon Cluster */}
            <div className="hidden lg:flex items-center gap-3 pl-4 border-l" style={{ borderColor: "var(--color-border)" }}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-1.5 text-charcoal-muted hover:text-accent transition-colors"
                style={{ color: "var(--color-charcoal-muted)" }}
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-1.5 text-charcoal-muted hover:text-accent transition-colors"
                style={{ color: "var(--color-charcoal-muted)" }}
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-1.5 text-charcoal-muted hover:text-accent transition-colors"
                style={{ color: "var(--color-charcoal-muted)" }}
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Main Hero Editorial Section ── */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column — Typography & Manifesto */}
          <div className="col-span-12 lg:col-span-7">
            {/* Editorial Metadata Bar */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="w-6 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Portfolio & Archive — 2026
              </span>
              <span className="text-xs text-charcoal-muted">•</span>
              <span
                className="text-xs tracking-wider uppercase"
                style={{ color: "var(--color-charcoal-muted)" }}
              >
                Amal Jyothi College of Engineering
              </span>
            </motion.div>

            {/* Giant Editorial Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="leading-[0.98] mb-6 tracking-tight"
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "clamp(3.4rem, 9.5vw, 8.2rem)",
                fontWeight: 500,
                color: "var(--color-charcoal)",
              }}
            >
              Adidev
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--color-charcoal)",
                }}
              >
                Narayan<span style={{ color: "var(--color-accent)" }}>.</span>
              </span>
            </motion.h1>

            {/* Subheading / Purpose statement */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-2xl font-light mb-6 max-w-xl leading-snug"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "var(--color-charcoal-soft)",
              }}
            >
              {siteConfig.subheading}
            </motion.p>

            {/* Detailed Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base leading-relaxed mb-8 max-w-lg"
              style={{
                fontFamily: "var(--font-family-sans)",
                color: "var(--color-charcoal-muted)",
              }}
            >
              {siteConfig.description}
            </motion.p>

            {/* Editorial Focus Badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {[
                "Software Fundamentals",
                "Smart India Hackathon 2026",
                "Artificial Intelligence",
                "Visual Art & Illustration",
                "Creative Technology",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs tracking-wider uppercase px-3 py-1.5 border transition-all duration-300"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    color: "var(--color-charcoal)",
                    fontFamily: "var(--font-family-sans)",
                    borderRadius: "2px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Call to Actions & Direct Links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "2px",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent-dark)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)")}
              >
                <span>View Selected Work</span>
                <ArrowDown size={14} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs tracking-widest uppercase border transition-all duration-300"
                style={{
                  borderColor: "var(--color-border-dark)",
                  backgroundColor: "transparent",
                  color: "var(--color-charcoal)",
                  textDecoration: "none",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-dark)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-charcoal)";
                }}
              >
                <Mail size={14} />
                <span>Say Hello</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column — Editorial Image Composition (Meghan Rose aesthetic) */}
          <div className="col-span-12 lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Showcase Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-3 border shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "var(--color-border)",
                borderRadius: "3px",
              }}
            >
              {/* Frame Header with index */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b text-xs font-mono" style={{ borderColor: "var(--color-border)" }}>
                <span style={{ color: "var(--color-accent)" }}>PROJECT 01 // SIH 2026</span>
                <span style={{ color: "var(--color-charcoal-muted)" }}>SIH26090</span>
              </div>

              {/* Showcase Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=900&q=80"
                  alt="Market Linkage — Smart India Hackathon 2026"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Badge */}
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 text-xs font-mono backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(20, 20, 19, 0.85)",
                    color: "var(--color-ivory)",
                    borderRadius: "1px",
                  }}
                >
                  Featured: Market Linkage
                </div>
              </div>

              {/* Showcase Card Details */}
              <div className="pt-4 pb-2 px-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-lg font-medium"
                    style={{ fontFamily: "var(--font-family-display)", color: "var(--color-charcoal)" }}
                  >
                    Smart India Hackathon 2026
                  </h3>
                  <a
                    href="#work"
                    className="text-xs uppercase tracking-wider flex items-center gap-1 hover:underline"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Explore <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-charcoal-muted)" }}>
                  Problem statement SIH26090: Designing fair agricultural market linkage solutions for farmers.
                </p>
              </div>
            </motion.div>

            {/* Floating Editorial Stamp Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 p-4 border shadow-md"
              style={{
                backgroundColor: "var(--color-charcoal)",
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: "2px",
                maxWidth: "220px",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-accent-soft)" }} />
                <span className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--color-accent-soft)" }}>
                  Current Academic
                </span>
              </div>
              <p
                className="text-sm font-light leading-snug"
                style={{
                  fontFamily: "var(--font-family-display)",
                  color: "var(--color-ivory)",
                  fontStyle: "italic",
                }}
              >
                "Curious mind. Creative perspective. Building with purpose."
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* ── Meghan Rose Style Continuous Editorial Ticker ── */}
      <div
        className="relative z-10 overflow-hidden border-t border-b py-3"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-ivory-dark)",
        }}
      >
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span
                className="text-xs font-mono tracking-widest uppercase font-medium"
                style={{ color: "var(--color-charcoal-soft)" }}
              >
                {item}
              </span>
              <span className="ml-6 text-xs" style={{ color: "var(--color-accent)" }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
