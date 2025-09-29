import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      label: "FEATURED PROJECT",
      title: "GradePad",
      description: "GradePad helps students manage their grades and stay on top of coursework. It simplifies tracking, planning, and calculating performance through an intuitive, student-focused interface.",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: "/gradepadPortfolio.png",
      alt: "GradePad screenshot"
    },
    {
      id: 2,
      label: "PERSONAL SITE",
      title: "Portfolio Website",
      description: "Utilized HTML, CSS, and JavaScript to create a responsive, minimalist interface that highlights projects, experience, and design skills with smooth navigation and clean visuals.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/Screenshot 2025-04-21 004832.png",
      alt: "Portfolio screenshot"
    }
  ]

  return (
    <section id="projects">
      <h1 className="projects-title">
        Personal Projects
      </h1>

      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-left">
            <p className="project-label">
              {project.label}
            </p>
            
            <h2 className="project-title">
              {project.title}
            </h2>
            
            <p className="project-description">
              {project.description}
            </p>
            
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="project-right">
            <img 
              src={project.image} 
              alt={project.alt}
            />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects