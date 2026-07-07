import { motion } from 'framer-motion'
import { FiBriefcase, FiCode, FiServer } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

const stats = [
  { icon: FiBriefcase, number: '1.5+', label: 'Years Experience' },
  { icon: FiCode, number: '10+', label: 'Projects Completed' },
  { icon: FiServer, number: '100+', label: 'REST APIs EndPoints Developed' },
]

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section className="section overflow-hidden" id="about">
      <div className="container-max">
        <div className="grid items-center gap-16 md:gap-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-[120px] xl:gap-[140px]">
          
          {/* PHOTO SECTION WITH FEROZI SPARKING GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto flex h-full w-full max-w-[480px] items-center justify-center lg:mx-0"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[30px] border-2 border-[#3dd1e7] shadow-[0_0_25px_rgba(61,209,231,0.5),inset_0_0_15px_rgba(61,209,231,0.3)] p-2 bg-slate-950/50"
            >
              <img
                src={profileImg}
                alt="Laiba Aslam"
                className="rounded-[22px] aspect-[4/5] w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mx-auto flex h-full w-full max-w-4xl flex-col justify-center text-center lg:mx-0 lg:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3dd1e7] mb-6">__About Me__</p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Full Stack Web Developer</h2>

            <div className="mt-8 space-y-6 text-[18px] leading-8 text-slate-300/92">
              <p>Hi, I'm Laiba Aslam, a Full Stack Web Developer specializing in Python, Django, Django REST Framework, React, JavaScript, HTML and CSS.</p>
              <p>I enjoy building responsive websites, scalable REST APIs and complete web applications with clean architecture and modern UI.</p>
              <p>I'm continuously improving my skills by building real-world projects and exploring new technologies to create reliable and maintainable software.</p>
            </div>

            {/* STATS */}
            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map(({ icon: Icon, number, label }) => (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex flex-col justify-between rounded-[22px] border border-white/10 bg-slate-950/30 p-5 backdrop-blur-md hover:border-[#3dd1e7]/50 transition-all"
                >
                  <Icon className="h-6 w-6 text-[#3dd1e7] mb-4" />
                  <span className="text-2xl font-bold text-white">{number}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}