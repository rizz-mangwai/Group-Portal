S1GP-7-Create-Footer
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon"></span>
        <span className="logo-text">GroupPortfolio</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fas fa-home"></i> HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fas fa-info-circle"></i> ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fas fa-users"></i> PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fas fa-code"></i> PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fas fa-envelope"></i> CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <i className="fas fa-code logo-icon"></i>
          <span>GroupPortfolio</span>
        </div>
        <p className="footer-text">© 2026 GroupPortfolio — Built by Team</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
 main
  );
}