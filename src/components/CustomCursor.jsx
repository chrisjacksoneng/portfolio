import React, { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-card, .project-card, .logo-link')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        width: isHovering ? '30px' : '20px',
        height: isHovering ? '30px' : '20px',
        borderRadius: '50%',
        background: isHovering 
          ? 'radial-gradient(circle, #a855f7 0%, #7c3aed 50%, transparent 100%)'
          : 'radial-gradient(circle, #7c3aed 0%, #5b21b6 50%, transparent 100%)',
        boxShadow: isHovering
          ? '0 0 30px #a855f7, 0 0 60px #7c3aed'
          : '0 0 20px #7c3aed, 0 0 40px #5b21b6',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'all 0.3s ease'
      }}
    />
  )
}

export default CustomCursor