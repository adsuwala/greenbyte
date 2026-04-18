import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'

const TrustedBySection = lazy(() => import('./components/sections/TrustedBySection'))
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'))
const CTASection = lazy(() => import('./components/sections/CTASection'))
const PortfolioSection = lazy(() => import('./components/sections/PortfolioSection'))
const FAQSection = lazy(() => import('./components/sections/FAQSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))
const Footer = lazy(() => import('./components/sections/Footer'))

function App() {
  const [renderDeferredSections, setRenderDeferredSections] = useState(false)

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number
      cancelIdleCallback?: (id: number) => void
    }

    let idleId: number | undefined
    let timeoutId: number | undefined

    const scheduleDeferredRender = () => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(() => setRenderDeferredSections(true), {
          timeout: 1200,
        })
        return
      }

      timeoutId = window.setTimeout(() => setRenderDeferredSections(true), 300)
    }

    if (document.readyState === 'complete') {
      scheduleDeferredRender()
    } else {
      window.addEventListener('load', scheduleDeferredRender, { once: true })
    }

    return () => {
      if (idleId !== undefined && win.cancelIdleCallback) {
        win.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-app font-sans text-slate-900">
      <Navbar />

      <main>
        <HeroSection />
        {renderDeferredSections && (
          <Suspense fallback={null}>
            <TrustedBySection />
            <ServicesSection />
            <CTASection />
            <PortfolioSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
        )}
      </main>

      {renderDeferredSections && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  )
}

export default App
