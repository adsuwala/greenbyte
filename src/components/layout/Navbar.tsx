import { useEffect, useState } from 'react'
import brandMark from '../../assets/brand-mark.svg'

const navItems = [
  { label: 'Usługi', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showSolidNavbar = isScrolled || isOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        showSolidNavbar ? 'bg-app' : 'bg-transparent'
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          showSolidNavbar ? 'border-slate-200/80' : 'border-transparent'
        }`}
      >
        <nav
          aria-label="Główna nawigacja"
          className="mx-auto w-full max-w-6xl px-4 py-6 max-[22.75rem]:px-3 max-[22.75rem]:py-4 sm:px-6 lg:px-8 3xl:max-w-navbar 3xl:px-0"
        >
          <div className="flex items-center justify-between gap-4 max-[22.75rem]:gap-2">
            <a
              href="#home"
              aria-label="GreenByte Solutions, strona główna"
              className="flex min-w-0 flex-1 items-center gap-1 max-[22.75rem]:gap-0.5 lg:flex-none"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={brandMark}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 rounded-2xl max-[22.75rem]:h-8 max-[22.75rem]:w-8 sm:h-11 sm:w-11"
              />
              <p
                className={`truncate font-syne text-xl font-bold leading-none max-[22.75rem]:text-base sm:text-lg 3xl:text-logo-desktop ${
                  showSolidNavbar ? 'text-slate-950' : 'text-white'
                }`}
              >
                GreenByte{' '}
                <span className="text-[#00A63E]">Solutions</span>
              </p>
            </a>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-8">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center rounded-full px-1.25 py-0 text-lg leading-none font-medium transition 3xl:text-nav-desktop ${
                      showSolidNavbar
                        ? 'text-slate-600 hover:text-slate-950'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-cta bg-[#3BC950] px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-hover 3xl:text-nav-desktop"
              >
                Bezpłatna konsultacja
              </a>
            </div>

            <button
              type="button"
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition max-[22.75rem]:h-10 max-[22.75rem]:w-10 lg:hidden ${
                showSolidNavbar
                  ? 'text-slate-950 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span aria-hidden="true" className="relative block h-6 w-6">
                <span
                  className={`absolute left-0 h-0.75 w-6 rounded-xl bg-current transition-all duration-300 ease-out ${
                    isOpen
                      ? 'top-[0.65625rem] rotate-45'
                      : 'top-px rotate-0'
                  }`}
                />
                <span
                  className={`absolute top-[0.65625rem] left-0 h-0.75 w-6 rounded-xl bg-current transition-all duration-200 ease-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.75 w-6 rounded-xl bg-current transition-all duration-300 ease-out ${
                    isOpen
                      ? 'top-[0.65625rem] -rotate-45'
                      : 'top-5 rotate-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="lg:hidden"
      >
        <nav
          aria-label="Nawigacja mobilna"
          className="mx-auto max-w-6xl px-4 py-5 max-[22.75rem]:px-3 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-6 px-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl text-base leading-none font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 max-[22.75rem]:text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-cta bg-[#3BC950] py-3 text-sm font-bold text-white transition hover:bg-brand-hover"
              onClick={() => setIsOpen(false)}
            >
              Bezpłatna konsultacja
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
