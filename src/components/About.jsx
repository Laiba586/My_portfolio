import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container-max">
        <SectionTitle title="About Me" subtitle="Who I am and what I love to build" />
        <div className="card p-8 leading-relaxed text-slate-300 text-lg">
          <p>
           I am a backend developer who likes working with Django and building web applications and APIs. I enjoy creating systems that work smoothly and are easy to manage. I focus on writing clean code, keeping things secure, and making sure the database is well structured.

I mainly work with Python, Django, Django REST Framework, and databases. I like solving problems and turning ideas into working features that people can actually use.

I have worked on different types of projects like e-commerce websites, learning systems, blogs, and small utility apps. I try to keep my APIs simple and easy to understand so they can connect well with frontend apps like React or mobile apps.

I also try to write clear documentation so others can easily use or understand my work. In my free time, I like exploring new tools and learning better ways to build fast and reliable applications.

This version:
          </p>
          <p className="mt-4">
            I’ve worked on projects such as e‑commerce, LMS, blogging platforms, and utility apps. I care about developer experience and user experience alike, focusing on consistent APIs, clear documentation, and smooth client integrations (React/mobile). When I’m not coding, I explore new tools, patterns, and best practices to improve reliability and speed of delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
