import React from "react";
import ProjectImage1 from "../Assets/Project1.png";
import ProjectImage2 from "../Assets/Project2.png";
import ProjectImage3 from "../Assets/Project3.png";

function ProjectSection() {
  const projects = [
    {
      title: "Project 1",
      description: "Redesigned the Ujjain Municipal Corporation website to enhance user experience, improve accessibility, and streamline information dissemination for residents and stakeholders",
      image: ProjectImage1,
      // Add more properties as needed
    },
    {
      title: "Project 2",
      description: "Developing a travel booking website using HTML and CSS while gaining proficiency in MongoDB and MySQL for database management",
      image: ProjectImage2,
      // Add more properties as needed
    },
    {
      title: "Project 3",
      description: "Designing a Smart Pole system to mitigate accidents in hilly terrains, employing IoT sensors and data analytics for real-time hazard detection and proactive safety measures.",
      image: ProjectImage3,
      // Add more properties as needed
    },
  ];

  return (
    <section id="projects">
      <div className="project-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
          
            </div>
          </div>
        ))}
      </div>
      
      <div className="half-lin"></div>
    </div>

    </section>
    
    
  );
}

export default ProjectSection;
