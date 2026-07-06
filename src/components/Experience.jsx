import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

const items = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description: "End-to-end web solutions integrating robust backends with modern, intuitive frontend interfaces for seamless digital experiences.",
    tags: ["Django", "React", "Python", "Full-Stack"]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Crafting highly responsive, pixel-perfect user interfaces that prioritize performance and smooth interaction across all devices.",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Responsive"]
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Architecting secure, scalable Django backends with high-performance REST APIs and robust authentication for complex applications.",
    tags: ["Python", "Django", "DRF", "JWT Auth", "Security"]
  },
  {
    number: "04",
    title: "Python Programming & Automation",
    description: "Developing production-grade Python scripts and automation workflows to streamline data processing and optimize complex business logic.",
    tags: ["Python", "OOP", "Automation", "Data Processing", "Scripts"]
  },
  {
    number: "05",
    title: "Database Architecture & Scalability",
    description: "Designing high-performance, optimized database schemas and queries to ensure data integrity and rapid scaling as your application grows.",
    tags: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization"]
  },
]
export default function Experience() {
  return (
    <section className="section py-20" id="experience">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle title="My Services" subtitle="What I build and deliver for clients" />
        </motion.div>

        {/* Container with extra margin top for spacing */}
        <div className="mt-16">
          <div className="flex flex-col gap-6"> {/* gap-6 add kiya hai taake items ke beech space rahe */}
            {items.map((it, idx) => (
              <motion.div
                key={it.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
              >
                <div
                  className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-[#3dd1e7]/20"
                >
                  {/* LEFT COLUMN: Number and Title */}
                  <div className="w-full md:w-1/3">
                    <div className="flex flex-col gap-3">
                      <span style={{ color: '#3dd1e7', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{it.number}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{it.title}</h3>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Description and Tags */}
                  <div className="w-full md:w-2/3">
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">{it.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {it.tags.map((tag) => (
                        <span key={tag}
                          style={{
                            background: 'rgba(61,209,231,0.06)',
                            border: '1px solid rgba(61,209,231,0.2)',
                            color: '#3dd1e7',
                            borderRadius: '8px',
                            padding: '5px 12px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                          }}
                        >{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}