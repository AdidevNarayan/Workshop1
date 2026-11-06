import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { projects, type Project } from "../data/siteData";

const CATEGORIES = ["All", "Development", "Creative Art", "Design", "Experiment"] as const;

type Category = (typeof CATEGORIES)[number];

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: (p: Project) => void;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer group relative flex flex-col justify-between p-4 md:p-6 border transition-all duration-300"
      style={{
        backgroundColor: "#ffffff",
        borderColor: hovered ? "var(--color-accent)" : "var(--color-border)",
        borderRadius: "3px",
        boxShadow: hovered ? "0 12px 30px -10px rgba(15, 118, 110, 0.12)" : "none",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      aria-label={`View project: ${project.title}`}
    >
      <div>
        {/* Top Meta Line: Index + Category + Year */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b font-mono text-xs" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "var(--color-accent)" }}>
              {project.index} //
            </span>
            <span className="uppercase tracking-wider" style={{ color: "var(--color-charcoal-muted)" }}>
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.problemId && (
              <span
                className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded"
                style={{
                  backgroundColor: "var(--color-accent-pale)",
                  color: "var(--color-accent)",
                }}
              >
                {project.problemId}
              </span>
            )}
            <span style={{ color: "var(--color-charcoal-muted)" }}>{project.year}</span>
          </div>
        </div>

        {/* Project Thumbnail Image */}
        <div className="overflow-hidden mb-5 aspect-[16/10] bg-stone-100 rounded-sm relative">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {project.status && (
            <div
              className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase backdrop-blur-md"
              style={{
                backgroundColor: "rgba(20, 20, 19, 0.8)",
                color: "#ffffff",
                borderRadius: "1px",
              }}
            >
              {project.status}
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl mb-2.5 leading-snug transition-colors duration-200"
          style={{
            fontFamily: "var(--font-family-display)",
            color: hovered ? "var(--color-accent)" : "var(--color-charcoal)",
            fontWeight: 500,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Footer: Tags & Arrow */}
      <div className="pt-4 border-t flex items-center justify-between gap-4" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded"
              style={{
                backgroundColor: "var(--color-ivory-dark)",
                color: "var(--color-charcoal-soft)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 text-xs font-mono tracking-wider uppercase font-medium flex-shrink-0"
          style={{ color: "var(--color-accent)" }}
        >
          <span>View</span>
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.article>
  );
}

function ProjectOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ backgroundColor: "rgba(20,20,19,0.78)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <motion.div
          key="overlay-panel"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[92vh] overflow-y-auto border shadow-2xl relative"
          style={{
            backgroundColor: "var(--color-ivory)",
            borderColor: "var(--color-border)",
            borderRadius: "4px",
          }}
        >
          {/* Header Bar */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-20 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(251, 249, 245, 0.95)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="font-bold" style={{ color: "var(--color-accent)" }}>
                {project.index} //
              </span>
              <span className="uppercase tracking-wider" style={{ color: "var(--color-charcoal-muted)" }}>
                {project.category}
              </span>
              {project.problemId && (
                <span
                  className="px-2 py-0.5 text-[10px] font-bold rounded"
                  style={{
                    backgroundColor: "var(--color-accent-pale)",
                    color: "var(--color-accent)",
                  }}
                >
                  {project.problemId}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full transition-colors hover:bg-stone-200"
              aria-label="Close dialog"
            >
              <X size={18} strokeWidth={2} style={{ color: "var(--color-charcoal)" }} />
            </button>
          </div>

          <div className="grid md:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="md:col-span-5 bg-stone-100 overflow-hidden relative">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover max-h-[460px] md:max-h-none"
              />
              <div
                className="absolute bottom-4 left-4 right-4 p-3 backdrop-blur-md border text-xs"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(0,0,0,0.08)",
                  borderRadius: "2px",
                }}
              >
                <div className="font-mono text-[10px] uppercase font-bold" style={{ color: "var(--color-accent)" }}>
                  Verified Student Entry
                </div>
                <div className="text-charcoal font-medium mt-0.5">
                  Adidev Narayan · Amal Jyothi College of Eng.
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span
                  className="text-xs font-mono uppercase tracking-widest block mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  Year: {project.year}
                </span>

                <h2
                  className="text-2xl md:text-3xl mb-4 leading-tight font-medium"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  className="text-sm leading-relaxed mb-6 whitespace-pre-line"
                  style={{ color: "var(--color-charcoal-soft)", fontFamily: "var(--font-family-sans)" }}
                >
                  {project.longDescription}
                </p>

                {/* Structured Metadata Box */}
                {(project.status || project.teamSize || project.role || project.problemId) && (
                  <div
                    className="p-4 border mb-6 space-y-2.5"
                    style={{
                      backgroundColor: "var(--color-ivory-dark)",
                      borderColor: "var(--color-border)",
                      borderRadius: "2px",
                    }}
                  >
                    {project.status && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase text-charcoal-muted">Status</span>
                        <span className="font-medium text-charcoal">{project.status}</span>
                      </div>
                    )}
                    {project.problemId && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase text-charcoal-muted">Problem Statement</span>
                        <span className="font-mono font-bold" style={{ color: "var(--color-accent)" }}>
                          {project.problemId} (Market Linkage)
                        </span>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase text-charcoal-muted">Team Context</span>
                        <span className="font-medium text-charcoal">{project.teamSize}</span>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase text-charcoal-muted">Role</span>
                        <span className="font-medium text-charcoal">{project.role}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 border"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "#ffffff",
                        color: "var(--color-charcoal-muted)",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div
                className="pt-5 border-t text-xs flex items-center justify-between gap-2"
                style={{
                  borderColor: "var(--color-border)",
                  fontFamily: "var(--font-family-sans)",
                }}
              >
                <div className="flex items-center gap-2 text-charcoal-muted">
                  <Sparkles size={14} style={{ color: "var(--color-accent)" }} />
                  <span>Student & Learning Archive</span>
                </div>

                {project.linkUrl ? (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium underline uppercase tracking-wider"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <span>{project.linkLabel ?? "View Project"}</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-charcoal-muted font-mono text-[11px]">
                    Editable in siteData.ts
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
        <div>
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
              Selected Work & Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="leading-[1.08] tracking-tight"
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
            }}
          >
            Things I've been
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>working on.</span>
          </motion.h2>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-200"
              style={{
                borderColor: activeCategory === cat ? "var(--color-accent)" : "var(--color-border)",
                backgroundColor: activeCategory === cat ? "var(--color-accent)" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "var(--color-charcoal-muted)",
                fontFamily: "var(--font-family-sans)",
                cursor: "pointer",
                borderRadius: "2px",
                fontWeight: activeCategory === cat ? 500 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid: 2 columns on desktop for editorial breathing room */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
            index={index}
          />
        ))}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
