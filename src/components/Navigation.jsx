import React from 'react'

const Navigation = () => {
  const leftNavItems = ['Experience', 'About']
  const rightNavItems = ['Contact']

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="topBarContainer">
      <div className="logo-light-beams"></div>
      <div className="topBar">
        {/* Left Navigation Items */}
        <div className="nav-left">
          {leftNavItems.map((item) => (
            <h2
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-item"
            >
              {item}
            </h2>
          ))}
        </div>
        
        {/* Centered Logo */}
        <div className="nav-center">
          <a href="#" className="logo-link">
            <img src="/cjLogo.png" alt="CJ Logo" className="nav-logo" />
          </a>
        </div>
        
        {/* Right Navigation Items */}
        <div className="nav-right">
          {rightNavItems.map((item) => (
            <h2
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-item"
            >
              {item}
            </h2>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Navigation