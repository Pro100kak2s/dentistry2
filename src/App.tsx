import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Doctors } from './components/Doctors';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
