import { motion } from "framer-motion";
import { playgroundItems, type PlaygroundItem } from "../data/siteData";
import { useState } from "react";
import { Palette } from "lucide-react";

function PlaygroundCard({
  item,
  index,
}: {
  item: PlaygroundItem;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-default border group"
      style={{
        backgroundColor: "#ffffff",
        borderColor: hovered ? "var(--color-accent)" : "var(--color-border)",
        borderRadius: "3px",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Image with dynamic aspect ratio */}
      <div
        className="overflow-hidden relative bg-stone-100"
        style={{ aspectRatio: index % 3 === 0 ? "1/1" : index % 3 === 1 ? "4/3" : "3/4" }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Top-Right Badge */}
        <div
          className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase backdrop-blur-md"
          style={{
            backgroundColor: "rgba(20, 20, 19, 0.75)",
            color: "#ffffff",
            borderRadius: "1px",
          }}
        >
          {item.type}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-3.5 border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
          <span style={{ color: "var(--color-accent)" }}>ARCHIVE #{index + 1}</span>
          <span style={{ color: "var(--color-charcoal-muted)" }}>{item.date}</span>
        </div>
        <h4
          className="text-sm font-medium leading-snug mb-1"
          style={{ fontFamily: "var(--font-family-display)", color: "var(--color-charcoal)" }}
        >
          {item.title}
        </h4>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Playground() {
  return (
    <section
      id="playground"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-ivory-dark)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div className="max-w-2xl">
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
              Creative Playground & Visual Archive
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="leading-[1.08] tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
            }}
          >
            Sketches, studies
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>& creative iterations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm md:text-base leading-relaxed"
            style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
          >
            An open visual archive of illustrations, early sketches, coding explorations, and aesthetics.
            A space to test visual ideas freely without waiting for them to be final production apps.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div
            className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase px-4 py-2 border bg-white"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-accent)",
              borderRadius: "2px",
            }}
          >
            <Palette size={14} />
            <span>Visual Diary</span>
          </div>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {playgroundItems.map((item, index) => (
          <PlaygroundCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 text-xs font-mono text-center tracking-wider uppercase"
        style={{ color: "var(--color-charcoal-muted)" }}
      >
        Replace sample images anytime in <code className="font-semibold text-charcoal">src/data/siteData.ts</code>
      </motion.p>
    </section>
  );
}
