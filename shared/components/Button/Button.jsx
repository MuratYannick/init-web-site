function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2'
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-dark',
    secondary: 'bg-transparent border border-brand text-brand hover:bg-brand hover:text-white',
    ghost: 'bg-transparent text-brand hover:bg-slate-100 dark:hover:bg-slate-800',
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default Button
