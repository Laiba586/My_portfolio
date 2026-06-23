import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

export default function Introduction() {
  return (
    <section className="section" id="introduction">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Introduction" />
        </motion.div>

        <motion.div
          className="card p-8 leading-relaxed text-slate-300 text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ boxShadow: '0 0 28px rgba(61,209,231,0.15)' }}
        >
          <p>
            I'm <span className="text-[#3dd1e7] font-semibold">Laiba Aslam</span>, a passionate and detail-oriented
            Django Web Developer who loves creating functional, dynamic, and scalable web applications. I have a strong
            command of backend technologies like Django, Django REST Framework, and databases, as well as frontend
            technologies including HTML, CSS, Bootstrap, and JavaScript.
          </p>
          <p className="mt-4">
            My goal is to build robust systems that bring ideas to life and solve real-world problems through clean
            and maintainable code. I'm passionate about RESTful architecture, e-commerce platforms, and database
            design — constantly learning to master the art of building high-performance web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
