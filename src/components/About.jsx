import { motion } from 'framer-motion'
import { FiBriefcase, FiCode, FiServer } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

const stats = [
  {
    icon: FiBriefcase,
    number: '1.5+',
    label: 'Years Experience',
  },
  {
    icon: FiCode,
    number: '10+',
    label: 'Projects Completed',
  },
  {
    icon: FiServer,
    number: '100+',
    label: 'REST APIs EndPoints Developed',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section className="section overflow-hidden" id="about">
      <div className="container-max">
        <div className="grid items-stretch gap-16 md:gap-20 lg:grid-cols-[0.4fr_0.6fr] lg:gap-[120px] xl:gap-[140px]">
          <motion.div
            className="relative mx-auto flex h-full w-full max-w-[480px] items-center justify-center lg:mx-0 lg:pl-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="absolute inset-8 rounded-[36px] bg-[#3dd1e7]/14 blur-3xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.35, ease }}
                className="group relative overflow-hidden rounded-[30px] border border-[#3dd1e7]/24 bg-white/[0.055] p-4 shadow-[0_30px_95px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.035)_inset] backdrop-blur-2xl hover:border-[#3dd1e7]/45 hover:shadow-[0_38px_120px_rgba(0,0,0,0.52),0_0_54px_rgba(61,209,231,0.16)]"
              >
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
                <div className="relative overflow-hidden rounded-[22px] bg-slate-950/45">
                  <img
                    src={profileImg}
                    alt="Laiba Aslam"
                    className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    style={{
                      filter: 'brightness(0.95) contrast(1.04) saturate(0.9)',
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1020]/28 via-transparent to-cyan-200/5" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto flex h-full w-full max-w-4xl flex-col justify-center text-center lg:mx-0 lg:text-left"
            initial={{ opacity: 0, x: 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3dd1e7] mb-6">
              __About Me__
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Full Stack Web Developer
            </h2>

            <div className="mt-8 space-y-6 text-[18px] leading-8 text-slate-300/92 sm:text-[18px] sm:leading-9">
              <p>
                Hi, I'm Laiba Aslam, a Full Stack Web Developer specializing in Python, Django, Django REST Framework, React, JavaScript, HTML and CSS.
              </p>

              <p>
                I enjoy building responsive websites, scalable REST APIs and complete web applications with clean architecture and modern UI.
              </p>

              <p>
                I'm continuously improving my skills by building real-world projects and exploring new technologies to create reliable and maintainable software.
              </p>
            </div>

            <motion.div
              className="mt-9 grid gap-4 sm:grid-cols-3"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map(({ icon: Icon, number, label }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group flex min-h-[156px] flex-col justify-between rounded-[22px] border border-white/10 bg-slate-950/38 p-5 shadow-[0_18px_52px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.025)_inset] backdrop-blur-xl transition duration-300 hover:border-[#3dd1e7]/42 hover:bg-white/[0.065] hover:shadow-[0_26px_70px_rgba(0,0,0,0.38),0_0_32px_rgba(61,209,231,0.13)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#3dd1e7]/24 bg-[#3dd1e7]/10 text-[#3dd1e7] shadow-[0_0_22px_rgba(61,209,231,0.14)] transition duration-300 group-hover:text-cyan-100 group-hover:shadow-[0_0_30px_rgba(61,209,231,0.24)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-3xl font-semibold tracking-normal text-white">
                      {number}
                    </span>
                    <span className="mt-2 block text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-400">
                      {label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}