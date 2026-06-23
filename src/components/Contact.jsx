import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { FiLinkedin, FiGithub, FiMail, FiFacebook } from 'react-icons/fi'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/laiba-aslam-89765a372/',
    icon: FiLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Laiba586/',
    icon: FiGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61577024488480',
    icon: FiFacebook,
    label: 'Facebook',
  },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Get in Touch" subtitle="Have a project in mind or want to collaborate? Send a message." />
        </motion.div>

        <div className="flex flex-col items-center justify-center py-10">

          {/* Email icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(61,209,231,0.4)' }}
            className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg cursor-pointer"
          >
            <FiMail className="w-7 h-7" />
          </motion.div>

          {/* Email label */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-slate-300">Email</p>
            <a
              href="mailto:swellbliss184@gmail.com"
              className="font-medium underline text-slate-100 hover:text-[#3dd1e7] transition"
              target="_blank"
              rel="noreferrer"
            >
              swellbliss184@gmail.com
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex items-center gap-3 text-slate-100 hover:text-[#3dd1e7] transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.08 }}
              >
                <span className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 shadow">
                  <Icon className="w-6 h-6" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
