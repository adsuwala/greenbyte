import { lazy, Suspense, useEffect, useState } from 'react'

const HeroDesktopVisual = lazy(() => import('./HeroDesktopVisual'))

const heroHighlights = [
  'Aplikacje webowe dla MŚP i start-upów',
  'Systemy wewnętrzne i automatyzacja procesów',
  'Wsparcie techniczne i rozwój po wdrożeniu',
]

function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(min-width: 1280px)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')
    const updateDesktopState = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    updateDesktopState(mediaQuery)
    mediaQuery.addEventListener('change', updateDesktopState)

    return () => {
      mediaQuery.removeEventListener('change', updateDesktopState)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0A3821_0%,#165943_100%)] text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-38.25 pb-34 sm:px-6 md:pt-44 lg:px-8 3xl:max-w-navbar 3xl:px-0">
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_46%] xl:items-stretch xl:gap-12 3xl:grid-cols-[minmax(0,1fr)_52.8%] 3xl:gap-0">
          <div className="relative z-20">
            <h1 className="font-syne text-[2rem] font-bold leading-[1.04] tracking-tight max-[21.5625rem]:text-[1.75rem] md:text-5xl xl:max-w-none 3xl:text-[6rem] 3xl:leading-[1.1]">
              <span className="3xl:block">Oprogramowanie,</span>{' '}
              <span className="text-[#43DF72] 3xl:block">które</span>{' '}
              <span className="text-[#43DF72] 3xl:block">napędza</span>{' '}
              <span className="3xl:block">Twój biznes</span>
            </h1>

            <div className="xl:max-w-xl">
              <p className="mt-5 text-sm leading-5 font-normal text-[#B5DDC7]/70 md:text-xl md:leading-8.75 3xl:text-2xl 3xl:leading-10.5">
                Tworzymy dedykowane aplikacje webowe i systemy wewnętrzne dla MŚP i
                start-upów. Przekształcamy wyzwania biznesowe w sprawne, skalowalne
                rozwiązania technologiczne.
              </p>

              <ul className="mt-6.25 flex flex-col gap-2 md:mt-8 md:gap-4 xl:hidden">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-1">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4.25 w-4.25 shrink-0 md:h-6 md:w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.49996 15.5833C12.412 15.5833 15.5833 12.412 15.5833 8.49999C15.5833 4.58797 12.412 1.41666 8.49996 1.41666C4.58794 1.41666 1.41663 4.58797 1.41663 8.49999C1.41663 12.412 4.58794 15.5833 8.49996 15.5833Z"
                        stroke="#37BC64"
                        strokeWidth="1.41667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.375 8.50001L7.79167 9.91668L10.625 7.08334"
                        stroke="#37BC64"
                        strokeWidth="1.41667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm md:text-xl font-normal leading-5 text-[#B5DDC7]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-7.5 flex flex-col gap-2.5 md:flex-row 3xl:gap-10">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-cta bg-[#2B7D3A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#236A30] md:w-auto md:text-xl 3xl:px-6 3xl:py-6 3xl:text-2xl"
                >
                  Bezpłatna konsultacja
                  <svg
                    width="37"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 shrink-0 md:h-5 md:w-5 3xl:h-8 3xl:w-8"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.70833 18H29.2917"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 7.5L29.2917 18L18.5 28.5"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-cta border border-[#7BF2A7] bg-transparent px-5 py-2.5 text-sm font-bold text-[#7BF2A7] transition hover:bg-white/5 md:w-auto md:text-xl 3xl:px-6 3xl:py-6 3xl:text-2xl"
                >
                  Zobacz portfolio
                </a>
              </div>
            </div>
          </div>

          {isDesktop && (
            <Suspense
              fallback={
                <div
                  aria-hidden="true"
                  className="hidden xl:block xl:self-stretch 3xl:-ml-12"
                />
              }
            >
              <HeroDesktopVisual />
            </Suspense>
          )}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-px text-app"
      >
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-23 lg:h-26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 34C118 110 246 121 390 76C534 31 654 5 792 42C931 78 1056 108 1188 70C1319 32 1404 38 1440 62V160H0V34Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
