import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const faqData = [
  {
    question: "Jak przebiega proces realizacji projektu od początku do końca?",
    answer: "Nasz proces dzielimy na 4 główne etapy: 1. Warsztaty i analiza potrzeb, gdzie definiujemy wymagania. 2. Projektowanie UX/UI, czyli tworzenie makiety Twojego systemu. 3. Development (programowanie) prowadzony w duchu Agile, z regularnymi prezentacjami postępów. 4. Testy, wdrożenie oraz przeszkolenie Twojego zespołu."
  },
  {
    question: "Ile kosztuje stworzenie aplikacji webowej lub systemu wewnętrznego?",
    answer: "Każdy projekt wyceniamy indywidualnie na podstawie stopnia skomplikowania oraz zakresu funkcjonalnego. Koszt zależy od liczby integracji z zewnętrznymi systemami, poziomu zaawansowania panelu administracyjnego oraz wymagań dotyczących bezpieczeństwa. Po pierwszej konsultacji przygotowujemy darmowy, wstępny kosztorys."
  },
  {
    question: "Jak długo trwa realizacja typowego projektu?",
    answer: "Czas realizacji mniejszych narzędzi lub MVP (Minimum Viable Product) to zazwyczaj 6-8 tygodni. Większe, dedykowane systemy wewnętrzne dla firm wymagają od 3 do 6 miesięcy. Zawsze staramy się dowozić pierwsze funkcjonalne wersje systemu jak najszybciej, abyś mógł zacząć z nich korzystać jeszcze w trakcie trwania developmentu."
  },
  {
    question: "Co wyróżnia GreenByte Solutions spośród innych firm IT?",
    answer: "Stawiamy na partnerstwo, nie tylko na kodowanie. Wyróżnia nas biznesowe podejście — nie budujemy tylko tego, o co poprosisz, ale doradzamy rozwiązania, które realnie zredukują koszty Twojej firmy lub zwiększą jej sprzedaż. Ponadto zapewniamy pełną transparentność prac i własność kodu źródłowego dla klienta."
  },
  {
    question: "Czy oferujecie wsparcie techniczne po zakończeniu projektu?",
    answer: "Oczywiście. Wdrażając system, nie zostawiamy klienta samego. Zapewniamy opiekę techniczną (SLA), monitoring 24/7, regularne kopie zapasowe oraz szybki czas reakcji na wszelkie zgłoszenia. Możemy również stać się Twoim zewnętrznym działem IT, który stale rozwija oprogramowanie o nowe moduły."
  },
  {
    question: "Jakie technologie wykorzystujecie?",
    answer: "Specjalizujemy się w nowoczesnym i bezpiecznym stacku technologicznym: React, Next.js, Node.js oraz TypeScript. Jako baz danych używamy PostgreSQL, a nasze systemy hostujemy w profesjonalnych chmurach jak AWS czy Vercel, co gwarantuje niemal 100% dostępność systemu i łatwą skalowalność."
  },
  {
    question: "Czy możecie przejąć i rozwinąć istniejący projekt po poprzedniej firmie?",
    answer: "Tak, to jedna z naszych specjalności. Przeprowadzamy audyt istniejącego kodu, oceniamy jego jakość i potencjalne ryzyka, a następnie przygotowujemy plan naprawczy lub strategię dalszego rozwoju. Pomagamy firmom wyjść z tzw. długu technologicznego i odzyskać pełną kontrolę nad ich oprogramowaniem."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 pt-18.75 xl:pt-28.75 pb-20 xl:pb-28.75 bg-app">
      <div className="mx-auto max-w-navbar">
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-24">

          <div className="mb-12 lg:mb-0">
            <SectionHeader 
              label="FAQ"
              title="Masz pytania? Mamy odpowiedzi."
              description="Poniżej zebraliśmy odpowiedzi na najczęściej zadawane pytania. Jeśli nie znalazłeś tego, czego szukasz — po prostu napisz do nas."
              align="left"
            />
            
            <div className="mt-7.5 xl:mt-3.75">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-cta bg-[#3BC950] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-hover md:text-xl xl:px-8 xl:py-5"
              >
                Zadaj własne pytanie
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 xl:h-6 xl:w-6"
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
            </div>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white border transition-all duration-300 rounded-[15px] overflow-hidden ${isOpen ? 'border-[#B9F8CF] shadow-sm shadow-[#B9F8CF]/10' : 'border-[#F3F4F6]'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-5 xl:py-7 px-5 xl:px-8 text-left group focus:outline-none"
                  >
                    <span className={`text-[14px] xl:text-[20px] font-medium font-sans transition-colors duration-300 ${isOpen ? 'text-[#00A63E]' : 'text-[#1D2A39] group-hover:text-[#00A63E]'}`}>
                      {item.question}
                    </span>
                    <div 
                      className={`shrink-0 ml-4 w-8 h-8 xl:w-12 xl:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#2FA63D]' : 'bg-[#F3F4F6]'}`}
                    >
                      {isOpen ? (
                        <svg width="32" height="32" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-7 xl:h-7">
                          <path d="M10.5 8.75L7 5.25L3.5 8.75" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="32" height="32" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-7 xl:h-7">
                          <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#B0B7C1" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 xl:px-8 pb-6 xl:pb-8">
                      <p className="font-sans font-medium text-[#838A97] text-[14px] xl:text-[20px] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
