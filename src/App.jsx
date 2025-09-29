import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import { initSpotlightScroll } from './utils/spotlightScroll'
import './styles/index.css'

function App() {
  useEffect(() => {
    const cleanup = initSpotlightScroll()
    return cleanup
  }, [])

  return (
    <div className="App">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <WorkExperience />
        <Projects />
      </motion.main>
    </div>
  )
}

export default App
