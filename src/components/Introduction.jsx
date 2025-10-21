import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

export default function Introduction() {
  return (
    <section className="section" id="introduction">
      <div className="container-max">
        <SectionTitle title="Introduction" />
        <motion.div
          className="card p-8 leading-relaxed text-slate-300 text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I’m Laiba Aslam, a passionate and detail-oriented Python Full Stack Developer who loves creating functional, dynamic, and scalable web applications. I have a strong command of backend technologies like Django, Django REST Framework, and databases. My goal is to build robust systems that bring ideas to life and solve real-world problems through clean and maintainable code.
          </p>
          <p className="mt-4">
            I’m passionate about backend automation, RESTful architecture, and database design — constantly learning to master the art of building high-performance web solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
