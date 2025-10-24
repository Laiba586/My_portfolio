import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import SectionTitle from './SectionTitle'
import { 
  SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiPython, SiDjango, SiGithub 
} from 'react-icons/si'
import { MdOutlineApi } from 'react-icons/md'
import { PiDatabaseBold } from 'react-icons/pi'

const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#E44D26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'JavaScript (Basic)', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Django', icon: SiDjango, color: '#0C4B33' },
  { name: 'DRF / REST APIs', icon: MdOutlineApi, color: '#22c55e' },
  { name: 'Databases', icon: PiDatabaseBold, color: '#38bdf8' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
]

export default function Skills() {
  return (
    <Element name="skills">
      <section className="section mt-24 mb-24" id="skills">
        <div className="container-max">
          <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 place-items-center">
            {skills.map(({ name, icon: Icon, color }) => (
              <motion.div key={name} whileHover={{ y: -6, scale: 1.04 }} className="group card p-6 text-center border-white/10">
                <div className="flex justify-center">
                  <Icon size={36} style={{ color }} title={name} />
                </div>
                <div className="mt-3 text-sm font-semibold">{name}</div>
                <div className="opacity-0 group-hover:opacity-100 transition text-xs text-slate-400 mt-1">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}
