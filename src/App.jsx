import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyUs from "./components/WhyUs"
import Services from "./components/Services"
import Fleet from "./components/Fleet"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import FinalCta from "./components/FinalCta"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Review from "./components/Review"
import PromoModal from "./components/PromoModal"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Fleet />
      <Testimonials />
      <Review />
      <Contact />
      <FinalCta />
      <Footer />
      <WhatsAppButton />
      <PromoModal />
    </>
  )
}

export default App