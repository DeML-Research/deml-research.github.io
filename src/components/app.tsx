import { useState, useEffect } from 'react'
import { Header } from './header'
import { Navigation } from './navigation'
import { About } from './about'
import { Research } from './research'
import { Publications } from './publications'
import { Talks } from './talks'
import { Contact } from './contact'
import { Footer } from './footer'

export default function Component() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-mono flex flex-col">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        
        body {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
      <div className="max-w-3xl mx-auto flex-grow">
        <Header />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isMobile={isMobile} />
        <main className="mt-10">
          {activeSection === 'about' && <About />}
          {activeSection === 'research' && <Research />}
          {activeSection === 'publications' && <Publications />}
          {activeSection === 'talks' && <Talks />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
      <Footer />
    </div>
  )
}
