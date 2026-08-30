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
  );
}