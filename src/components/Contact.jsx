import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { FiLinkedin, FiGithub, FiMail, FiFacebook } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: data?.message || 'Message sent successfully.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ loading: false, ok: false, msg: data?.error || 'Failed to send message.' })
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: 'Network error. Please try again.' })
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container-max">
        <SectionTitle title="Get in Touch" subtitle="Have a project in mind or want to collaborate? Send a message." />
        <div className="grid md:grid-cols-2 gap-6">
          <form className="card p-6 border-white/10 space-y-4" onSubmit={submit}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your name" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Write your message..." required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-accent" />
            </div>
            <button type="submit" disabled={status.loading} className="btn-primary w-full justify-center">
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.msg && (
              <div className={`text-sm mt-1 ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{status.msg}</div>
            )}
          </form>

          <div className="card p-6 border-white/10">
            <h3 className="text-lg font-bold">Connect</h3>
            <p className="text-slate-400 mt-1 text-sm">I’m active on these platforms. Let’s connect.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn-secondary" href="https://github.com/Laiba586/" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a className="btn-secondary" href="https://www.linkedin.com/in/laiba-aslam-89765a372/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <a className="btn-secondary" href="https://www.facebook.com/profile.php?id=61577024488480" target="_blank" rel="noreferrer"><FiFacebook /> Facebook</a>
              <a className="btn-secondary" href="mailto:swellbliss184@gmail.com" target="_blank" rel="noreferrer"><FiMail /> Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
