function CTASection() {
  return (
    <section className="px-4 pb-20 xl:pb-40">
      <div className="mx-auto 3xl:max-w-navbar max-w-350">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#052E16] to-[#065F46] py-8 xl:py-16 pl-10 pr-10 xl:pr-24">

          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-100 h-100 bg-white opacity-[0.03] blur-[100px] rounded-full shrink-0" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-75 h-75 bg-[#3BB155] opacity-[0.08] blur-[80px] rounded-full shrink-0" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex-1">
              <h2 className="font-syne text-[20px] md:text-[24px] xl:text-[32px] font-bold text-white leading-tight mb-4 xl:mb-4.25">
                Nie wiesz, od czego zacząć?
              </h2>
              <p className="text-[#B9F8CF]/80 text-[14px] md:text-[16px] xl:text-[20px] font-medium mb-6 lg:mb-0 leading-relaxed">
                Umów się na bezpłatną, 30-minutową konsultację i opowiedz nam o swoim projekcie.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-3 bg-[#3BC950] lg:bg-[#3BB155] hover:bg-[#329648] text-[#ffffff] px-6 py-4 xl:py-5 xl:px-8 lg:px-10 lg:py-5 rounded-cta xl:rounded-2xl font-bold text-[14px] md:text-[18px] xl:text-[24px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/20 overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                Umów konsultacje
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="hidden min-[318px]:block transition-transform duration-300 xl:w-6 xl:h-6 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
