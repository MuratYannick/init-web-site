import { useState, useEffect } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <button
        onClick={() => setDark(d => !d)}
        className="fixed top-4 right-4 px-3 py-1 rounded bg-slate-200 dark:bg-slate-700 text-sm"
      >
        {dark ? 'Light' : 'Dark'}
      </button>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-brand">Formule 1 — prêt</h1>
      </main>
    </div>
  )
}

export default App
