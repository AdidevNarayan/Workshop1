import { motion } from "framer-motion";
import { skillGroups } from "../data/siteData";
import { Terminal, Lightbulb, Code2 } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-charcoal)",
      }}
    >
      {/* Header */}
      <div className="mb-14 md:mb-18">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px" style={{ backgroundColor: "var(--color-accent-soft)" }} />
          <span
            className="text-xs font-mono tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--color-accent-soft)" }}
          >
            Toolkit & Competencies
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="leading-[1.08] tracking-tight max-w-xl"
          style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            fontWeight: 500,
            color: "var(--color-ivory)",
          }}
        >
          What I know,
          <br />
          <span style={{ fontStyle: "italic", color: "var(--color-accent-soft)", fontWeight: 400 }}>
            what I'm exploring.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 text-sm md:text-base leading-relaxed max-w-xl"
          style={{ color: "rgba(251,249,245,0.6)", fontFamily: "var(--font-family-sans)" }}
        >
          An honest, transparent picture of my technical toolkit as a 1st-year student.
          Distinguishing active coursework & coding practice from emerging creative interests.
        </motion.p>
      </div>

      {/* 4-Column Skill Groups Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 border flex flex-col justify-between"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderColor: "rgba(255, 255, 255, 0.08)",
              borderRadius: "3px",
            }}
          >
            <div>
              {/* Group Header */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                <h3
                  className="text-xs font-mono tracking-wider uppercase font-medium"
                  style={{
                    color: group.status === "learning" ? "var(--color-accent-soft)" : "#ffffff",
                  }}
                >
                  {group.name}
                </h3>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor:
                      group.status === "learning" ? "rgba(20, 184, 166, 0.15)" : "rgba(255, 255, 255, 0.08)",
                    color:
                      group.status === "learning" ? "var(--color-accent-soft)" : "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {group.status === "learning" ? "Active" : "Core"}
                </span>
              </div>

              {/* Skills List */}
              <ul className="space-y-3.5 list-none p-0 m-0">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: groupIndex * 0.08 + skillIndex * 0.05,
                    }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{
                        backgroundColor:
                          group.status === "learning"
                            ? "var(--color-accent-soft)"
                            : "rgba(255, 255, 255, 0.3)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-family-sans)",
                        color:
                          group.status === "learning"
                            ? "rgba(255, 255, 255, 0.95)"
                            : "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Subtle Indicator */}
            <div className="pt-6 mt-6 border-t flex items-center gap-2 text-[11px] font-mono" style={{ borderColor: "rgba(255, 255, 255, 0.06)", color: "rgba(255, 255, 255, 0.35)" }}>
              {group.status === "learning" ? (
                <>
                  <Terminal size={12} style={{ color: "var(--color-accent-soft)" }} />
                  <span>C / Fundamentals / Lab</span>
                </>
              ) : (
                <>
                  <Code2 size={12} />
                  <span>Foundational Experience</span>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial Curiosity Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-14 p-6 border flex flex-col md:flex-row md:items-center justify-between gap-6"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "3px",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full" style={{ backgroundColor: "rgba(20, 184, 166, 0.15)" }}>
            <Lightbulb size={18} style={{ color: "var(--color-accent-soft)" }} />
          </div>
          <div>
            <h4 className="text-sm font-medium text-white">Emerging Horizons</h4>
            <p className="text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
              Areas of active curiosity, independent study and hackathon exploration
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Artificial Intelligence",
            "Human-Computer Interaction",
            "Agricultural Tech (SIH26090)",
            "Web Standards",
            "Startups & Products",
          ].map((item) => (
            <span
              key={item}
              className="text-xs font-mono px-3 py-1 border"
              style={{
                borderColor: "rgba(255, 255, 255, 0.12)",
                color: "rgba(255, 255, 255, 0.75)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderRadius: "2px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
