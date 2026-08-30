import { useState } from "react";
import { projects } from "../data/projects";
import projectCard from "../components/projectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>Explore the projects we've built together</p>
      </div>

      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}