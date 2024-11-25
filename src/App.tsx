import { useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import ResumeDownload from '@/components/ResumeDownload';
import { Certifications } from '@/components/Certifications';


function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
          <main className="container mx-auto px-4">
          {/* Main content sections */}
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <ResumeDownload />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
