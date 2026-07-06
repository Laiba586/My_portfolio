import { motion, AnimatePresence } from 'framer-motion'
import { Element } from 'react-scroll'
import { useState } from 'react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap,
  SiPython, SiDjango, SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiPostman, SiSwagger, SiNpm, SiVercel,
  SiRedis, SiDocker, SiRender
} from 'react-icons/si'
import { FiDatabase, FiCpu, FiCode, FiTool, FiServer } from 'react-icons/fi'

const ease = [0.22, 1, 0.36, 1]

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Bootstrap', icon: SiBootstrap },
  ],
  backend: [
    { name: 'Python', icon: SiPython },
    { name: 'Django', icon: SiDjango },
    { name: 'Django REST Framework', icon: FiCode },
    { name: 'Celery', icon: FiServer },
    { name: 'Redis', icon: SiRedis },
    { name: 'JWT Authentication', icon: FiCpu },
    { name: 'AI Integrations', icon: FiCpu },
  ],
  databases: [
    { name: 'SQLite', icon: SiSqlite },
    { name: 'SQL', icon: FiDatabase },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  tools: [
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
    { name: 'Swagger', icon: SiSwagger },
    { name: 'npm', icon: SiNpm },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Docker', icon: SiDocker },
    { name: 'Render', icon: SiRender },
  ],
}

const categories = [
  { id: 'frontend', label: 'Frontend', icon: FiCode },
  { id: 'backend', label: 'Backend', icon: FiCpu },
  { id: 'databases', label: 'Databases', icon: FiDatabase },
  { id: 'tools', label: 'Tools', icon: FiTool },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <Element name="skills">
      <section className="section overflow-hidden" id="skills" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0b1020 50%, #0a1628 100%)', paddingTop: '8rem' }}>
        <div className="container-max">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="text-center mb-6"
          >
            <h2
              className="font-semibold tracking-normal text-white"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: '#3dd1e7' }}
            >
              My Skills
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-center text-slate-400 mb-16"
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}
          >
            Technologies I use to build full-stack web applications.
          </motion.p>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative px-10 py-4 rounded-full font-medium transition-all duration-300"
                style={{
                  background: activeCategory === category.id 
                    ? 'rgba(61, 209, 231, 0.1)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  border: activeCategory === category.id 
                    ? '2px solid #3dd1e7' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeCategory === category.id ? '#3dd1e7' : '#ffffff',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-[#3dd1e7]/20 bg-white/[0.05] p-12 shadow-xl backdrop-blur-xl transition-all duration-350 hover:border-[#3dd1e7]/50"
                >
                  <div className="flex justify-center mb-10">
                    <skill.icon 
                      size={64} 
                      className="text-[#3dd1e7] transition-transform duration-350 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-center text-white font-semibold text-lg mb-8">
                    {skill.name}
                  </h3>
                  {/* Decorative Bold Bottom Line */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[72%] h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#3dd1e7]/70 to-[#3dd1e7]/90 shadow-[0_0_15px_rgba(61,209,231,0.4)]" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Element>
  )
}