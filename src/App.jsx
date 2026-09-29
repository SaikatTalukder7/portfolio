// Main App component.
// This is the "page layout" — it just places every section in order.
// Each section is its own component, imported from ./components/
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />        {/* Top intro section with photo, name, and CTA buttons */}
        <About />       {/* Bio + coding track (Codeforces, CodeChef, etc.) */}
        <Skills />      {/* Skills grouped by category */}
        <Projects />    {/* Project cards with GitHub links */}
        <Education />   {/* Degree, coursework, academic activity */}
        <Contact />     {/* Contact info, social links, and message form */}
      </main>
      <Footer />
    </>
  )
}

export default App
