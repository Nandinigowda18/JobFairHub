// src/pages/Home.jsx
// src/pages/Home.jsx

import { jobs } from "../data/jobsData";   // ✅ <-- Add this line

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid px-4 py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* ===== Hero Section ===== */}
      <section className="text-center py-5 bg-white rounded shadow-sm mb-5">
        <h1 className="fw-bold text-primary mb-3">Welcome to jobfairhub.in</h1>
        <p className="text-secondary fs-5 mb-4">
          Find verified off-campus and freshers’ job opportunities updated daily.  
          Apply directly to top companies across India with one click.
        </p>
        <Link to="/jobs" className="btn btn-primary px-4 py-2 fw-semibold">
          🔍 Explore All Jobs
        </Link>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-4 text-dark">Why Choose jobfairhub?</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 p-3">
              <h5 className="fw-bold text-primary mb-2">✅ Verified Openings</h5>
              <p className="text-muted">
                We post only official and verified company openings — no spam or fake listings.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 p-3">
              <h5 className="fw-bold text-primary mb-2">🚀 Daily Updates</h5>
              <p className="text-muted">
                Our portal updates freshers and experienced job posts every single day.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 p-3">
              <h5 className="fw-bold text-primary mb-2">💼 Career Resources</h5>
              <p className="text-muted">
                Get interview tips, resume advice, and preparation materials for top companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured Jobs Section ===== */}
 
<section className="text-center mb-5">
 <h2 className="fw-bold mb-4 text-dark">Featured Jobs</h2>

  <div className="row justify-content-center">
    {jobs && jobs.length > 0 ? (
      jobs.slice(0, 6).map((job) => (   // Show top 6 jobs
        <div className="col-md-4 mb-4" key={job.id}>
          <div className="card shadow-sm border-0 h-100 p-3">
            <h5 className="fw-semibold text-primary">{job.title}</h5>
            <p className="mb-2 text-muted">
              Location: {job.location} | Salary: {job.salary}
            </p>
            <p className="text-muted small">
              {job.description
                ? job.description.slice(0, 80) + "..."
                : "Click below for more details."}
            </p>

            <div className="mt-auto">
              <Link
                to={`/job/${job.id}`}
                className="btn btn-outline-primary w-100 fw-semibold"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center text-muted fs-5">
        No featured jobs available right now.
      </div>
    )}
  </div>
</section>


      {/* ===== CTA Section ===== */}
      <section className="text-center mt-5">
        <h4 className="fw-bold text-dark mb-3">
          Join our WhatsApp Channel for instant job alerts 📲
        </h4>
        <a
          href="https://whatsapp.com/channel/0029Vb5ZhR9EwEjw4rEyJP1G"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success px-4 py-2 fw-semibold"
        >
          <i className="bi bi-whatsapp me-2"></i> Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
