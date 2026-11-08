import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/project'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
