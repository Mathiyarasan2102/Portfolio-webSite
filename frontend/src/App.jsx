import About from './About'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SystemThinking from './components/SystemThinking'


import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className='bg-gray-900'>
        <Header />
        <Hero />
        <div className="section-divider"></div>
        <About />
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
