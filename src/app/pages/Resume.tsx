import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen py-6 px-6">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, var(--pastel-purple) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, var(--pastel-pink) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8" style={{ color: "var(--pastel-purple)" }} />
            <h1
              className="font-[family-name:var(--font-family-display)] bg-gradient-to-r from-[var(--pastel-purple)] via-[var(--pastel-blue)] to-[var(--pastel-pink)] bg-clip-text text-transparent"
              style={{ fontSize: "3rem", fontWeight: 700 }}
            >
              Resume
            </h1>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            border: "2px solid",
            borderColor: "color-mix(in srgb, var(--pastel-purple) 30%, transparent)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full border-0"
            style={{ height: "121vh", display: "block" }}
          />
        </motion.div>
      </div>
    </div>
  );
}