import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

const items = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description: "Delivering complete end-to-end web applications — backend, frontend, and database working together, ready to deploy.",
    tags: ["Django", "REST APIs", "PostgreSQL", "Deployment", "E-Commerce Ready"]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building responsive, clean interfaces that look great on all devices and connect seamlessly with Django backends.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Django Templates"]
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Building powerful, secure Django applications with clean architecture, authentication, and production-ready deployment.",
    tags: ["Python", "Django", "DRF", "JWT Auth", "MVT Architecture"]
  },
  {
    number: "04",
    title: "Python Programming and Automation",
    description: "Writing efficient, production-grade Python code for automation, data processing, and complex logic — leveraging powerful libraries and tools to solve real-world problems.",
    tags: ["Python", "OOP", "Automation Scripts", "Data Processing", "Exception Handling", "Modular Programming"]
  },
  {
    number: "05",
    title: "Database Design & Optimization",
    description: "Designing efficient database schemas, writing optimized queries, and managing migrations for reliable, scalable storage.",
    tags: ["PostgreSQL", "MySQL", "SQLite", "Schema Design", "Query Optimization"]
  },
 
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle title="My Services" subtitle="What I build and deliver for clients" />
        </motion.div>

        <div className="mt-12">
          <div className="flex flex-col w-full">
            {items.map((it, idx) => (
              <motion.div
                key={it.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, backgroundColor: 'rgba(61,209,231,0.04)', borderColor: 'rgba(61,209,231,0.2)' }}
                className="w-full transition-all duration-300"
              >
                <div
                  className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_30px_rgba(61,209,231,0.1)] hover:border-[#3dd1e7]/15"
                  style={{ alignItems: 'center' }}
                >
                  {/* LEFT COLUMN */}
                  <div className="w-full md:w-1/3 flex items-center md:items-center">
                    <div className="flex items-center gap-4">
                      <span style={{ color: '#3dd1e7', fontSize: '2rem', fontWeight: 900, opacity: 0.4 }}>{it.number}</span>
                      <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#ffffff', margin: 0 }}>{it.title}</h3>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="w-full md:w-2/3">
                    <p style={{ color: '#cbd5e1', fontSize: '1.08rem', lineHeight: 1.85, margin: 0 }}>{it.description}</p>

                    <div className="flex flex-wrap gap-2.5 mt-5">
                      {it.tags.map((tag) => (
                        <span key={tag}
                          style={{
                            background: 'rgba(61,209,231,0.1)',
                            border: '1px solid rgba(61,209,231,0.35)',
                            color: '#3dd1e7',
                            borderRadius: '9999px',
                            padding: '6px 14px',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                          }}
                          className="hover:bg-[#3dd1e7]/15 hover:border-[#3dd1e7]/50 hover:shadow-[0_0_15px_rgba(61,209,231,0.2)]"
                        >{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* separator: remove for last item */}
                {idx !== items.length - 1 && (
                  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
