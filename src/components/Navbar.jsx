import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Portfolio' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-max">
        <div className="mt-4 rounded-2xl border border-white/10 bg-card/60 backdrop-blur shadow-glow">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-base sm:text-lg font-bold tracking-tight text-white">Laiba Aslam</div>
                <div className="text-[11px] sm:text-xs text-slate-300">Backend Developer</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  offset={-140}
                  activeClass="text-accent"
                  className="cursor-pointer text-slate-300 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10"
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
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  offset={-140}
                  activeClass="text-accent"
                  className="block cursor-pointer px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10"
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
