export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2
        className="section-title"
        style={{
          color: '#3dd1e7',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle max-w-2xl mx-auto"
          style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
