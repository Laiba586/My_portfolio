import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { motion } from 'framer-motion'

function App() {
  return (
    <div>
      <Navbar />

      {/* Fixed social icons - visible on md+ screens */}
      <div className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex-col items-center" style={{ gap: '1.6rem' }}>
        <motion.a
          href="https://github.com/Laiba586"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(61,209,231,0.25)',
            color: '#3dd1e7'
          }}
        >
          <FiGithub size={24} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/laiba-aslam-89765a372/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(61,209,231,0.25)',
            color: '#3dd1e7'
          }}
        >
          <FiLinkedin size={24} />
        </motion.a>

        <motion.a
          href="https://www.facebook.com/profile.php?id=61577024488480"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(61,209,231,0.25)',
            color: '#3dd1e7'
          }}
        >
          <FiFacebook size={24} />
        </motion.a>

        <div style={{ width: 1, height: 60, background: 'rgba(61,209,231,0.3)' }} />
      </div>

      <main>
        <Element name="home"><Hero /></Element>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
