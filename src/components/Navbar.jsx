import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile1.png'

const navItems = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Services' },
  { to: 'projects', label: 'Portfolio' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-max">
        <div className="mt-5 rounded-3xl border border-[#3dd1e7]/30 bg-white/[0.085] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_0_40px_rgba(61,209,231,0.15)]">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo + Name + Photo */}
            <div className="flex items-center gap-4">
              {/* IMAGE FIX: Border white aur shadow white kar di hai */}
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] overflow-hidden bg-slate-900">
                <img
                  src={profileImg}
                  alt="Laiba Aslam"
                  className="w-full h-full object-cover object-center scale-110" 
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="leading-tight">
                <div className="text-lg sm:text-xl font-bold tracking-tight text-white">Laiba Aslam</div>
                <div className="text-xs sm:text-sm text-[#3dd1e7]">Django Web Developer</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <motion.button
                  key={item.to}
                  onClick={() => {
                    document.getElementById(item.to)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="relative px-6 py-2.5 rounded-full font-medium transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                  }}
                  whileHover={{ 
                    scale: 1.06, 
                    background: 'rgba(61, 209, 231, 0.1)',
                    borderColor: '#3dd1e7',
                    boxShadow: '0 0 20px rgba(61, 209, 231, 0.3)'
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  className="block cursor-pointer px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}