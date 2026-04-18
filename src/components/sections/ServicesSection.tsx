import SectionHeader from "../ui/SectionHeader";

function ServicesSection() {
  return (
    <section id="services" className="bg-app pt-25 xl:pt-40 pb-20 px-4">
      <div className="mx-auto max-w-350 3xl:max-w-navbar">
        <SectionHeader
          label="NASZE USŁUGI"
          title={
            <>
              Kompleksowe rozwiązania <br className="hidden md:block" />{" "}
              technologiczne dla Twojego biznesu
            </>
          }
          description="Dobieramy zakres prac do indywidualnych potrzeb - niezależnie, czy dopiero startujesz, czy chcesz zmodernizować istniejące systemy."
          align="center"
        />

        <div className="mt-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Aplikacje webowe",
              description: "Tworzymy skalowalne platformy i serwisy internetowe oparte o najnowsze technologie, które budują przewagę konkurencyjną.",
              color: "#2FA63D",
              tags: ["React / Next.js", "TypeScript", "Node.js"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3.5C16.5064 8.21827 14 14.4843 14 21C14 27.5157 16.5064 33.7817 21 38.5C25.4936 33.7817 28 27.5157 28 21C28 14.4843 25.4936 8.21827 21 3.5Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 21H38.5" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Systemy wewnętrzne",
              description: "Projektujemy i wdrażamy systemy CRM, ERP oraz dedykowane narzędzia usprawniające obieg informacji wewnątrz organizacji.",
              color: "#295DFB",
              tags: ["Automatyzacja procesów", "Systemy CRM/ERP", "Integracje API"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M21.385 3.5H20.615C19.6867 3.5 18.7965 3.86875 18.1401 4.52513C17.4838 5.1815 17.115 6.07174 17.115 7V7.315C17.1144 7.92877 16.9524 8.53158 16.6452 9.06297C16.338 9.59435 15.8965 10.0356 15.365 10.3425L14.6125 10.78C14.0804 11.0872 13.4769 11.2489 12.8625 11.2489C12.2481 11.2489 11.6446 11.0872 11.1125 10.78L10.85 10.64C10.0469 10.1767 9.09272 10.051 8.19701 10.2905C7.3013 10.5301 6.53722 11.1152 6.0725 11.9175L5.6875 12.5825C5.22421 13.3856 5.09853 14.3398 5.33804 15.2355C5.57755 16.1312 6.16269 16.8953 6.965 17.36L7.2275 17.535C7.75649 17.8404 8.19634 18.2789 8.50334 18.807C8.81035 19.335 8.97382 19.9342 8.9775 20.545V21.4375C8.97995 22.0542 8.81939 22.6607 8.51208 23.1954C8.20477 23.7301 7.76162 24.1741 7.2275 24.4825L6.965 24.64C6.16269 25.1047 5.57755 25.8688 5.33804 26.7645C5.09853 27.6602 5.22421 28.6144 5.6875 29.4175L6.0725 30.0825C6.53722 30.8848 7.3013 31.4699 8.19701 31.7095C9.09272 31.949 10.0469 31.8233 10.85 31.36L11.1125 31.22C11.6446 30.9128 12.2481 30.7511 12.8625 30.7511C13.4769 30.7511 14.0804 30.9128 14.6125 31.22L15.365 31.6575C15.8965 31.9644 16.338 32.4057 16.6452 32.937C16.9524 33.4684 17.1144 34.0712 17.115 34.685V35C17.115 35.9283 17.4838 36.8185 18.1401 37.4749C18.7965 38.1313 19.6867 38.5 20.615 38.5H21.385C22.3133 38.5 23.2035 38.1313 23.8599 37.4749C24.5163 36.8185 24.885 35.9283 24.885 35V34.685C24.8856 34.0712 25.0477 33.4684 25.3548 32.937C25.662 32.4057 26.1035 31.9644 26.635 31.6575L27.3875 31.22C27.9196 30.9128 28.5231 30.7511 29.1375 30.7511C29.7519 30.7511 30.3554 30.9128 30.8875 31.22L31.15 31.36C31.9531 31.8233 32.9073 31.949 33.803 31.7095C34.6987 31.4699 35.4628 30.8848 35.9275 30.0825L36.3125 29.4C36.7758 28.5969 36.9015 27.6427 36.662 26.747C36.4225 25.8513 35.8373 25.0872 35.035 24.6225L34.7725 24.4825C34.2384 24.1741 33.7952 23.7301 33.4879 23.1954C33.1806 22.6607 33.0201 22.0542 33.0225 21.4375V20.5625C33.0201 19.9458 33.1806 19.3393 33.4879 18.8046C33.7952 18.2699 34.2384 17.8259 34.7725 17.5175L35.035 17.36C35.8373 16.8953 36.4225 16.1312 36.662 15.2355C36.9015 14.3398 36.7758 13.3856 36.3125 12.5825L35.9275 11.9175C35.4628 11.1152 34.6987 10.5301 33.803 10.2905C32.9073 10.051 31.9531 10.1767 31.15 10.64L30.8875 10.78C30.3554 11.0872 29.7519 11.2489 29.1375 11.2489C28.5231 11.2489 27.9196 11.0872 27.3875 10.78L26.635 10.3425C26.1035 10.0356 25.662 9.59435 25.3548 9.06297C25.0477 8.53158 24.8856 7.92877 24.885 7.315V7C24.885 6.07174 24.5163 5.1815 23.8599 4.52513C23.2035 3.86875 22.3133 3.5 21.385 3.5Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Aplikacje mobilne",
              description: "Dostarczamy natywne i hybrydowe rozwiązania na iOS oraz Androida, stawiając na najwyższą jakość UX i wydajność.",
              color: "#9252F5",
              tags: ["iOS & Android", "React Native", "Dedykowane UI"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M29.75 3.5H12.25C10.317 3.5 8.75 5.067 8.75 7V35C8.75 36.933 10.317 38.5 12.25 38.5H29.75C31.683 38.5 33.25 36.933 33.25 35V7C33.25 5.067 31.683 3.5 29.75 3.5Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 31.5H21.0191" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Analityka i dashboardy",
              description: "Przekształcamy surowe dane w czytelne raporty i interaktywne pulpity menedżerskie, które wspierają decyzje biznesowe.",
              color: "#F66C1C",
              tags: ["Business Intelligence", "Python / R", "Real-time Monitoring"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M31.5 35V17.5" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 35V7" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 35V24.5" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Bezpieczeństwo i audyt",
              description: "Zapewniamy kompleksową ochronę Twojej infrastruktury cyfrowej poprzez audyty bezpieczeństwa i testy penetracyjne.",
              color: "#E7060B",
              tags: ["Testy penetracyjne", "Audyty RODO/ISO", "Security First"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M35 22.7501C35 31.5001 28.875 35.8751 21.595 38.4126C21.2138 38.5417 20.7997 38.5356 20.4225 38.3951C13.125 35.8751 7 31.5001 7 22.7501V10.5001C7 10.0359 7.18437 9.59081 7.51256 9.26262C7.84075 8.93443 8.28587 8.75005 8.75 8.75005C12.25 8.75005 16.625 6.65005 19.67 3.99005C20.0407 3.6733 20.5124 3.49927 21 3.49927C21.4876 3.49927 21.9593 3.6733 22.33 3.99005C25.3925 6.66755 29.75 8.75005 33.25 8.75005C33.7141 8.75005 34.1592 8.93443 34.4874 9.26262C34.8156 9.59081 35 10.0359 35 10.5001V22.7501Z" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Wsparcie i utrzymanie IT",
              description: "Oferujemy profesjonalną opiekę posprzedażową, szybkie reagowanie na incydenty oraz ciągłą optymalizację Twoich systemów.",
              color: "#2D9789",
              tags: ["Wsparcie 24/7", "Cloud Management", "Optymalizacja koszów"],
              icon: (
                <svg viewBox="0 0 42 42" fill="none" className="w-full h-full">
                  <path d="M5.25 24.5H10.5C11.4283 24.5 12.3185 24.8687 12.9749 25.5251C13.6313 26.1815 14 27.0717 14 28V33.25C14 34.1783 13.6313 35.0685 12.9749 35.7249C12.3185 36.3813 11.4283 36.75 10.5 36.75H8.75C7.82174 36.75 6.9315 36.3813 6.27513 35.7249C5.61875 35.0685 5.25 34.1783 5.25 33.25V21C5.25 16.8228 6.90937 12.8168 9.86307 9.86307C12.8168 6.90937 16.8228 5.25 21 5.25C25.1772 5.25 29.1832 6.90937 32.1369 9.86307C35.0906 12.8168 36.75 16.8228 36.75 21V33.25C36.75 34.1783 36.3813 35.0685 35.7249 35.7249C35.0685 36.3813 34.1783 36.75 33.25 36.75H31.5C30.5717 36.75 29.6815 36.3813 29.0251 35.7249C28.3687 35.0685 28 34.1783 28 33.25V28C28 27.0717 28.3687 26.1815 29.0251 25.5251C29.6815 24.8687 30.5717 24.5 31.5 24.5H36.75" stroke="currentColor" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-transparent hover:border-[#3BB056]/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div 
                className="w-10 h-10 sm:w-13 sm:h-13 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center mb-3.75 transition-all duration-300 group-hover:scale-110 shrink-0"
                style={{ 
                  backgroundColor: `${service.color}15`,
                  color: service.color 
                }}
              >
                <div className="w-5.5 h-5.5 sm:w-7 sm:h-7 xl:w-10.5 xl:h-10.5">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="font-syne text-[16px] md:text-[22px] xl:text-[30px] font-semibold md:font-bold text-black mb-3.75">
                {service.title}
              </h3>
              
              <p className="text-[#7B8291] text-[14px] md:text-[16px] xl:text-[20px] leading-relaxed mb-5 xl:mb-7.5">
                {service.description}
              </p>

              <ul className="mt-auto space-y-2">
                {service.tags.map((tag, tagIndex) => (
                  <li key={tagIndex} className="flex items-center text-[12px] xl:text-[16px] font-medium text-[#7B8291]">
                    <span 
                      className="w-1.5 h-1.5 rounded-full mr-2 shrink-0" 
                      style={{ backgroundColor: service.color }}
                    />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
