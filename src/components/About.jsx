import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import profileImg from '../assets/profile.png'

export default function About() {
  return (
    <section className="section" id="about" style={{ paddingTop: '4rem' }}>
      <div className="container-max">
        <SectionTitle title="About Me" subtitle="Who I am and what I love to build" />

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* LEFT — Profile Image slides in from left */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 60px 20px rgba(61, 209, 231, 0.25)',
                  borderRadius: '50%',
                }}
              />
              <img
                src={profileImg}
                alt="Laiba Aslam"
                className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-[#3dd1e7]/60"
                style={{
                  maskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Description slides in from right with delay */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          >
            <div className="card p-8 leading-relaxed text-slate-300 text-lg">
              <p>
                Hi, I'm <span className="text-[#3dd1e7] font-semibold">Laiba Aslam</span> — a Django Web Developer
                with expertise in Python, Django, Django REST Framework, and frontend technologies including
                HTML, CSS, Bootstrap, and JavaScript.
              </p>
              <p className="mt-4">
                I build complete web solutions — from robust backend APIs to polished, responsive interfaces.
                My focus is on e-commerce platforms and business websites that are fast, scalable, and user-friendly.
              </p>
              <p className="mt-4">
                I'm passionate about helping small businesses and local brands establish a powerful online presence.
                When I'm not coding, I explore new tools and better ways to build reliable, high-performance applications.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
