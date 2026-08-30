S1GP-2-Create-Home-Page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contacts";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
 main
  );
}