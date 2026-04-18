import brandMark from '../../assets/brand-mark.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Usługi", links: ["Aplikacje webowe", "Systemy ERP/CRM", "Aplikacje mobilne", "Analityka i dashboardy", "Audyt techniczny"] },
    { title: "Firma", links: ["O nas", "Blog", "Kariera", "Polityka prywatności", "Regulamin"] },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "#",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 xl:w-5 xl:h-5">
          <path d="M13.3333 6.66602C14.6594 6.66602 15.9311 7.1928 16.8688 8.13048C17.8065 9.06816 18.3333 10.3399 18.3333 11.666V17.4993H14.9999V11.666C14.9999 11.224 14.8244 10.8001 14.5118 10.4875C14.1992 10.1749 13.7753 9.99935 13.3333 9.99935C12.8913 9.99935 12.4673 10.1749 12.1548 10.4875C11.8422 10.8001 11.6666 11.224 11.6666 11.666V17.4993H8.33328V11.666C8.33328 10.3399 8.86007 9.06816 9.79775 8.13048C10.7354 7.1928 12.0072 6.66602 13.3333 6.66602Z" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 7.5H1.66666V17.5H5V7.5Z" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33338 4.99935C4.25386 4.99935 5.00005 4.25316 5.00005 3.33268C5.00005 2.41221 4.25386 1.66602 3.33338 1.66602C2.41291 1.66602 1.66672 2.41221 1.66672 3.33268C1.66672 4.25316 2.41291 4.99935 3.33338 4.99935Z" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "X", 
      href: "#",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 xl:w-5 xl:h-5">
          <path d="M18.3334 3.3327C18.3334 3.3327 17.7501 5.0827 16.6667 6.16603C18.0001 14.4994 8.83338 20.5827 1.66672 15.8327C3.50005 15.916 5.33338 15.3327 6.66672 14.166C2.50005 12.916 0.416717 7.99937 2.50005 4.16603C4.33338 6.3327 7.16672 7.5827 10.0001 7.49937C9.25005 3.99937 13.3334 1.99937 15.8334 4.3327C16.7501 4.3327 18.3334 3.3327 18.3334 3.3327Z" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "GitHub", 
      href: "#",
      icon: (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 xl:w-5 xl:h-5">
          <path d="M12.5 18.3327V14.9993C12.6159 13.9554 12.3166 12.9078 11.6667 12.0827C14.1667 12.0827 16.6667 10.416 16.6667 7.49935C16.7333 6.45768 16.4417 5.43268 15.8333 4.58268C16.0667 3.62435 16.0667 2.62435 15.8333 1.66602C15.8333 1.66602 15 1.66602 13.3333 2.91602C11.1333 2.49935 8.86667 2.49935 6.66667 2.91602C5.00001 1.66602 4.16667 1.66602 4.16667 1.66602C3.91667 2.62435 3.91667 3.62435 4.16667 4.58268C3.5599 5.42925 3.2654 6.46 3.33334 7.49935C3.33334 10.416 5.83334 12.0827 8.33334 12.0827C8.00834 12.491 7.76667 12.9577 7.62501 13.4577C7.48334 13.9577 7.44167 14.4827 7.50001 14.9993V18.3327" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.49998 15.0007C3.74164 16.6673 3.33331 13.334 1.66664 13.334" stroke="#72E59E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-linear-to-b from-[#072E16] to-[#031E0F] pt-13.75 xl:pt-17.5 pb-13.75 xl:pb-17.5 px-4 text-white overflow-hidden relative">
      <div className="mx-auto max-w-navbar relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12.5">

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <img
                src={brandMark}
                alt=""
                className="h-10 w-10 shrink-0 rounded-2xl"
              />
              <p className="font-syne text-[18px] xl:text-[32px] font-bold leading-none text-white">
                GreenByte <span className="text-[#00A63E]">Solutions</span>
              </p>
            </div>
            <p className="text-[#76AC8B] font-medium text-[14px] xl:text-[18px] leading-relaxed max-w-110">
              Tworzymy dedykowane aplikacje webowe i systemy wewnętrzne dla MŚP i start-upów. Przekształcamy wyzwania biznesowe w nowoczesne rozwiązania technologiczne.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-11 h-11 rounded-[14px] bg-[#0E4321] border border-[#145529] flex items-center justify-center hover:bg-[#145529] hover:border-[#72E59E]/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-2.5 xl:gap-3.75 ">
              <h4 className="font-bold text-[#ffffff] text-[14px] xl:text-[18px]">{section.title}</h4>
              <ul className="flex flex-col gap-2.5 xl:gap-3.75">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#6EA182] font-bold text-[14px] xl:text-[18px] hover:text-[#3BC950] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#0C3F20] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#4E7A62] font-medium text-[12px] xl:text-[16px]">
            © {currentYear} GreenByte Solutions sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#4E7A62] font-medium text-[12px] xl:text-[16px] hover:text-[#3BC950] transition-colors">Polityka prywatności</a>
            <a href="#" className="text-[#4E7A62] font-medium text-[12px] xl:text-[16px] hover:text-[#3BC950] transition-colors">Regulamin</a>
            <a href="#" className="text-[#4E7A62] font-medium text-[12px] xl:text-[16px] hover:text-[#3BC950] transition-colors">RODO</a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-125 h-125 bg-[#3BC950]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </footer>
  );
}

export default Footer;
