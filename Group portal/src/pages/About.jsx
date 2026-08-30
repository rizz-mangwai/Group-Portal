export default function About() {
  const technologies = [
    "React", "JavaScript", "HTML", "CSS",
    "Git", "GitHub", "Vite", "Jira"
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h2>About Our Team</h2>
        <p className="about-sub">
          We are a team of passionate developers working together to design and build innovative web solutions.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <i className="fas fa-bullseye about-icon"></i>
          <h3>Our Mission</h3>
          <p>
            To create innovative, accessible, and sustainable technology solutions that make a positive impact
            on people's lives and businesses.
          </p>
        </div>
        <div className="about-card">
          <i className="fas fa-eye about-icon"></i>
          <h3>Our Vision</h3>
          <p>
            To be a leading development team known for excellence, creativity, and collaboration in every project
            we undertake.
          </p>
        </div>
        <div className="about-card">
          <i className="fas fa-gem about-icon"></i>
          <h3>Our Values</h3>
          <p>
            Innovation, Integrity, Teamwork, and Continuous Learning — these values guide everything we do
            and every decision we make.
          </p>
        </div>
      </div>

      <div className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-item">
            <i className="fas fa-code"></i>
            <h4>Web Development</h4>
            <p>Building responsive, high-performance web applications</p>
          </div>
          <div className="service-item">
            <i className="fas fa-paint-brush"></i>
            <h4>UI Design</h4>
            <p>Creating beautiful, intuitive user interfaces</p>
          </div>
          <div className="service-item">
            <i className="fas fa-laptop-code"></i>
            <h4>Frontend Development</h4>
            <p>Modern frontend solutions with React and JavaScript</p>
          </div>
          <div className="service-item">
            <i className="fas fa-lightbulb"></i>
            <h4>Problem Solving</h4>
            <p>Innovative solutions to complex challenges</p>
          </div>
        </div>
      </div>

      <div className="technologies">
        <h2>Our Technologies</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
