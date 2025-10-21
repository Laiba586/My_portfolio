import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

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
      </div>
    </section>
  )
}
