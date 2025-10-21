import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Element name="home"><Hero /></Element>
        <Element name="about"><About /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
