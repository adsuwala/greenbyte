import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const contactInfo = [
    { 
      label: "E-mail", 
      value: "hello@greenbyte.pl", 
      isLink: true, 
      href: "mailto:hello@greenbyte.pl",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 5.25L9.7725 9.525C9.54095 9.67007 9.27324 9.74701 9 9.74701C8.72676 9.74701 8.45905 9.67007 8.2275 9.525L1.5 5.25" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: "Telefon", 
      value: "+48 500 200 300", 
      isLink: true, 
      href: "tel:+48500200300",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4999 12.6901V14.9401C16.5008 15.1489 16.458 15.3557 16.3743 15.5471C16.2907 15.7385 16.1679 15.9103 16.014 16.0515C15.8601 16.1927 15.6784 16.3002 15.4805 16.3671C15.2826 16.434 15.073 16.4589 14.8649 16.4401C12.5571 16.1893 10.3402 15.4007 8.39245 14.1376C6.58032 12.9861 5.04395 11.4497 3.89245 9.63757C2.62493 7.68098 1.83613 5.45332 1.58995 3.13507C1.57121 2.92767 1.59586 2.71864 1.66233 2.52129C1.72879 2.32394 1.83563 2.14259 1.97602 1.98879C2.11642 1.83499 2.2873 1.7121 2.47779 1.62796C2.66828 1.54382 2.87421 1.50027 3.08245 1.50007H5.33245C5.69643 1.49649 6.04929 1.62538 6.32527 1.86272C6.60125 2.10006 6.78151 2.42966 6.83245 2.79007C6.92742 3.51012 7.10354 4.21712 7.35745 4.89757C7.45836 5.16602 7.4802 5.45776 7.42038 5.73823C7.36056 6.01871 7.2216 6.27616 7.01995 6.48007L6.06745 7.43257C7.13512 9.31023 8.68979 10.8649 10.5675 11.9326L11.5199 10.9801C11.7239 10.7784 11.9813 10.6395 12.2618 10.5796C12.5423 10.5198 12.834 10.5417 13.1024 10.6426C13.7829 10.8965 14.4899 11.0726 15.21 11.1676C15.5743 11.219 15.907 11.4025 16.1448 11.6832C16.3827 11.9639 16.5091 12.3223 16.4999 12.6901Z" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: "Adres", 
      value: "aleja Grunwaldzka 372A", 
      subtitle: "80-266 Gdańsk",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 7.5C15 11.2448 10.8457 15.1447 9.45075 16.3492C9.32079 16.447 9.1626 16.447 9 16.447C8.8374 16.447 8.67921 16.447 8.54925 16.3492C7.15425 15.1447 3 11.2448 3 7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5Z" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: "Czas odpowiedzi", 
      value: "Do 24h roboczych",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 4.5V9L12 10.5" stroke="#2FA63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const processSteps = [
    "Analiza Twojego zgłoszenia przez eksperta.",
    "Przygotowanie wstępnej propozycji.",
    "Krótka rozmowa telefoniczna lub online.",
    "Przesłanie darmowego estymatu projektu."
  ];

  const inputBaseClasses = "w-full bg-[#F9FAFC] border border-[#F3F4F6] rounded-[10px] xl:rounded-[20px] px-[10px] xl:px-5 py-[10.5px] xl:py-[14px] font-bold text-[#364153] outline-none transition-all focus:border-[#00A63E] focus:ring-2 focus:ring-[#00A63E]/10 placeholder:text-[#949495]/57 placeholder:font-bold";
  const labelClasses = "text-[14px] xl:text-[20px] font-bold text-[#364153] ml-1";

  const SelectIcon = () => (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="#364153" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="px-4 pt-18.75 xl:pt-28.75 pb-20 xl:pb-28.75 bg-white">
      <div className="mx-auto max-w-navbar">
        <SectionHeader 
          label="Kontakt"
          title="Porozmawiajmy o Twoim projekcie"
          description="Wypełnij formularz, a odezwiemy się do Ciebie w ciągu 24 godzin roboczych z propozycją bezpłatnej konsultacji."
          align="center"
        />

        <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-navbar mx-auto">
          <div className="w-full lg:w-134.5 shrink-0 flex flex-col self-end">
            <div className="flex flex-col gap-6 lg:gap-10">
              <div className="bg-[#F9FAFC] rounded-[25px] p-6 border border-[#F3F4F6] flex flex-col gap-5 xl:gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-10 h-10 shrink-0 bg-[#DCFCE7] rounded-[13px] flex items-center justify-center">{info.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-[#657084] text-[12px] xl:text-[16px] font-medium leading-none mb-1">{info.label}</span>
                      {info.isLink ? (
                        <a href={info.href} className="text-[#1D2A39] text-[14px] xl:text-[20px] font-semibold hover:text-[#00A63E] transition-colors">{info.value}</a>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-[#1D2A39] text-[14px] xl:text-[20px] font-semibold">{info.value}</span>
                          {info.subtitle && <span className="text-[#1D2A39] text-[14px] xl:text-[20px] font-semibold">{info.subtitle}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-[#052E16] to-[#065F46] rounded-[25px] p-6 relative overflow-hidden flex flex-col">
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-[15.2px] xl:text-[24px] mb-4 leading-tight">Co się dzieje po wysłaniu formularza?</h3>
                  <ul className="flex flex-col gap-4">
                    {processSteps.map((step, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <span className="w-6 h-6 xl:w-8 xl:h-8 shrink-0 bg-[#2B7D3A] rounded-full flex items-center justify-center text-white font-bold text-[12px] xl:text-[16px]">{index + 1}</span>
                        <span className="text-[#C8EBD5] font-bold text-[14px] xl:text-[20px]">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex-1 p-0 lg:p-2 self-start">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 xl:gap-y-4.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-full-name" className={labelClasses}>Imię i nazwisko <span className="text-red-500">*</span></label>
                <input id="contact-full-name" type="text" placeholder="np. Jan Kowalski" required className={`${inputBaseClasses} text-[14px] xl:text-[20px] placeholder:text-[12px] xl:placeholder:text-[19px]`} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className={labelClasses}>Adres e-mail <span className="text-red-500">*</span></label>
                <input id="contact-email" type="email" placeholder="twoj@email.pl" required className={`${inputBaseClasses} text-[14px] xl:text-[20px] placeholder:text-[12px] xl:placeholder:text-[19px]`} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className={labelClasses}>Firma</label>
                <input id="contact-company" type="text" placeholder="Nazwa Twojej firmy" className={`${inputBaseClasses} text-[14px] xl:text-[20px] placeholder:text-[12px] xl:placeholder:text-[19px]`} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className={labelClasses}>Numer telefonu</label>
                <input id="contact-phone" type="tel" placeholder="+48 000 000 000" className={`${inputBaseClasses} text-[14px] xl:text-[20px] placeholder:text-[12px] xl:placeholder:text-[19px]`} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label id="contact-project-type-label" htmlFor="contact-project-type" className={labelClasses}>Typ projektu</label>
                <div className="relative">
                  <select
                    id="contact-project-type"
                    name="projectType"
                    aria-label="Typ projektu"
                    aria-labelledby="contact-project-type-label"
                    title="Typ projektu"
                    className={`${inputBaseClasses} text-[12px] xl:text-[16px] appearance-none pr-12 cursor-pointer`}
                  >
                    <option value="">Wybierz typ projektu</option>
                    <option value="web">Aplikacja webowa</option>
                    <option value="erp">System ERP/CRM</option>
                    <option value="mobile">Aplikacja mobilna</option>
                    <option value="legacy">Rozwój istniejącego projektu</option>
                    <option value="other">Inne</option>
                  </select>
                  <SelectIcon />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label id="contact-budget-label" htmlFor="contact-budget" className={labelClasses}>Szacowany budżet</label>
                <div className="relative">
                  <select
                    id="contact-budget"
                    name="budgetRange"
                    aria-label="Szacowany budżet"
                    aria-labelledby="contact-budget-label"
                    title="Szacowany budżet"
                    className={`${inputBaseClasses} text-[12px] xl:text-[16px] appearance-none pr-12 cursor-pointer`}
                  >
                    <option value="">Wybierz przedział</option>
                    <option value="small">Poniżej 10 tys. PLN</option>
                    <option value="med">10 - 25 tys. PLN</option>
                    <option value="large">25 - 50 tys. PLN</option>
                    <option value="enterprise">50 - 100 tys. PLN</option>
                    <option value="plus">Powyżej 100 tys. PLN</option>
                  </select>
                  <SelectIcon />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label htmlFor="contact-message" className={labelClasses}>Opis projektu / pytanie <span className="text-red-500">*</span></label>
                <textarea id="contact-message" rows={4} required placeholder="Opisz krótko swój pomysł lub zadaj nam pytanie..." className={`${inputBaseClasses} text-[14px] xl:text-[20px] placeholder:text-[12px] xl:placeholder:text-[19px] resize-none`} />
              </div>

              <div className="md:col-span-2 flex items-start gap-3">
                <input id="contact-consent" type="checkbox" required className="mt-1 w-4 h-4 rounded border-[#F3F4F6] text-[#00A63E] border accent-[#00A63E] cursor-pointer" />
                <label htmlFor="contact-consent" className="text-[12px] xl:text-[16px] font-bold text-[#6A7282] leading-tight cursor-default">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez GreenByte Solutions sp. z o.o. w celu odpowiedzi na zapytanie. Dane nie będą udostępniane osobom trzecim.&nbsp;
                  <a href="#" className="text-[#2B7D3A] underline font-bold cursor-pointer">Polityka prywatności</a>
                </label>
              </div>

              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className="w-full h-13 xl:h-14.5 bg-[#2FA63D] hover:bg-[#288e34] text-white font-bold rounded-cta transition-all shadow-lg shadow-[#2FA63D]/20 flex items-center justify-center gap-3 overflow-hidden"
                >
                  {status === 'idle' && (
                    <>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.719 18.9755C12.7522 19.0583 12.81 19.129 12.8846 19.1781C12.9591 19.2271 13.0469 19.2522 13.1362 19.2499C13.2254 19.2476 13.3118 19.2181 13.3838 19.1653C13.4558 19.1125 13.5099 19.0389 13.5388 18.9545L19.2263 2.32948C19.2543 2.25195 19.2597 2.16805 19.2417 2.08759C19.2238 2.00714 19.1833 1.93345 19.125 1.87516C19.0667 1.81687 18.993 1.77639 18.9126 1.75845C18.8321 1.74051 18.7482 1.74585 18.6707 1.77386L2.0457 7.46136C1.96126 7.49032 1.8877 7.54441 1.83489 7.61638C1.78208 7.68835 1.75255 7.77476 1.75027 7.864C1.74798 7.95323 1.77305 8.04104 1.8221 8.11562C1.87116 8.1902 1.94185 8.24799 2.0247 8.28123L8.96345 11.0637C9.1828 11.1516 9.3821 11.2829 9.54932 11.4498C9.71655 11.6167 9.84824 11.8158 9.93645 12.035L12.719 18.9755Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.1222 1.87891L9.54974 11.4505" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[16px] xl:text-[20px]">Wyślij wiadomość</span>
                    </>
                  )}
                  
                  {status === 'loading' && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  )}

                  {status === 'success' && (
                    <div className="flex items-center gap-2 animate-in zoom-in duration-300">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="#2FA63D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[16px] xl:text-[20px]">Wysłano!</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
