export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🚀</span>
        <span className="logo-text">GroupPort</span>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/profile">PROFILE</NavLink></li>
        <li><NavLink to="/projects">PROJECTS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  );
}
