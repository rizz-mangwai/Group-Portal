import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <div className="project-icon">
        <i className={`fas ${project.icon}`}></i>
      </div>
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-category">{project.category}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {project.technologies.slice(0, 3).map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      <button className="view-project-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Project"}
      </button>
      {showDetails && (
        <div className="project-details">
          <h4>Features:</h4>
          <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
          <h4>Team:</h4>
          <ul>{project.teamMembers.map((m, i) => <li key={i}>{m}</li>)}</ul>
          <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-link"></i> View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}