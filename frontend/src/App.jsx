import About from './About'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SystemThinking from './components/SystemThinking'


import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Check if the user has already visited the site in this session/browser
    const hasVisited = localStorage.getItem('hasVisitedPortfolio');

    if (!hasVisited) {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      // Send the notify request without blocking anything
      fetch(`${apiUrl}/notify-visit`, { method: 'POST' })
        .then(() => {
          localStorage.setItem('hasVisitedPortfolio', 'true');
        })
        .catch(err => console.log('Notification failed:', err));
    }
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='bg-gray-900'>
        <Header />
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <SystemThinking />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App
