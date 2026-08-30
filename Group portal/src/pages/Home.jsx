import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import projectCard from "../components/projectCard";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge"> 5 Members • 10+ Projects</div>
          <h1 className="hero-title">
            <span className="highlight">GroupPortfolio</span>
          </h1>
          <p className="hero-subtitle">
            A creative team of developers building modern and meaningful digital experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View Projects →
            </Link>
            <Link to="/profile" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Together</span>
          </div>
        </div>
      </div>

      <div className="featured-projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Check out some of our best work</p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}