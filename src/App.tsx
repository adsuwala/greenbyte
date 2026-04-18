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
          <Suspense fallback={<SectionPlaceholder className="min-h-[280px] md:min-h-[240px]" />}>
            <TrustedBySection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[280px] md:min-h-[240px]" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-[1950px] md:min-h-[1350px] xl:min-h-[980px]" />
            }
          >
            <ServicesSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[1950px] md:min-h-[1350px] xl:min-h-[980px]" />
        )}

        {loadBelowFoldSections ? (
          <Suspense fallback={<SectionPlaceholder className="min-h-[260px] xl:min-h-[220px]" />}>
            <CTASection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[260px] xl:min-h-[220px]" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-[1150px] md:min-h-[980px] xl:min-h-[900px]" />
            }
          >
            <PortfolioSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[1150px] md:min-h-[980px] xl:min-h-[900px]" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-[1000px] md:min-h-[920px] xl:min-h-[860px]" />
            }
          >
            <FAQSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[1000px] md:min-h-[920px] xl:min-h-[860px]" />
        )}

        {loadBelowFoldSections ? (
          <Suspense
            fallback={
              <SectionPlaceholder className="min-h-[1300px] md:min-h-[1200px] xl:min-h-[1050px]" />
            }
          >
            <ContactSection />
          </Suspense>
        ) : (
          <SectionPlaceholder className="min-h-[1300px] md:min-h-[1200px] xl:min-h-[1050px]" />
        )}
      </main>

      {loadBelowFoldSections ? (
        <Suspense fallback={<SectionPlaceholder className="min-h-[420px]" />}>
          <Footer />
        </Suspense>
      ) : (
        <SectionPlaceholder className="min-h-[420px]" />
      )}
    </div>
  )
}

export default App
