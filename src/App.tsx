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

function SectionPlaceholder({ className }: { className: string }) {
  return <div aria-hidden="true" className={className} />
}

function App() {
  const [loadBelowFoldSections, setLoadBelowFoldSections] = useState(false)

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

    const scheduleLoad = () => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(() => setLoadBelowFoldSections(true), {
          timeout: 1500,
        })
        return
      }

      timeoutId = window.setTimeout(() => setLoadBelowFoldSections(true), 450)
    }

    if (document.readyState === 'complete') {
      scheduleLoad()
    } else {
      window.addEventListener('load', scheduleLoad, { once: true })
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
        {loadBelowFoldSections ? (
          <Suspense fallback={<SectionPlaceholder className="min-h-70 md:min-h-60" />}>
            <TrustedBySection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-70 md:min-h-60" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-487.5 md:min-h-337.5 xl:min-h-245" />
            }
          >
            <ServicesSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-487.5 md:min-h-337.5 xl:min-h-245" />
        )}

        {loadBelowFoldSections ? (
          <Suspense fallback={<SectionPlaceholder className="min-h-65 xl:min-h-55" />}>
            <CTASection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-65 xl:min-h-55" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-287.5 md:min-h-245 xl:min-h-225" />
            }
          >
            <PortfolioSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-287.5 md:min-h-245 xl:min-h-225" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-250 md:min-h-230 xl:min-h-215" />
            }
          >
            <FAQSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-250 md:min-h-230 xl:min-h-215" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-325 md:min-h-300 xl:min-h-262.5" />
            }
          >
            <ContactSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-325 md:min-h-300 xl:min-h-262.5" />
        )}
      </main>

      {loadBelowFoldSections ? (
        <Suspense fallback={<SectionPlaceholder className="min-h-105" />}>
          <Footer />
        </Suspense>
      ) : (
        <SectionPlaceholder className="min-h-105" />
      )}
    </div>
  )
}

export default App
