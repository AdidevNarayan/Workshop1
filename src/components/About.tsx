import { motion } from "framer-motion";
import { siteConfig, aboutContent, timeline } from "../data/siteData";
import { MapPin, GraduationCap, Award, Compass } from "lucide-react";

// ── Timeline Component (Meghan Rose inspired structured history) ──
function Timeline() {
  const typeTagStyle: Record<string, { bg: string; color: string; border: string }> = {
    Education: { bg: "var(--color-accent-pale)", color: "var(--color-accent)", border: "rgba(15,118,110,0.3)" },
    Hackathon: { bg: "#eef8f6", color: "#0f766e", border: "rgba(15,118,110,0.35)" },
    Skill: { bg: "#f0f4f8", color: "#2563eb", border: "rgba(37,99,235,0.2)" },
    Creative: { bg: "#fdf4ff", color: "#a21caf", border: "rgba(162,28,175,0.2)" },
  };

  return (
    <div className="relative">
      {/* Vertical Spine */}
      <div
        className="absolute left-0 top-3 bottom-3 w-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      <div className="space-y-10 pl-7 md:pl-9">
        {timeline.map((entry, i) => {
          const style = typeTagStyle[entry.type] ?? typeTagStyle.Education;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Dot on spine */}
              <span
                className="absolute -left-7 md:-left-9 top-2 w-2.5 h-2.5 rounded-full border-2 transition-transform duration-200 group-hover:scale-125"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "var(--color-accent)",
                  transform: "translateX(calc(-50% + 0.5px))",
                }}
              />

              {/* Header Badges */}
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <span
                  className="text-xs font-mono tracking-wider uppercase px-2.5 py-0.5"
                  style={{
                    backgroundColor: "var(--color-ivory-dark)",
                    color: "var(--color-charcoal-soft)",
                    borderRadius: "1px",
                  }}
                >
                  {entry.period}
                </span>

                <span
                  className="text-xs font-mono tracking-wider uppercase px-2 py-0.5 border"
                  style={{
                    backgroundColor: style.bg,
                    color: style.color,
                    borderColor: style.border,
                    borderRadius: "1px",
                  }}
                >
                  {entry.type}
                </span>

                <span className="text-xs font-mono text-charcoal-muted">
                  {entry.institutionOrContext}
                </span>
              </div>

              {/* Title */}
              <h4
                className="text-base md:text-lg mb-1.5 font-medium leading-snug"
                style={{
                  fontFamily: "var(--font-family-display)",
                  color: "var(--color-charcoal)",
                }}
              >
                {entry.title}
              </h4>

              {/* Detail */}
              <p
                className="text-sm leading-relaxed max-w-xl"
                style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
              >
                {entry.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main About Section ──
export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* ── Section Header ── */}
      <div className="mb-14 md:mb-18">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px" style={{ backgroundColor: "var(--color-accent)" }} />
          <span
            className="text-xs font-mono tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            About & Perspective
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="leading-[1.08] tracking-tight max-w-3xl"
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
            fontWeight: 500,
            color: "var(--color-charcoal)",
          }}
        >
          Technology meets
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>a creative eye.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg font-light mt-4 max-w-xl"
          style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
        >
          {aboutContent.subhead}
        </motion.p>
      </div>

      {/* ── Main Grid: Portrait Card + Editorial Story ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
        
        {/* Left Column: Portrait & Identity Card */}
        <div className="col-span-1 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-3 border shadow-sm"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "var(--color-border)",
              borderRadius: "3px",
            }}
          >
            {/* Header Stamp */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b font-mono text-[11px]" style={{ borderColor: "var(--color-border)" }}>
              <span style={{ color: "var(--color-accent)" }}>PORTRAIT ARCHIVE</span>
              <span style={{ color: "var(--color-charcoal-muted)" }}>STUDENT ID</span>
            </div>

            {/* Photo Container */}
            <div
              className="relative overflow-hidden aspect-[3/4] bg-stone-100 flex flex-col items-center justify-center text-center p-6"
              style={{ borderRadius: "2px" }}
            >
              <svg width="72" height="72" viewBox="0 0 80 80" fill="none" style={{ opacity: 0.2 }}>
                <circle cx="40" cy="27" r="16" fill="var(--color-charcoal)" />
                <ellipse cx="40" cy="68" rx="28" ry="18" fill="var(--color-charcoal)" />
              </svg>
              <p
                className="text-xs font-mono tracking-widest uppercase mt-4 mb-1"
                style={{ color: "var(--color-charcoal)" }}
              >
                Adidev Narayan
              </p>
              <p
                className="text-[11px] leading-relaxed max-w-[180px]"
                style={{ color: "var(--color-charcoal-muted)" }}
              >
                Personal photograph placeholder. Easily replace with photo in /public.
              </p>
            </div>

            {/* Quick Context Details below Photo */}
            <div className="pt-3 px-1 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <MapPin size={13} style={{ color: "var(--color-accent)" }} />
                <span className="font-medium text-charcoal">{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <GraduationCap size={13} style={{ color: "var(--color-accent)" }} />
                <span className="text-charcoal-muted leading-tight">
                  {siteConfig.degree} · 1st Year
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Award size={13} style={{ color: "var(--color-accent)" }} />
                <span className="text-charcoal-muted leading-tight">
                  Smart India Hackathon 2026 (SIH26090)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Personality Traits Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {aboutContent.personality.map((trait) => (
              <span
                key={trait}
                className="text-xs font-mono tracking-wider px-3 py-1 border"
                style={{
                  backgroundColor: "var(--color-ivory-dark)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-charcoal-soft)",
                  borderRadius: "2px",
                }}
              >
                #{trait.toLowerCase()}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Editorial Paragraphs & Structured Facts */}
        <div className="col-span-1 md:col-span-8 flex flex-col justify-between">
          <div className="space-y-5 mb-10">
            {aboutContent.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm md:text-base leading-[1.85]"
                style={{ color: "var(--color-charcoal-soft)", fontFamily: "var(--font-family-sans)" }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Structured Facts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 border"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "var(--color-border)",
              borderRadius: "3px",
            }}
          >
            {aboutContent.facts.map((fact) => (
              <div key={fact.label} className="border-l pl-3" style={{ borderColor: "var(--color-accent-pale)" }}>
                <p
                  className="text-[11px] font-mono tracking-wider uppercase mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {fact.label}
                </p>
                <p
                  className="text-xs md:text-sm font-medium leading-snug"
                  style={{ color: "var(--color-charcoal)" }}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ── Learning Journey Timeline Section ── */}
      <div
        className="pt-16 md:pt-20"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase" style={{ color: "var(--color-accent)" }}>
              <Compass size={14} />
              <span>Academic & Problem-Solving Path</span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-medium leading-tight"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "var(--color-charcoal)",
              }}
            >
              Learning Journey & Milestones
            </h3>
          </div>

          <p className="text-xs font-mono text-charcoal-muted">
            Continuously updated · Class of 2028
          </p>
        </div>

        <div className="max-w-3xl">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
