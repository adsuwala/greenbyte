import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const loadExternalFonts = () => {
  if (document.querySelector('link[data-google-fonts="true"]')) return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Syne:wght@400..800&display=swap'
  link.setAttribute('data-google-fonts', 'true')
  document.head.appendChild(link)
}

window.addEventListener(
  'load',
  () => {
    window.setTimeout(loadExternalFonts, 0)
  },
  { once: true },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
