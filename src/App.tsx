import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import TrustedBySection from './components/sections/TrustedBySection'
import ServicesSection from './components/sections/ServicesSection'
import CTASection from './components/sections/CTASection'
import PortfolioSection from './components/sections/PortfolioSection'
import FAQSection from './components/sections/FAQSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-app font-sans text-slate-900">
      <Navbar />

      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <CTASection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
