import heroPhoto640 from '../../assets/img/hero-640.webp'
import heroPhoto960 from '../../assets/img/hero-960.webp'

const heroTechnologyRows = [
  ['React', 'Node.js'],
  ['PostgreSQL', 'Docker'],
]

function HeroDesktopVisual() {
  return (
    <div className="relative z-10 hidden xl:block xl:self-stretch 3xl:-ml-12">
      <div className="absolute inset-0 flex items-end 3xl:pr-15.75">
        <div className="relative aspect-3/2 w-full rounded-4xl border-2 border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.85rem]">
            <img
              src={heroPhoto640}
              srcSet={`${heroPhoto640} 640w, ${heroPhoto960} 960w`}
              sizes="(min-width: 1920px) 53vw, (min-width: 1280px) 46vw, 100vw"
              width="960"
              height="640"
              fetchPriority="high"
              decoding="async"
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
            <div className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-cta bg-[#2B7D3A]">
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
  )
}

export default HeroDesktopVisual
