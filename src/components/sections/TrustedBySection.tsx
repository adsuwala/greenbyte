function TrustedBySection() {
  return (
    <section className="mx-4 mt-8.75 bg-white py-12.5 px-5 sm:px-6 lg:px-8 xl:mx-0 xl:px-4">
      <div className="mx-auto max-w-6xl 3xl:max-w-navbar">
        <h2 className="text-center font-syne text-[14px] font-bold tracking-[0.05em] text-[#657084] md:text-[16px] xl:text-[28px]">
          ZAUFALI NAM
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20 xl:gap-x-7.5">
          {[
            'LogiTrans',
            'NovaTech',
            'ModaCo Group',
            'HealthFirst',
            'DesignStudio',
            'BuildWave',
            'FinEdge',
            'RetailPro',
          ].map((company) => (
            <a
              href={`https://www.google.com/search?q=${company}`}
              target="_blank"
              rel="noopener noreferrer"
              key={company}
              className="font-syne text-[16px] font-semibold text-[#6A7282] transition-all duration-300 hover:scale-110 hover:text-[#2F7A3A] md:text-[18px] xl:text-[28px]"
            >
              {company}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
