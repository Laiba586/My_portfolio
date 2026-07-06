import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiClock,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import SectionTitle from './SectionTitle'

emailjs.init('Zx8RgQ8nsFYCqLwk6')

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'laiba.dev56@gmail.com',
    href: 'mailto:laiba.dev56@gmail.com',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Okara, Punjab, Pakistan',
  },
  {
    icon: FiClock,
    label: 'Response Time',
    value: 'Available: 9 AM - 12 AM (PKT)',
  },
]

const socialLinks = [
  {
    href: 'https://github.com/Laiba586/',
    icon: FiGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/laiba-aslam-89765a372/',
    icon: FiLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61577024488480',
    icon: FiFacebook,
    label: 'Facebook',
  },
]

const inputClasses =
  'w-full rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-sm text-slate-100 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-xl transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/55 focus:bg-slate-950/60 focus:shadow-[0_0_0_3px_rgba(61,209,231,0.10),0_0_28px_rgba(61,209,231,0.12)]'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send('service_2tsmiqe', 'template_a6pra2w', {
        to_email: 'laiba.dev56@gmail.com',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message could not be sent. Please check EmailJS setup and try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3dd1e7] mb-6">
            __Get in Touch__
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's Build Something <span className="text-[#3dd1e7]">Amazing Together</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div
            className="space-y-5"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group flex items-center gap-5 rounded-[26px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.30),0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-2xl transition duration-300 hover:border-cyan-300/35 hover:bg-white/[0.075] hover:shadow-[0_28px_85px_rgba(0,0,0,0.42),0_0_32px_rgba(61,209,231,0.12)]"
                >
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-400 shadow-[0_0_26px_rgba(61,209,231,0.18)] transition duration-300 group-hover:scale-105 group-hover:text-white group-hover:shadow-[0_0_34px_rgba(61,209,231,0.28)]">
                    <Icon className="h-6 w-6 stroke-[2.5px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                      {label}
                    </span>
                    <span className="mt-2 block break-words text-base font-semibold leading-7 text-slate-200">
                      {value}
                    </span>
                  </span>
                </motion.div>
              )

              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[26px] border border-white/10 bg-slate-950/35 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] White ">
                Connect
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100 shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/55 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_32px_rgba(61,209,231,0.22)]"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </motion.a>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-center text-xs font-medium text-[#3dd1e7] tracking-wide"
              >
                Available for Freelance Work
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_32px_110px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

            <form className="relative z-10 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What should we discuss?"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  required
                  rows="6"
                  className={`${inputClasses} min-h-[160px] resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ y: -2, scale: isSending ? 1 : 1.01 }}
                whileTap={{ scale: isSending ? 1 : 0.99 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.30)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_46px_rgba(34,211,238,0.48)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FiSend className="h-5 w-5" />
                {isSending ? 'Sending Message...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.28 }}
                    className={`rounded-2xl border px-5 py-4 text-sm font-medium ${
                      status.type === 'success'
                        ? 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[0_0_28px_rgba(61,209,231,0.12)]'
                        : 'border-rose-300/35 bg-rose-400/10 text-rose-100 shadow-[0_0_28px_rgba(251,113,133,0.10)]'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}