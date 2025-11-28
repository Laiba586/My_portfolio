import { motion } from "framer-motion";

export default function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-20 bg-slate-900 text-center overflow-hidden">
      {/* Main Content */}
      <motion.div
        className="z-10 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-white">I'm </span>
          <span className="text-[#3dd1e7]">Laiba Aslam</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">
          Django Backend Developer
        </h2>

        <p className="text-slate-400 text-lg mb-8">
          I design, develop, and maintain dynamic backend systems and interactive web applications
          with a passion for clean code and problem-solving.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-xl bg-[#3dd1e7] text-white font-semibold shadow-md hover:scale-105 transition"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-xl border-2 border-[#3dd1e7] text-[#3dd1e7] font-semibold hover:bg-[#3dd1e7] hover:text-white transition"
          >
            Hire Me
          </button>
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(61,209,231,0.25)_0%,transparent_70%)] animate-pulse"></div>
      </div>
    </section>
  );
}
