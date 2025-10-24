import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import SectionTitle from './SectionTitle'

// 👇 Function to generate Google Drive thumbnail
function getDriveId(link) {
  const dMatch = link.match(/\/d\/([a-zA-Z0-9_-]{10,})\//)
  if (dMatch && dMatch[1]) return dMatch[1]
  const idParam = link.match(/[?&]id=([a-zA-Z0-9_-]{10,})/)
  if (idParam && idParam[1]) return idParam[1]
  return ''
}

function driveThumb(link) {
  const id = getDriveId(link)
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : ''
}
const fallbackDataUri =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1f2937"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g)"/>
    <circle cx="400" cy="225" r="60" fill="rgba(255,255,255,0.15)"/>
    <polygon points="385,195 445,225 385,255" fill="rgba(255,255,255,0.85)"/>
  </svg>
`)

const projects = [
  {
    title: 'E-Commerce Website',
    video: 'https://drive.google.com/file/d/1na7Bo_LVB5qEz_csqdPjlJalh6vL8ZGQ/view?usp=drive_link',
    desc: 'A complete online store with product listings, cart, and checkout system.',
    features: [
      'Product catalog with categories and filtering',
      'Product search functionality',
      'Cart, checkout, and order flow',
      'Admin product management',
      'Order tracking with status updates',
      'Payment integration (mock/sandbox)',
    ],
  },
  {
    title: 'AI Resume Builder & Analyzer',
    video: 'https://drive.google.com/file/d/1mMQcH9Ul5LbBIMQU7Q9ROmVhJkVFZqSn/view?usp=drive_link',
    desc: 'AI-powered resume builder with REST APIs and JWT-secured authentication; analyzes resumes for gaps and strengths, suggests improvements, and offers modern, professional templates with live preview and export.',
    features: [
      'Resume parsing and scoring',
      'AI-powered content suggestions',
      'Export to PDF and shareable links',
      'Modern templates and live preview',
    ],
  },
  {
    title: 'Learning Management System',
    video: 'https://drive.google.com/file/d/1c7uMJ2MtAsKH7JiqdQRXyMItITGHAcJ1/view?usp=drive_link',
    desc: 'LMS with student/teacher directories, live attendance with stored records, classroom and subject management, and full timetable/period scheduling.',
    features: [
      'Students and teachers record',
      'Live attendance for students and teachers with database records',
      'Classrooms and classes management',
      'Subjects management and teacher assignments',
      'Timetable and periods management',
    ],
  },
  {
    title: 'Tools Base Website',
    video: 'https://drive.google.com/file/d/1TUhP5BUBRO7E1EiKZNkr5eF1PgJrf6Hc/view?usp=drive_link',
    desc: 'A text utility tool for converting, formatting, and cleaning text efficiently.',
    features: [
      'Text cleanup: punctuation removal, extra spaces, case conversion',
      'Instant results with responsive UI',
    ],
  },
  {
    title: 'Blog App',
    video: 'https://drive.google.com/file/d/1C_c37kYfarJ_xoBTmQOwhWp7jXjn7A2J/view?usp=drive_link',
    desc: 'A blog system with user authentication, post management, and comment functionality.',
    features: [
      'User authentication and profiles',
      'Create, edit, delete posts with rich content',
      'Categories, tags, and search',
      'Comments and moderation',
    ],
  },
  {
    title: 'Smart File Tools Platform',
    video: 'https://drive.google.com/file/d/1tBaEL2Lxr5RnJdNhw38dCxi7jH64lLqm/view?usp=drive_link',
    desc: 'A multipurpose web platform providing advanced file management tools for PDFs, images, and format conversions.',
    features: [
      'PDF, image, and file converters in one place',
      'Secure upload and instant file processing',
      'Subscription-based access for premium tools',
      'Built with Django, REST APIs, and responsive UI',
    ],
  },
]

export default function Projects() {
  const [activeId, setActiveId] = useState('')
  const [videoError, setVideoError] = useState(false)
  useEffect(() => {
    setVideoError(false)
  }, [activeId])
  return (
    <Element name="projects">
      <section className="section" id="projects">
        <div className="container-max">
          <SectionTitle
            title="My Portfolio"
            subtitle="Django Practical Projects Showcase"
          />

          <p className="mt-6 text-center text-slate-300 max-w-3xl mx-auto">
            These projects strengthened my real-world development skills, including API integration, category-based features,
            and hands-on work with advanced packages and libraries to build scalable and maintainable systems.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="card p-4 md:p-6 border border-white/10 bg-white/5 rounded-2xl shadow-lg transition"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <a
                    href={p.video}
                    onClick={(e) => {
                      e.preventDefault()
                      const id = getDriveId(p.video)
                      if (id) setActiveId(id)
                    }}
                  >
                    <img
                      src={driveThumb(p.video) || fallbackDataUri}
                      alt={p.title}
                      className="rounded-lg w-full h-48 object-cover"
                      style={{
                        objectPosition:
                          i === 1 ? 'center 65%' :
                          i === 3 ? 'center 68%' :
                          i === 4 ? 'center 65%' :
                          'center 55%',
                        clipPath:
                          i === 1 ? 'inset(18% 0 0 0)' :
                          i === 3 ? 'inset(20% 0 0 0)' :
                          i === 4 ? 'inset(18% 0 0 0)' :
                          'inset(12% 0 0 0)'
                      }}
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = fallbackDataUri
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-sm font-medium transition">
                      Click to watch demo
                    </div>
                  </a>
                </div>

                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{p.desc}</p>

                <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                  {p.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {activeId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
                <button
                  className="absolute top-2 right-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded px-3 py-1 text-sm"
                  onClick={() => setActiveId('')}
                >
                  Close
                </button>
                {!videoError ? (
                  <video
                    key={activeId}
                    className="w-full aspect-video"
                    controls
                    src={`https://drive.google.com/uc?export=download&id=${activeId}`}
                    onError={() => setVideoError(true)}
                  />
                ) : (
                  <iframe
                    key={`${activeId}-fallback`}
                    className="w-full aspect-video"
                    src={`https://drive.google.com/file/d/${activeId}/preview`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Video preview"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </Element>
  )
}
