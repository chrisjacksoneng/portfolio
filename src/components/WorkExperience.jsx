import React from 'react'

const WorkExperience = () => {
  const workData = [
    {
      id: 1,
      logo: "/qqq.png",
      title: "Special Projects Engineering Assistant",
      company: "QQuote",
      dates: "Jan. 2025 – Apr. 2025",
      description: "Managed internal software projects, leading documentation, API analysis, and data validation across development and production environments."
    },
    {
      id: 2,
      logo: "/impactLogo.avif",
      title: "Events Coordinator",
      company: "IMPACT",
      dates: "Dec. 2021 – Jun. 2024",
      description: "Led 4 charitable events, raising $10,000 and partnering with vendors to cut costs by 28%, while helping deliver $2,000 in supplies to 50 people in need."
    }
  ]

  return (
    <section id="experience">
      <h1 className="work">
        Work Experience
      </h1>

      {workData.map((work, index) => (
        <div key={work.id}>
          <div className="work-card">
            <div className="work-header">
              <img 
                src={work.logo} 
                alt={`${work.company} Logo`} 
                className="work-logo"
              />
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-dates">{work.dates}</p>
              </div>
            </div>
            <ul className="work-bullets">
              <li>{work.description}</li>
            </ul>
          </div>
          
          {index < workData.length - 1 && (
            <div className="work-line" />
          )}
        </div>
      ))}
    </section>
  )
}

export default WorkExperience