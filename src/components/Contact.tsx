import { motion } from "framer-motion";
import { Mail, CheckCheck, Copy, ArrowUpRight, Send } from "lucide-react";
import { useState, useRef } from "react";
import { siteConfig } from "../data/siteData";

// Inline SVG icons for crisp styling
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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert(`Email: ${siteConfig.email}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sent");
    setTimeout(() => setFormStatus("idle"), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-ivory)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-6 flex flex-col justify-between">
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
                Initiate Conversation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="leading-[1.08] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
                fontWeight: 500,
                color: "var(--color-charcoal)",
              }}
            >
              Have something
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>interesting in mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm md:text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--color-charcoal-muted)", fontFamily: "var(--font-family-sans)" }}
            >
              Whether it's discussing collaborative student projects, hackathons, software development,
              or creative visual work — my inbox is always open.
            </motion.p>

            {/* Click-to-Copy Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-5 border mb-8 relative transition-all"
              style={{
                backgroundColor: "#ffffff",
                borderColor: copied ? "var(--color-accent)" : "var(--color-border)",
                borderRadius: "3px",
              }}
            >
              <span className="text-[10px] font-mono tracking-widest uppercase block mb-1 text-charcoal-muted">
                Direct Email (Click to copy)
              </span>

              <button
                onClick={copyEmail}
                className="group flex items-center justify-between w-full text-left cursor-pointer border-none bg-transparent p-0"
                aria-label="Copy email address"
              >
                <span
                  className="text-lg md:text-2xl font-medium tracking-tight transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: copied ? "var(--color-accent)" : "var(--color-charcoal)",
                  }}
                >
                  {siteConfig.email}
                </span>

                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors"
                  style={{
                    backgroundColor: copied ? "var(--color-accent-pale)" : "var(--color-ivory-dark)",
                    color: copied ? "var(--color-accent)" : "var(--color-charcoal-muted)",
                  }}
                >
                  {copied ? (
                    <>
                      <CheckCheck size={14} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </button>
            </motion.div>

            {/* Verified Social Networks Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
            >
              {[
                {
                  label: "GitHub",
                  handle: "@AdidevNarayan",
                  href: siteConfig.github,
                  icon: <GithubIcon size={16} />,
                },
                {
                  label: "LinkedIn",
                  handle: "adidev-narayan",
                  href: siteConfig.linkedin,
                  icon: <LinkedinIcon size={16} />,
                },
                {
                  label: "Instagram",
                  handle: "@4ddiiiiii",
                  href: siteConfig.instagram,
                  icon: <InstagramIcon size={16} />,
                },
                {
                  label: "Email",
                  handle: "adidev44445",
                  href: `mailto:${siteConfig.email}`,
                  icon: <Mail size={16} />,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border flex flex-col justify-between transition-all duration-200 group"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "var(--color-border)",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent-pale)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: "var(--color-charcoal)" }}>{item.icon}</span>
                    <ArrowUpRight size={13} className="text-charcoal-muted group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block text-charcoal">{item.label}</span>
                    <span className="text-[10px] font-mono text-charcoal-muted truncate block">{item.handle}</span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          <p className="text-xs font-mono text-charcoal-muted mt-4">
            Based in {siteConfig.location} · {siteConfig.institution}
          </p>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div
            className="p-6 md:p-8 border shadow-sm"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "var(--color-border)",
              borderRadius: "3px",
            }}
          >
            <div className="flex items-center justify-between pb-3 mb-6 border-b" style={{ borderColor: "var(--color-border)" }}>
              <span className="text-xs font-mono tracking-widest uppercase font-medium" style={{ color: "var(--color-accent)" }}>
                Drop a Message
              </span>
              <span className="text-xs font-mono text-charcoal-muted">
                Replies within 24h
              </span>
            </div>

            {formStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-14 text-center flex flex-col items-center justify-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: "var(--color-accent-pale)", color: "var(--color-accent)" }}
                >
                  <CheckCheck size={24} />
                </div>
                <h3
                  className="text-xl font-medium"
                  style={{ fontFamily: "var(--font-family-display)", color: "var(--color-charcoal)" }}
                >
                  Message Received!
                </h3>
                <p className="text-xs text-charcoal-muted max-w-xs">
                  Thank you for reaching out. You can also contact me directly at {siteConfig.email}.
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono tracking-wider uppercase mb-1.5 text-charcoal-muted"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                    style={{
                      backgroundColor: "var(--color-ivory)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-charcoal)",
                      borderRadius: "2px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono tracking-wider uppercase mb-1.5 text-charcoal-muted"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. jane@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                    style={{
                      backgroundColor: "var(--color-ivory)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-charcoal)",
                      borderRadius: "2px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono tracking-wider uppercase mb-1.5 text-charcoal-muted"
                  >
                    Message / Collaboration Inquiry
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about what you're working on or want to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm border outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: "var(--color-ivory)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-charcoal)",
                      borderRadius: "2px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer border-none font-semibold text-white"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent-dark)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)")}
                >
                  <Send size={13} />
                  <span>Send Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
