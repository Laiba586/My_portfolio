import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { SiHtml5, SiCss3, SiBootstrap, SiPython, SiDjango, SiSqlite, SiMysql, SiPostgresql } from 'react-icons/si'
import { MdOutlineApi } from 'react-icons/md'

const items = [
  {
    title: 'Python Developer',
    points: [
      'My programming journey began with Python, focusing on strong foundations in logic, problem‑solving, and real‑world applications.',
      'Topics: OOP, File & Exception Handling, Data Structures, Modules & Packages, SQLite integration, Desktop notifications, GUI with Tkinter.',
      'Projects: Basic Calculator, Kaun Banega Crorepati (Quiz Game), Snake Water Gun Game, Rock Paper Scissors Game, Tic Tac Toe Game, Drink Water Reminder (Desktop Notification App), Secret Code Language Program, Library Management System, Clear The Clutter (File Organizer), Merge PDF App, New App in Python, E‑Commerce App Generator, Python Project – Banking System, Gardening App.'
    ]
  },
  {
    title: 'Django Developer',
    points: [
      'After mastering Python fundamentals, I advanced to Django to build scalable and data‑driven web applications using the MVT architecture.',
      'Experience: Models, Views, Templates, Static & Media files, CRUD, Forms & Authentication, Admin customization, Signals, Context Processors, Template inheritance, Deployment & Debugging.',
      'Projects: E‑Commerce Website, To‑Do List App, Weather App, TextUtils Website, Learning Management System, Blog App, AI Resume Builder & AI Analyzer.'
    ]
  },
  {
    title: 'DRF & APIs',
    points: [
      'Built RESTful APIs with Django REST Framework to connect frontends with robust backends.',
      'Token‑based authentication, Serializers & ViewSets, CRUD endpoints, External API integrations.',
      'API testing and documentation using Postman.'
    ]
  },
  {
    title: 'Databases',
    points: [
      'Worked with SQLite, MySQL, and PostgreSQL for production‑ready applications.',
      'Designed schemas, optimized queries, handled migrations and relationships.',
      'Experienced with PostgreSQL for large‑scale data storage and performance tuning.'
    ]
  },
]

const expSkills = [
  { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#0C4B33' },
  { name: 'DRF / REST APIs', icon: MdOutlineApi, color: '#ef4444' },
  { name: 'SQLite', icon: SiSqlite, color: '#0f9ed8' },
  { name: 'MySQL', icon: SiMysql, color: '#00758F' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container-max">
        <SectionTitle title="Working Experience & Journey" subtitle="Timeline across Python, Django, DRF, and Databases" />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/70 to-accent2/70 rounded-full" />
          <div className="space-y-8">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                className={`relative sm:grid sm:grid-cols-2 gap-8 items-start`}
                initial={{ opacity: 0, y: 30, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className={`hidden sm:block ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}></div>
                <div className={`card p-6 border-white/10 ${idx % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent shadow-glow" />
                    <h3 className="text-xl font-bold">{it.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
                    {it.points.map((p) => (
                      <li key={p.substring(0, 12)}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-28 space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {expSkills.slice(0, 5).map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="w-20 h-20 rounded-3xl ring-1 ring-[#8EE7F0] bg-[#E0F7FA] flex items-center justify-center shadow-xl shadow-black/30 hover:scale-105 transition"
                title={name}
                aria-label={name}
              >
                {name === 'DRF / REST APIs' ? (
                  <span className="font-extrabold" style={{ color, fontSize: 20 }}>DRF</span>
                ) : (
                  <Icon size={38} style={{ color }} />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {expSkills.slice(5).map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="w-20 h-20 rounded-3xl ring-1 ring-[#8EE7F0] bg-[#E0F7FA] flex items-center justify-center shadow-xl shadow-black/30 hover:scale-105 transition"
                title={name}
                aria-label={name}
              >
                {name === 'DRF / REST APIs' ? (
                  <span className="font-extrabold" style={{ color, fontSize: 20 }}>DRF</span>
                ) : (
                  <Icon size={38} style={{ color }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
