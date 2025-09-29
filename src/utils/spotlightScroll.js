// Section-based background scroll effect
export const initSpotlightScroll = () => {
  const body = document.body;
  
  let ticking = false;
  
  // Define different background themes for each section
  const sectionThemes = {
    hero: {
      spotlightY: 0,
      intensity: 1,
      primary: 'rgba(100, 150, 255, 0.25)',
      secondary: 'rgba(70, 130, 255, 0.3)',
      tertiary: 'rgba(50, 100, 255, 0.4)',
      quaternary: 'rgba(30, 80, 200, 0.5)'
    },
    experience: {
      spotlightY: 15,
      intensity: 0.8,
      primary: 'rgba(80, 120, 255, 0.2)',
      secondary: 'rgba(60, 100, 255, 0.25)',
      tertiary: 'rgba(40, 80, 200, 0.35)',
      quaternary: 'rgba(25, 60, 150, 0.45)'
    },
    projects: {
      spotlightY: 30,
      intensity: 0.6,
      primary: 'rgba(60, 100, 255, 0.15)',
      secondary: 'rgba(50, 80, 200, 0.2)',
      tertiary: 'rgba(35, 60, 150, 0.3)',
      quaternary: 'rgba(20, 40, 100, 0.4)'
    }
  };
  
  const updateSpotlight = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Get logo position for spotlight origin
    const logoElement = document.querySelector('.nav-logo');
    let logoSpotlightY = 8; // Default position
    
    if (logoElement) {
      const logoRect = logoElement.getBoundingClientRect();
      const logoCenterY = logoRect.top + (logoRect.height / 2);
      // Convert to percentage of viewport height
      logoSpotlightY = Math.max(2, Math.min(15, (logoCenterY / windowHeight) * 100));
    }
    
    // Determine which section is currently in view
    const heroSection = document.querySelector('.hero-section');
    const experienceSection = document.querySelector('#experience');
    const projectsSection = document.querySelector('#projects');
    
    let currentTheme = sectionThemes.hero;
    let sectionProgress = 0;
    
    if (heroSection && scrollY < heroSection.offsetTop + heroSection.offsetHeight) {
      // In hero section
      currentTheme = sectionThemes.hero;
      sectionProgress = scrollY / (heroSection.offsetHeight);
    } else if (experienceSection && scrollY < experienceSection.offsetTop + experienceSection.offsetHeight) {
      // In experience section
      currentTheme = sectionThemes.experience;
      sectionProgress = (scrollY - experienceSection.offsetTop) / experienceSection.offsetHeight;
    } else if (projectsSection) {
      // In projects section
      currentTheme = sectionThemes.projects;
      sectionProgress = (scrollY - projectsSection.offsetTop) / projectsSection.offsetHeight;
    }
    
    // Smooth transition between sections
    const spotlightY = currentTheme.spotlightY + (sectionProgress * 10);
    const spotlightIntensity = currentTheme.intensity;
    
    // Update CSS custom properties
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.setProperty('--spotlight-y', `${spotlightY}%`);
      rootElement.style.setProperty('--logo-spotlight-y', `${logoSpotlightY}%`);
      rootElement.style.setProperty('--spotlight-intensity', spotlightIntensity);
      rootElement.style.setProperty('--section-bg-primary', currentTheme.primary);
      rootElement.style.setProperty('--section-bg-secondary', currentTheme.secondary);
      rootElement.style.setProperty('--section-bg-tertiary', currentTheme.tertiary);
      rootElement.style.setProperty('--section-bg-quaternary', currentTheme.quaternary);
    }
    
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateSpotlight);
      ticking = true;
    }
  };
  
  // Add scroll listener
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Initial call
  updateSpotlight();
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', requestTick);
  };
};
