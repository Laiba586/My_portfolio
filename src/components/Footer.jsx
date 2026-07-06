import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-24 pb-10">
      <div className="container-max">
        {/* Elegant Divider */}
        <div className="mb-16 h-px bg-gradient-to-r from-transparent via-[#3dd1e7]/40 to-transparent shadow-[0_0_20px_rgba(61,209,231,0.3)]" />

        {/* Footer Content */}
        <div className="flex flex-col items-center text-center">
          {/* Name - Laiba (white) Aslam (teal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="text-white">Laiba</span>{' '}
              <span className="text-[#3dd1e7]">Aslam</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl leading-relaxed"
          >
            Building Modern Web Applications using Python, Django & React
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center gap-5 mb-12"
          >
            <motion.a
              href="https://github.com/Laiba586/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3dd1e7]/30 bg-white/[0.055] text-[#3dd1e7] shadow-[0_0_25px_rgba(61,209,231,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-[#3dd1e7]/70 hover:bg-[#3dd1e7]/15 hover:shadow-[0_0_45px_rgba(61,209,231,0.4)]"
            >
              <FiGithub size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/laiba-aslam-89765a372/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3dd1e7]/30 bg-white/[0.055] text-[#3dd1e7] shadow-[0_0_25px_rgba(61,209,231,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-[#3dd1e7]/70 hover:bg-[#3dd1e7]/15 hover:shadow-[0_0_45px_rgba(61,209,231,0.4)]"
            >
              <FiLinkedin size={22} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=61577024488480"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3dd1e7]/30 bg-white/[0.055] text-[#3dd1e7] shadow-[0_0_25px_rgba(61,209,231,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-[#3dd1e7]/70 hover:bg-[#3dd1e7]/15 hover:shadow-[0_0_45px_rgba(61,209,231,0.4)]"
            >
              <FiFacebook size={22} />
            </motion.a>
            <motion.a
              href="mailto:laiba.dev56@gmail.com"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3dd1e7]/30 bg-white/[0.055] text-[#3dd1e7] shadow-[0_0_25px_rgba(61,209,231,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-[#3dd1e7]/70 hover:bg-[#3dd1e7]/15 hover:shadow-[0_0_45px_rgba(61,209,231,0.4)]"
            >
              <FiMail size={22} />
            </motion.a>
          </motion.div>

          {/* Copyright Separator */}
          <div className="w-full max-w-md mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-sm text-white/50 tracking-wide"
          >
            © 2026 Laiba Aslam. All Rights Reserved.
          </motion.p>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#3dd1e7]/40 bg-white/[0.085] text-[#3dd1e7] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_0_40px_rgba(61,209,231,0.2)] backdrop-blur-2xl transition-all duration-300 hover:border-[#3dd1e7]/70 hover:bg-[#3dd1e7]/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_50px_rgba(61,209,231,0.35)]"
        >
          <FiArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  )
}
