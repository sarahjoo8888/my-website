import { motion } from "motion/react";
import { Link } from "react-router";
import { Sparkles, Heart, Star, Cat, Music, Gamepad2, Volleyball, Pizza } from "lucide-react";

export default function Home() {
  const hobbies = [
    {
      icon: <Volleyball className="w-6 h-6" />,
      title: "Volleyball",
      description: "Playing on the court with friends",
      color: "var(--pastel-pink)",
    },
    {
      icon: <Pizza className="w-6 h-6" />,
      title: "Foodie",
      description: "Exploring new cafes and restaurants",
      color: "var(--pastel-purple)",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music",
      description: "Listening to new and old artists alike",
      color: "var(--pastel-blue)",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming",
      description: "De-stressing with some fun games",
      color: "var(--pastel-purple)",
    },
    {
      icon: <Cat className="w-6 h-6" />,
      title: "Cats",
      description: "Adoring my two cats, Mochi and Q-bert",
      color: "var(--pastel-pink)",
    }
  ];

  const floatingElements = [
    { icon: <Star className="w-8 h-8" />, top: "15%", left: "10%", delay: 0, color: "var(--pastel-purple)" },
    { icon: <Heart className="w-8 h-8" />, top: "25%", right: "15%", delay: 0.2, color: "var(--pastel-pink)" },
    { icon: <Heart className="w-8 h-8" />, top: "60%", left: "8%", delay: 0.4, color: "var(--pastel-blue)" },
    { icon: <Star className="w-8 h-8" />, top: "70%", right: "12%", delay: 0.6, color: "var(--pastel-purple)" },
    { icon: <Sparkles className="w-8 h-8" />, top: "40%", right: "8%", delay: 0.3, color: "var(--pastel-pink)" },
    { icon: <Sparkles className="w-8 h-8" />, top: "85%", left: "15%", delay: 0.5, color: "var(--pastel-blue)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 20%, var(--pastel-purple) 0%, transparent 50%),
                         radial-gradient(circle at 70% 60%, var(--pastel-blue) 0%, transparent 50%),
                         radial-gradient(circle at 50% 80%, var(--pastel-pink) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Decorative Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute opacity-60"
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              color: element.color,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.icon}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div
              className="aspect-square rounded-full bg-gradient-to-br from-[var(--pastel-purple)] via-[var(--pastel-blue)] to-[var(--pastel-pink)] p-2 shadow-2xl"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile_photo.jpg"
                  alt="Sarah"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.h1
              className="font-[family-name:var(--font-family-display)] mb-4"
              style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[var(--pastel-purple)] via-[var(--pastel-blue)] to-[var(--pastel-pink)] bg-clip-text text-transparent">
                Hi, I'm Sarah!
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-[var(--foreground)]/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontWeight: 400 }}
            >
              A creative developer passionate about crafting beautiful, intuitive digital experiences. 
              I love transforming ideas into polished products that feel seamless and engaging, 
              blending design and code to build experiences that genuinely connect people with their needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--pastel-purple)] to-[var(--pastel-pink)] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                style={{ fontWeight: 600 }}
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="rounded-3xl p-12 shadow-lg backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, var(--pastel-purple)/10 0%, var(--pastel-blue)/10 100%)`,
              border: "1px solid var(--pastel-purple)/20",
            }}
          >
            <h2
              className="font-[family-name:var(--font-family-display)] mb-6 text-[var(--pastel-purple)]"
              style={{ fontSize: "2.5rem", fontWeight: 600 }}
            >
              About Me
            </h2>
            <p
              className="text-lg text-[var(--foreground)]/80 leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              I’m currently in my fourth year at the University of Waterloo studying Computer Science with an AI specialization, 
              where I’ve developed a passion for building products that are both visually polished and genuinely useful.
              I’m someone who loves creating, learning, and refining the little details that make products feel thoughtful, intuitive, and memorable.
            </p>
            <p
              className="text-lg text-[var(--foreground)]/80 leading-relaxed"
              style={{ fontWeight: 400, marginTop: "1rem" }}
            >
              Outside of developing, I spend a lot of my time playing volleyball, staying active at the gym, discovering new food spots, 
              listening to music, and unwinding with games or my cats, Mochi and Q-bert.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-family-display)] text-center mb-12"
            style={{ fontSize: "2.5rem", fontWeight: 600 }}
          >
            <span className="bg-gradient-to-r from-[var(--pastel-purple)] to-[var(--pastel-pink)] bg-clip-text text-transparent">
              Things I Love
            </span>
          </motion.h2>

          <div className="overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex gap-6 min-w-max md:grid md:grid-cols-5 md:min-w-0">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all min-w-[250px] md:min-w-0"
                  style={{
                    borderLeft: `4px solid ${hobby.color}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${hobby.color}20` }}
                  >
                    <div style={{ color: hobby.color }}>{hobby.icon}</div>
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontWeight: 600, fontSize: "1.125rem" }}
                  >
                    {hobby.title}
                  </h3>
                  <p
                    className="text-[var(--foreground)]/70 text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {hobby.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}