import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container-max">
        <SectionTitle title="About Me" subtitle="Who I am and what I love to build" />
        <div className="card p-8 leading-relaxed text-slate-300 text-lg">
          <p>
            I’m a passionate backend-focused developer who builds scalable Django applications and REST APIs. I enjoy clean architectures, secure authentication, reliable data models, and integrations that make products truly useful. My core stack is Python, Django, Django REST Framework, and databases. I love turning complex requirements into robust, maintainable services—shipping features with quality, observability, and performance in mind.
          </p>
          <p className="mt-4">
            I’ve worked on projects such as e‑commerce, LMS, blogging platforms, and utility apps. I care about developer experience and user experience alike, focusing on consistent APIs, clear documentation, and smooth client integrations (React/mobile). When I’m not coding, I explore new tools, patterns, and best practices to improve reliability and speed of delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
