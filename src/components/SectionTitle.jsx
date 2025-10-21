export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="section-title text-accent font-extrabold">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
