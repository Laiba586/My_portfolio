import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPython, FaReact, FaDatabase, FaGitAlt, FaDocker, FaServer, FaKey, FaCode } from "react-icons/fa";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Django Web Developer", "Python Backend Specialist", "Django Rest APIs Expert"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = roles[wordIndex];
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) setIsDeleting(true);
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 35 : 60);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section className="relative flex flex-col justify-center min-h-screen px-10 md:px-24 overflow-hidden" style={{ paddingTop: '9rem' }}>
      
      {/* LEFT SIDE: UNTOUCHED */}
      <div className="z-10 max-w-4xl">
        <p className="uppercase text-white text-[1.4rem] font-bold tracking-[0.25em] mb-6">Hi There, I'm</p>
        <h1 className="text-[clamp(4rem,8vw,8rem)] font-black text-[#3dd1e7] leading-none mb-6 whitespace-nowrap" style={{ textShadow: "0 0 50px rgba(61,209,231,0.6)" }}>
          Laiba Aslam
        </h1>
        {/* Cursor removed here */}
        <div className="text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-white mb-10 min-h-[3.5rem] flex items-center">
          {displayedText}
        </div>
        <div className="flex flex-wrap gap-4 mb-14">
          <button onClick={() => scrollToSection("projects")} className="px-10 py-4 rounded-xl font-bold text-gray-900 bg-gradient-to-r from-[#3dd1e7] to-[#2aa9b0]">View My Work →</button>
          <button onClick={() => scrollToSection("contact")} className="px-10 py-4 rounded-xl font-bold text-[#3dd1e7] border-2 border-[#3dd1e7]">Hire Me</button>
        </div>
      </div>

      {/* RIGHT SIDE: ORB & ROTATING ICONS */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden lg:flex items-center justify-center pointer-events-none">
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          
          <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-[#3dd1e7]/50 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(61,209,231,0.4)]" />
          
          <motion.div 
            className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#3dd1e7]/30 shadow-[0_0_15px_#3dd1e7]"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <motion.div 
            className="absolute w-[300px] h-[300px] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[FaPython, FaCode, FaReact, FaServer, FaDatabase, FaDocker, FaGitAlt, FaKey].map((Icon, index) => (
              <div
                key={index}
                className="absolute pointer-events-auto"
                style={{ transform: `rotate(${(index / 8) * 360}deg) translate(150px) rotate(-${(index / 8) * 360}deg)` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#0a192f]/80 border border-[#3dd1e7]/50 flex items-center justify-center text-[#3dd1e7] shadow-[0_0_15px_rgba(61,209,231,0.3)] backdrop-blur-sm cursor-pointer hover:border-white transition-colors">
                  <Icon size={22} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}