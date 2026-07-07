import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Element } from 'react-scroll'
import SectionTitle from './SectionTitle'
import project1 from '../assets/Project1.png'
import project2 from '../assets/Project2.png'
import project3 from '../assets/Project3.png'
import project4 from '../assets/Project4.png'

const projects = [
  {
    title: 'AI Resume Builder & Analyzer',
    desc: 'AI-powered resume platform with JWT auth, REST APIs, and OpenAI integration.',
    shortDesc: 'AI-powered resume builder with REST APIs and JWT auth.',
    tags: ['Python', 'Django', 'DRF', 'REST APIs', 'JWT', 'PostgreSQL', 'OpenAI'],
    image: project2,
    bgPos: 'center 35%',
    liveDemo: 'https://score-and-build.lovable.app/builder',
    github: 'https://github.com/Laiba586/AI-resume-builder-backend',
    showGithub: true
  },
  {
    title: 'Learning Management System',
    desc: 'Complete LMS with live attendance, classroom management, and timetable scheduling.',
    shortDesc: 'Complete LMS with attendance and timetable management.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite'],
    image: project1,
    bgPos: 'center 30%',
    liveDemo: 'https://laiba586.pythonanywhere.com/',
    github: 'https://github.com/Laiba586/Learning_Management_Project',
    showGithub: true
  },
  {
    title: 'E-Commerce Website',
    desc: 'Full online store with cart, checkout flow, and order management.',
    shortDesc: 'Online store with cart, checkout and order tracking.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite'],
    image: project3,
    bgPos: 'center 20%',
    liveDemo: 'https://laiba586-my-awesome-cart.hf.space/shop/',
    github: 'https://github.com/Laiba586/MyAwesomeCart',
    showGithub: true
  },
  {
    title: 'Smart AI Tools Platform',
    desc: 'Multipurpose platform with AI-powered file processing and conversion tools.',
    shortDesc: 'Multipurpose platform with AI-powered file processing.',
    tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'React'],
    image: project4,
    bgPos: 'center center',
    liveDemo: 'https://smallseotools.com/',
    github: '#',
    showGithub: false
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const project = projects[currentIndex]

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <Element name="projects">
      <section className="section overflow-hidden" id="projects">
        <div className="container-max px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle title="My Portfolio" />
          </motion.div>

          <motion.p
            className="mx-auto mt-4 sm:mt-8 max-w-2xl text-center text-[0.95rem] sm:text-[1.05rem] leading-7 text-white px-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            A collection of my Django Web Application Projects.
          </motion.p>

          <div className="mt-12 sm:mt-20 flex flex-col items-center">
            {/* Carousel Container */}
            <div className="relative flex w-full max-w-[950px] items-center justify-center">

              {/* Left Arrow (Vertically Centered) */}
              <button
                aria-label="Previous project"
                onClick={handlePrev}
                className="absolute left-0 sm:-left-6 md:-left-12 z-20 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/70 text-cyan-200 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-110 hover:border-cyan-300/60 hover:bg-cyan-300/20 hover:text-white"
              >
                <FiChevronLeft size={24} />
              </button>

              {/* Card */}
              <div className="w-full px-5 sm:px-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: direction > 0 ? 40 : -40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30, scale: 0.95 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative mx-auto min-h-[480px] w-full max-w-[850px] overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-slate-950/45 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-2xl transition-all duration-400 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(61,209,231,0.15)] hover:border-[#3dd1e7]/30 sm:min-h-[520px] md:min-h-[540px]"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 scale-100 opacity-60 blur-[0.5px] transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: project.bgPos,
                      }}
                    />

                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, rgba(5,10,25,0.4), rgba(5,10,25,0.6), rgba(5,10,25,0.85)), radial-gradient(circle at 50% 42%, rgba(8,145,178,0.15), transparent 60%)',
                      }}
                    />
                    <div className="absolute inset-0 bg-transparent backdrop-blur-[1px]" />

                    {/* Content */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-12 text-center py-8">
                      {/* Title */}
                      <h3 className="font-bold tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] text-[1.5rem] sm:text-[2rem] md:text-[2.2rem]">
                        {project.title}
                      </h3>

                      {/* Short description — Fixed Text Cut Issue */}
                      <p className="mt-4 max-w-full sm:max-w-[85%] text-[0.95rem] leading-6 sm:leading-7 text-white/90 sm:text-[1.05rem]">
                        {project.shortDesc}
                      </p>

                      {/* Tech stack — Fixed Text Cut Issue */}
                      <p className="mt-4 max-w-full text-[0.65rem] sm:text-[0.75rem] font-semibold uppercase leading-5 sm:leading-6 tracking-[0.15em] sm:tracking-[0.25em] text-[#3dd1e7]">
                        {project.tags.join(' • ')}
                      </p>

                      {/* Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-[160px] sm:w-[140px] items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-[0.9rem] font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 ease-out hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                          Live Demo
                        </a>
                        {project.showGithub && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-[160px] sm:w-[140px] items-center justify-center rounded-full border border-cyan-300/70 bg-slate-950/40 px-6 py-3.5 text-[0.9rem] font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:bg-cyan-400/20 hover:text-cyan-100"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow (Vertically Centered) */}
              <button
                aria-label="Next project"
                onClick={handleNext}
                className="absolute right-0 sm:-right-6 md:-right-12 z-20 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/70 text-cyan-200 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-110 hover:border-cyan-300/60 hover:bg-cyan-300/20 hover:text-white"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to project ${idx + 1}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-9 bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.6)]'
                      : 'w-2.5 bg-white/20 hover:bg-cyan-200/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}