// -----------------------------
// src/App.jsx
// -----------------------------
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhoIHelp from './components/WhoIHelp.jsx';
import WhoIHelpTwo from './components/WhoIHelpTwo.jsx';
import FAQ from "./components/FAQ.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <WhoIHelpTwo />
        <WhoIHelp />
        
        {/* <Services /> */}
        {/* <HowItWorks /> */}
        <About />
        {/* <Pricing /> */}
        <Testimonials />
        {/* <Contact /> */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}