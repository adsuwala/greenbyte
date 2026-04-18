import heroPhoto from '../../assets/img/hero.jpeg'

const heroHighlights = [
  'Aplikacje webowe dla MŚP i start-upów',
  'Systemy wewnętrzne i automatyzacja procesów',
  'Wsparcie techniczne i rozwój po wdrożeniu',
]

const heroTechnologyRows = [
  ['React', 'Node.js'],
  ['PostgreSQL', 'Docker'],
]

function HeroSection() {
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
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-cta bg-[#3BC950] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-hover md:w-auto md:text-xl 3xl:px-6 3xl:py-6 3xl:text-2xl"
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

          <div className="relative z-10 hidden xl:block xl:self-stretch 3xl:-ml-12">
            <div className="absolute inset-0 flex items-end 3xl:pr-15.75">
              <div className="relative aspect-3/2 w-full rounded-4xl border-2 border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute inset-0 overflow-hidden rounded-[1.85rem]">
                  <img
                    src={heroPhoto}
                    alt="Zespół GreenByte podczas pracy nad projektem"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[rgba(37,116,42,0.2)]" />
                </div>
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 rounded-cta border border-[#1B6C33] bg-[#174D2E] px-6.25 py-6.25">
                  <p className="text-base font-bold text-[#42DD71]">Technologie</p>
                  <div className="mt-3 flex flex-col gap-3">
                    {heroTechnologyRows.map((row) => (
                      <div key={row.join('-')} className="flex flex-wrap gap-3">
                        {row.map((technology) => (
                          <div
                            key={technology}
                            className="rounded-[0.9375rem] bg-[#185C2F] px-3 py-2 text-[0.9375rem] font-bold text-[#98D9B0]"
                          >
                            {technology}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-x-9 bottom-2 flex items-center gap-3 rounded-2xl border border-[#567278] bg-[rgba(16,34,21,0.64)] px-4 py-2 backdrop-blur-md 3xl:bottom-7.25 3xl:min-h-24 3xl:gap-4 3xl:rounded-4xl 3xl:px-5 3xl:py-[0.84375rem]">
                  <div className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-cta bg-[#3BC950]">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8.5 w-8.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.25 15L13.75 17.5L18.75 12.5"
                        stroke="white"
                        strokeWidth="2.08333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z"
                        stroke="white"
                        strokeWidth="1.66667"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-base font-bold text-[#FFFFFF] 3xl:text-[1.25rem]">
                      Projekt dostarczony w terminie
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#36E779] 3xl:text-[1.125rem]">
                      System ERP dla klienta z branży logistycznej
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
