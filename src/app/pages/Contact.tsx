import { motion } from "motion/react";
import { Send, Github, Linkedin, MessageSquareHeart, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_gly480q";
const EMAILJS_TEMPLATE_ID = "template_g255iu7";
const EMAILJS_PUBLIC_KEY = "kBPzMoz6A_Z4FU0y3";
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sarahjoo8888@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/sarahjoo8888",
      color: "var(--pastel-purple)",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/sarah-joo-/",
      color: "var(--pastel-blue)",
    },
  ];

  const isSending = status === "sending";

  return (
    <div className="min-h-screen py-8 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-1">
            <MessageSquareHeart className="w-8 h-8" style={{ color: "var(--pastel-purple)" }} />
            <h1
              className="font-[family-name:var(--font-family-display)] gradient-heading"
              style={{ fontSize: "3rem", fontWeight: 700 }}
            >
              Let's Chat!
            </h1>
          </div>
          <p
            className="text-lg text-[var(--foreground)]/70 max-w-md mx-auto"
            style={{ fontWeight: 400 }}
          >
            I'd love to hear from you! Whether it's a project idea, collaboration, or just to say hi.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-xl mb-8 border border-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-[var(--foreground)]"
                style={{ fontWeight: 500 }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                disabled={isSending}
                className="w-full px-5 py-4 rounded-2xl bg-[var(--pastel-bg)] border-2 transition-all outline-none disabled:opacity-50"
                style={{
                  borderColor: focusedField === "name" ? "var(--pastel-purple)" : "transparent",
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-[var(--foreground)]"
                style={{ fontWeight: 500 }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                disabled={isSending}
                className="w-full px-5 py-4 rounded-2xl bg-[var(--pastel-bg)] border-2 transition-all outline-none disabled:opacity-50"
                style={{
                  borderColor: focusedField === "email" ? "var(--pastel-purple)" : "transparent",
                }}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-[var(--foreground)]"
                style={{ fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                disabled={isSending}
                rows={6}
                className="w-full px-5 py-4 rounded-2xl bg-[var(--pastel-bg)] border-2 transition-all outline-none resize-none disabled:opacity-50"
                style={{
                  borderColor: focusedField === "message" ? "var(--pastel-purple)" : "transparent",
                }}
                placeholder="Tell me about your project, idea, or just say hello..."
              />
            </div>

            {/* Status Message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-green-50 text-green-600"
                style={{ fontWeight: 500 }}
              >
                <CheckCircle size={18} />
                Message sent! I'll get back to you soon
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-50 text-red-500"
                style={{ fontWeight: 500 }}
              >
                <AlertCircle size={18} />
                Something went wrong. Please try again!
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={isSending ? {} : { scale: 1.02 }}
              whileTap={isSending ? {} : { scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--pastel-purple)] to-[var(--pastel-pink)] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ fontWeight: 600 }}
            >
              {isSending ? (
                <>
                  <svg
                    className="animate-spin"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p
            className="mb-4 text-[var(--foreground)]/70"
            style={{ fontWeight: 500 }}
          >
            Or find me on:
          </p>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                style={{
                  backgroundColor: `${social.color}20`,
                  color: social.color,
                }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}