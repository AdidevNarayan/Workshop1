import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--color-charcoal)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p
              className="text-5xl md:text-6xl leading-tight mb-2"
              style={{
                fontFamily: "var(--font-family-display)",
                color: "var(--color-ivory)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Adidev
              <span style={{ fontStyle: "italic", fontWeight: 400 }}> Narayan</span>
            </p>
            <motion.div
              className="h-px mx-auto"
              style={{ backgroundColor: "var(--color-accent)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

