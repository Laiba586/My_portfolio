import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

function drivePreview(url) {
  const match = url.match(/\/file\/d\/([^/]+)\/view/)
  const id = match ? match[1] : ''
  return id ? `https://drive.google.com/file/d/${id}/preview` : url
}

 

const advanced = [
  {
    title: 'Tools Base Website',
    video: 'https://drive.google.com/file/d/1TUhP5BUBRO7E1EiKZNkr5eF1PgJrf6Hc/view?usp=drive_link',
    desc: 'A text utility tool for converting, formatting, and cleaning text efficiently.'
  },
  {
    title: 'Blog App',
    video: 'https://drive.google.com/file/d/1C_c37kYfarJ_xoBTmQOwhWp7jXjn7A2J/view?usp=drive_link',
    desc: 'A blog system with user authentication, post management, and comment functionality.'
  },
  {
    title: 'Learning Management System',
    video: 'https://drive.google.com/file/d/1c7uMJ2MtAsKH7JiqdQRXyMItITGHAcJ1/view?usp=drive_link',
    desc: 'For managing courses, enrollments, and student progress tracking.'
  },
  {
    title: 'E-Commerce Website',
    video: 'https://drive.google.com/file/d/1na7Bo_LVB5qEz_csqdPjlJalh6vL8ZGQ/view?usp=drive_link',
    desc: 'A complete online store with product listings, cart, and checkout system.'
  },
  {
    title: 'AI Resume Builder & Analyzer',
    video: 'https://drive.google.com/file/d/1mMQcH9Ul5LbBIMQU7Q9ROmVhJkVFZqSn/view?usp=drive_link',
    desc: 'Analyzes resumes and provides professional suggestions.'
  }
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')

  const openVideo = (url) => {
    setSrc(drivePreview(url))
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    setSrc('')
  }

  return (
    <section className="section" id="projects">
      <div className="container-max">
        <SectionTitle title="My Portfolio" />

        

        <h3 className="mt-20 text-2xl sm:text-3xl font-extrabold text-center text-white">Django Practical Projects Showcase</h3>
        <p className="mt-6 text-center text-slate-300 max-w-3xl mx-auto">
          These projects strengthened my real‑world development skills, including API integration, category‑based features, and hands‑on work
          with advanced packages and libraries to build scalable and maintainable systems.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advanced.map((p, idx) => (
            <motion.div
              key={p.title}
              className="card p-4 border-white/10 cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openVideo(p.video)}
            >
              <div className="aspect-video rounded-xl bg-white/5 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-accent2/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-extrabold text-lg">Django Advanced Projects</div>
                    <div className="text-slate-300 text-xs mt-1">Click to watch demo</div>
                  </div>
                </div>
              </div>
              <h4 className="mt-3 font-bold">{p.title}</h4>
              <p className="mt-1 text-slate-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-5xl bg-black rounded-xl overflow-hidden border border-white/10 relative"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button (red pill style) */}
                <button
                  onClick={close}
                  className="absolute top-4 right-4 z-50 px-3 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold shadow ring-1 ring-white/30"
                  aria-label="Close preview"
                >
                  Close
                </button>
                {src ? (
                  <div className="relative w-full aspect-video">
                    {/* Mask Google Drive top bar (hide toolbar + intercept clicks) */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-black z-10 pointer-events-auto" />
                    <iframe
                      src={src}
                      title="Project Preview"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-video flex items-center justify-center text-slate-300">Preview coming soon</div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
