import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const projects = [
  {
    company: "LogTrans Sp. z o.o.",
    title: "Fleet Manager Pro",
    description: "System zarządzania flotą pojazdów z modułem GPS, harmonogramem przeglądów i raportowaniem kosztów dla firmy logistycznej.",
    result: "Wynik: Redukcja kosztów operacyjnych o 23%",
    image: "/assets/img/portfolio1.jpeg",
    category: "System ERP",
    tech: ["Next.js", "Stripe", "Vercel", "Tailwind CSS"]
  },
  {
    company: "GreenPower S.A.",
    title: "EcoCharge Network",
    description: "Inteligentna platforma do zarządzania rozproszoną siecią stacji ładowania pojazdów elektrycznych zintegrowana z systemami płatności.",
    result: "Wynik: Obsługa ponad 500 punktów ładowania w czasie rzeczywistym",
    image: "/assets/img/portfolio2.jpeg",
    category: "Aplikacje webowe",
    tech: ["React", "Stripe", "AWS", "Node.js"]
  },
  {
    company: "FinTech Solutions Inc.",
    title: "QuickPay Gateway",
    description: "Nowoczesna i bezpieczna bramka płatnicza dla sektora e-commerce, wspierająca płatności wielowalutowe i automatyczne rozliczenia.",
    result: "Wynik: Skrócenie czasu procesowania transakcji o 40%",
    image: "/assets/img/portfolio3.jpeg",
    category: "E-commerce",
    tech: ["Node.js", "Stripe", "Prisma", "TypeScript"]
  },
  {
    company: "HealthTech Global",
    title: "Patient Connect",
    description: "Kompleksowa platforma telemedyczna integrująca pacjentów z placówkami medycznymi, umożliwiająca wideokonsultacje i e-recepty.",
    result: "Wynik: Obsługa ponad 10 000 wizyt miesięcznie",
    image: "/assets/img/portfolio4.jpeg",
    category: "Analityka",
    tech: ["Next.js", "PostgreSQL", "Twilio", "Radix UI"]
  },
  {
    company: "EcoSteel Industry",
    title: "EcoHeat Optimizer",
    description: "System optymalizacji procesów cieplnych w hutnictwie wykorzystujący algorytmy AI do redukcji zużycia energii.",
    result: "Wynik: Oszczędność energii na poziomie 15% rocznie",
    image: "/assets/img/portfolio5.jpeg",
    category: "Analityka",
    tech: ["Python", "TensorFlow", "React", "Docker"]
  }
];

const categories = ["Wszystkie", "System ERP", "Aplikacje webowe", "E-commerce", "Analityka"];

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredProjects = activeCategory === "Wszystkie" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="px-4 pt-18.75 xl:pt-40 pb-20 xl:pb-40 bg-white">
      <div className="mx-auto max-w-navbar">
        <SectionHeader 
          label="Portfolio"
          title="Projekty, z których jesteśmy dumni"
          description="Każdy projekt to osobna historia. Poznaj wyzwania naszych klientów i rozwiązania, które dostarczyliśmy."
          align="center"
        />
        
        <div className="mt-10 xl:mt-22.5 flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-3.5 xl:px-5 py-1.25 xl:py-[14.5px] rounded-[30px] transition-all duration-300
                  text-[14px] lg:text-[20px] cursor-pointer
                  ${isActive 
                    ? "bg-[#2B7D3A] text-white font-bold shadow-lg shadow-[#2B7D3A]/20" 
                    : "bg-[#F3F4F6] text-[#535D6D] font-semibold hover:bg-[#E5E7EB]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12.5 lg:mt-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border-2 border-[#F6F3F4] rounded-[20px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#3BB056]/20 animate-fade-in"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute top-3.75 xl:top-5 left-3.75 xl:left-5 z-20 flex items-center gap-2 bg-[#257A35] py-1.5 px-3 rounded-[25px] border border-white/10">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-4 xl:h-4">
                    <g clipPath={`url(#clip0_cat_${index})`}>
                      <path d="M7.34182 1.50858C7.12308 1.28977 6.82638 1.16681 6.51699 1.16675H2.33332C2.0239 1.16675 1.72716 1.28966 1.50837 1.50846C1.28957 1.72725 1.16666 2.024 1.16666 2.33341V6.51708C1.16672 6.82648 1.28968 7.12317 1.50849 7.34191L6.58582 12.4192C6.85096 12.6827 7.20955 12.8306 7.58332 12.8306C7.9571 12.8306 8.31569 12.6827 8.58082 12.4192L12.4192 8.58091C12.6826 8.31578 12.8305 7.95719 12.8305 7.58341C12.8305 7.20964 12.6826 6.85105 12.4192 6.58591L7.34182 1.50858Z" stroke="white" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.37501 4.66659C4.53609 4.66659 4.66668 4.536 4.66668 4.37492C4.66668 4.21384 4.53609 4.08325 4.37501 4.08325C4.21393 4.08325 4.08334 4.21384 4.08334 4.37492C4.08334 4.536 4.21393 4.66659 4.37501 4.66659Z" fill="white" stroke="white" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id={`clip0_cat_${index}`}>
                        <rect width="14" height="14" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-white text-[12px] xl:text-[16px] font-bold">
                    {project.category}
                  </span>
                </div>

                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 xl:p-6 flex flex-col flex-1">
                <span className="text-[#2F7A3A] text-[12px] xl:text-[20px] font-medium uppercase tracking-wider mb-0">
                  {project.company}
                </span>
                
                <h3 className="font-sans text-[16px] xl:text-[32px] font-bold text-black mt-1 mb-2.5:mb-[20px]">
                  {project.title}
                </h3>
                
                <p className="text-[#6A7282] text-[14px] xl:text-[20px] font-medium leading-relaxed mb-0 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-5 xl:mt-7.5">
                  <span className="bg-[#F0FDF4] text-[#008236] text-[12px] xl:text-[16px] font-medium py-2 xl:py-4 px-4 rounded-lg w-full block">
                    <strong className="font-bold">Wynik:</strong> {project.result.replace('Wynik: ', '')}
                  </span>
                </div>

                <div className="mt-4 xl:mt-6.25 flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#F3F4F6] text-[#6A7282] text-[12px] xl:text-[16px] font-medium py-1.5 px-3 xl:px-4 rounded-cta"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12.5 xl:mt-16.25 flex flex-col items-center text-center">
          <p className="text-[#6A7282] text-[14px] xl:text-[24px] font-normal mb-3.75">
            To tylko część naszych realizacji. Chcesz zobaczyć więcej?
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 xl:px-8 py-3.5 xl:py-4.5 border border-[#2F7A3A] rounded-[13px] bg-transparent text-[#2F7A3A] text-[14px] xl:text-[20px] font-bold transition-all duration-300 hover:bg-[#2F7A3A] hover:text-white group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white transition-colors duration-300">
              <path d="M10 2H14V6" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66669 9.33333L14 2" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
