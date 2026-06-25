function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`w-full px-4 py-16 sm:py-20 md:py-24 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

export default Section
