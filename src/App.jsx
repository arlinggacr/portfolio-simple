import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import IntroPanel from './components/panels/IntroPanel'
import ExperiencePanel from './components/panels/ExperiencePanel'
import ProjectsPanel from './components/panels/ProjectsPanel'
import EducationPanel from './components/panels/EducationPanel'
import { NAV } from './data/resume'

function App() {
  const savedPanel = localStorage.getItem('portfolio-acr-panel') || 'intro'
  const savedTheme = localStorage.getItem('portfolio-acr-theme') || 'dark'

  const [active, setActive] = useState(savedPanel)
  const [theme, setTheme]   = useState(savedTheme)
  const [skillFilter, setSkillFilter] = useState('All skills')
  const [selectedExperience, setSelectedExperience] = useState(0)
  const [emailCopied, setEmailCopied] = useState(false)
  const mainRef = useRef(null)

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-acr-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('portfolio-acr-panel', active)
  }, [active])

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const panels = main.querySelectorAll('.panel')
    const observer = new IntersectionObserver((entries) => {
      const visiblePanel = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visiblePanel) setActive(visiblePanel.target.id)
    }, { root: main, threshold: [0.6, 0.8, 1] })

    panels.forEach((panel) => observer.observe(panel))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const panel = document.getElementById(active)
    if (panel && active !== 'intro') {
      panel.scrollIntoView({ block: 'start' })
    }
  }, [])

  const navigateTo = (panel) => {
    setActive(panel)
    document.getElementById(panel)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      const idx = NAV.findIndex((n) => n.id === active)
      if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && idx < NAV.length - 1)
        navigateTo(NAV[idx + 1].id)
      if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && idx > 0)
        navigateTo(NAV[idx - 1].id)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [active])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const copyEmail = async () => {
    await navigator.clipboard.writeText('arlinggacr.dev@gmail.com')
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 1800)
  }

  useEffect(() => {
    const handleHash = () => {
      const panel = window.location.hash.slice(1)
      if (NAV.some((item) => item.id === panel)) navigateTo(panel)
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="shell">
      <Sidebar
        active={active}
        setActive={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
        emailCopied={emailCopied}
        onCopyEmail={copyEmail}
      />
      <main className="main" ref={mainRef}>
        <div id="intro" className={`panel${active === 'intro'      ? ' active' : ''}`}><IntroPanel skillFilter={skillFilter} setSkillFilter={setSkillFilter} /></div>
        <div id="experience" className={`panel${active === 'experience' ? ' active' : ''}`}><ExperiencePanel skillFilter={skillFilter} setSkillFilter={setSkillFilter} selectedExperience={selectedExperience} setSelectedExperience={setSelectedExperience} /></div>
        <div id="projects" className={`panel${active === 'projects'   ? ' active' : ''}`}><ProjectsPanel skillFilter={skillFilter} setSkillFilter={setSkillFilter} /></div>
        <div id="education" className={`panel${active === 'education'  ? ' active' : ''}`}><EducationPanel /></div>
      </main>
    </div>
  )
}

export default App
