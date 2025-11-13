// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
      style={{ borderBottom: "1px solid #e0e0e0", padding: "0.8rem 2rem" }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand fw-bold text-primary"
          style={{ fontSize: "1.3rem", letterSpacing: "0.5px" }}
        >
          jobfairhub.in
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link fw-semibold text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/jobs" className="nav-link fw-semibold text-dark">
                All Jobs
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link fw-semibold text-dark">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link fw-semibold text-dark">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-3">
              <a
                href="https://whatsapp.com/channel/0029Vb5ZhR9EwEjw4rEyJP1G"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-3 py-1 fw-semibold"
                style={{ borderRadius: "8px" }}
              >
                <i className="bi bi-whatsapp me-1"></i> Join Channel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
