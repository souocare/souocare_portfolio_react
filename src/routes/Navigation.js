import './Navigation.styles.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark custom-navbar">
      <div className="container">

        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#aboutme">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#other">More</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
