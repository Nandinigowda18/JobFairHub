// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-3 mt-5"
      style={{
        backgroundColor: "#000",
        fontSize: "0.95rem",
        lineHeight: "1.8",
      }}
    >
      <div className="container">
        <div className="row text-start">
          {/* ===== About Section ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase mb-3 text-warning">
              jobfairhub.in
            </h5>
            <p className="text-light">
              jobfairhub is your trusted source for the latest verified
              off-campus drives, internships, and fresher job openings across India.
              We connect graduates with top companies and guide them with resume tips
              and interview preparation materials.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase text-warning mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                 <Link to="/" className="text-decoration-none text-light nav-link-custom">
                  Home
                </Link>
              </li>
              <li>
                 <Link to="/" className="text-decoration-none text-light nav-link-custom">
                  All Jobs
                </Link>
              </li>
              <li>
                  <Link to="/" className="text-decoration-none text-light nav-link-custom">
                  About Us
                </Link>
              </li>
              <li>
                 <Link to="/" className="text-decoration-none text-light nav-link-custom">
                  Contact
                </Link>
              </li>
              <li>
                 <Link to="/" className="text-decoration-none text-light nav-link-custom">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Job Categories ===== */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase text-warning mb-3">Popular Categories</h6>
            <ul className="list-unstyled">
              <li>🔹 IT & Software Jobs</li>
              <li>🔹 Data Science Roles</li>
              <li>🔹 Core Engineering</li>
              <li>🔹 BPO / Support Jobs</li>
              <li>🔹 Government Openings</li>
              <li>🔹 Remote Work / Internships</li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase text-warning mb-3">Contact Us</h6>
            <p className="mb-1">
              📍 Bengaluru, Karnataka, India
            </p>
            <p className="mb-1">
              📧 <a href="mailto:support@jobfairlistings.com" className="text-decoration-none text-light">
                wdevworks@gamil.com
              </a>
            </p>
            {/* <p className="mb-1">📞 +91 9008756133</p> */}

            <div className="mt-3">
              <a
                href="https://whatsapp.com/channel/your-channel-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success me-3 fs-5"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger me-3 fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fs-5"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ===== AdSense Area ===== */}
        {/* <div
          className="mt-4 mb-4 p-3 text-center text-dark bg-light rounded"
          style={{ minHeight: "100px" }}
        >
          <p className="fw-semibold mb-1">Advertisement Area</p>
          <small className="text-muted">
            (Place your Google AdSense banner or responsive ad code here)
          </small>
        </div> */}

        {/* ===== Bottom Bar ===== */}
        <div className="border-top pt-3 text-center">
          <p className="mb-0 text-light">
            © {new Date().getFullYear()} <strong>jobfairhub.in</strong> • Empowering Freshers & Professionals  
          </p>
          <p className="text-secondary small mb-0">
            Built with ❤️ in India | Designed for placement-ready graduates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

