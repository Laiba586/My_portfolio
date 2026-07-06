import { motion, AnimatePresence } from 'framer-motion'
import { Element } from 'react-scroll'
import { useState } from 'react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap,
  SiPython, SiDjango, SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiPostman, SiSwagger, SiNpm, SiVercel,
 SiRedis, SiDocker,SiRender
} from 'react-icons/si'
import { FiDatabase, FiCpu, FiCode, FiTool, FiServer,} from 'react-icons/fi'

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
            className="text-center text-slate-400 mb-12"
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}
          >
            Technologies I use to build full-stack web applications.
          </motion.p>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative px-8 py-3 rounded-full font-medium transition-all duration-300"
                style={{
                  background: activeCategory === category.id 
                    ? 'rgba(61, 209, 231, 0.1)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  border: activeCategory === category.id 
                    ? '2px solid #3dd1e7' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeCategory === category.id ? '#3dd1e7' : '#ffffff',
                  boxShadow: activeCategory === category.id 
                    ? '0 0 20px rgba(61, 209, 231, 0.3)' 
                    : 'none',
                }}
                whileHover={{ scale: 1.06, boxShadow: activeCategory === category.id ? '0 0 30px rgba(61, 209, 231, 0.45)' : '0 0 20px rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#3dd1e7',
                      boxShadow: '0 0 10px #3dd1e7',
                    }}
                    transition={{ duration: 0.3, ease }}
                  />
                )}
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
              className="grid grid-cols-3 gap-8 lg:gap-9 max-w-6xl mx-auto"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#3dd1e7]/20 bg-white/[0.055] p-10 shadow-[0_20px 60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-xl transition-all duration-350 hover:border-[#3dd1e7]/60 hover:shadow-[0_35px 90px_rgba(0,0,0,0.45),0_0_50px_rgba(61,209,231,0.2)]"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <skill.icon 
                      size={56} 
                      className="text-[#3dd1e7] transition-transform duration-350 group-hover:scale-110"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-center text-white font-semibold text-lg mb-6">
                    {skill.name}
                  </h3>

                  {/* Decorative Bottom Line */}
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
