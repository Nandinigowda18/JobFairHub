import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/JobsData";
import React, { useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

   const [searchTerm, setSearchTerm] = useState("");

  // Filter logic for other jobs
  const filteredJobs = jobs
    .filter((j) => j.id !== job.id)
    .filter((j) =>
      (j.title + j.company)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  if (!job) return <p className="text-center mt-5 fs-5">Job not found</p>;

  return (
    <div className="container my-5">
      <div className="row">
        {/* ===== Left Section (Main Content) ===== */}
        <div className="col-lg-8 col-md-7 mb-4">

          <div className="card shadow-sm border-0 p-4">
          {/* Header */}
<h2 className="fw-bold mb-2">{job.title} Apply Now</h2>
<p className="text-muted mb-1">Posted by Job Fair Listings</p>

{/* Dynamic meta info */}
<p className="text-secondary small mb-3">
  {job.company} • {job.category || "Job"} • Posted on {job.postDate || "N/A"} •{" "}
  {job.views || "0"} views
</p>

{/* Dynamic tags */}
{job.tags && job.tags.length > 0 && (
  <div className="mb-3">
    {job.tags.map((tag, index) => (
      <span
        key={index}
        className="badge bg-secondary me-2 mb-2"
        style={{ fontSize: "0.9rem" }}
      >
        {tag}
      </span>
    ))}
  </div>
)}

{/* WhatsApp Join Link */}
<div className="mb-4">
  <a
    href="https://whatsapp.com/channel/0029Vb5ZhR9EwEjw4rEyJP1G"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success d-inline-flex align-items-center"
  >
    <i className="bi bi-whatsapp me-2 fs-5"></i> Join Our WhatsApp Channel
  </a>
</div>


            {/* Job Description */}
            <h4 className="fw-bold mt-4 mb-3">Job Description :-</h4>
            <table className="table table-bordered border-dark" style={{ fontSize: "1rem" }}>
              <tbody>
                <tr><th>Company Name</th><td>{job.company}</td></tr>
                <tr><th>Job Role</th><td>{job.role || "Freshers"}</td></tr>
                <tr><th>Qualification</th><td>{job.qualification || "Any Degree"}</td></tr>
                <tr><th>Experience</th><td>{job.experience || "Freshers"}</td></tr>
                <tr><th>Batch</th><td>{job.batch || "Check link"}</td></tr>
                <tr><th>Location</th><td>{job.location}</td></tr>
                <tr><th>CTC/Salary</th><td>{job.salary}</td></tr>
              </tbody>
            </table>

            {/* Description */}
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
              {job.description}
            </p>

         
{/* Resume Tips */}
<h4 className="fw-bold mt-5 mb-3">Tips to Prepare an ATS-Friendly Resume :-</h4>
<ul style={{ fontSize: "1rem", lineHeight: "1.8" }}>
  <li>
    <strong>Keep it concise:</strong> Limit your resume to one page focusing on key achievements and skills relevant to the job.
  </li>

  <li>
    <strong>Use a clean layout:</strong> Avoid fancy templates. Use simple fonts and proper headings so the ATS can read it easily.
  </li>

  <li>
    <strong>Add relevant keywords:</strong> Match keywords from the job description like “React,” “SQL,” or “Data Analysis.”
  </li>

  <li>
    <strong>Include professional details:</strong> Use a formal email and add your LinkedIn or GitHub link for authenticity.
  </li>

  <li>
    <strong>Highlight projects:</strong> Mention 2–3 major projects with clear results or technologies used.
  </li>

  <li>
    <strong>Quantify achievements:</strong> Add numbers like “Increased app performance by 40%” or “Handled 5 client projects.”
  </li>

  <li>
    <strong>Practice interview questions:</strong> Be ready to explain every skill and project you’ve listed on your resume.
  </li>

  <li>
    <strong>Research the company:</strong> Tailor your resume to match the company’s tools, goals, and technical stack.
  </li>

  <li>
    <strong>Ask meaningful questions:</strong> During interviews, show curiosity about the company’s projects or work culture.
  </li>

  <li>
    <strong>Show confidence and body language:</strong> Maintain a calm tone, good posture, and positive attitude during interviews.
  </li>

  <li>
    <strong>Send a thank-you note:</strong> After interviews, email a short thank-you to show professionalism and appreciation.
  </li>
</ul>



            {/* Interview Tips */}
            <h4 className="fw-bold mt-5 mb-3">Tips for Acing the Job Interview :-</h4>
            <h6 className="fw-semibold">✅ Do’s:</h6>
            <ul style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              <li>Research the company and role beforehand.</li>
              <li>Ask questions if something isn’t clear.</li>
              <li>Explain your thought process clearly.</li>
              <li>Use real-life examples to show your skills.</li>
              <li>Stay confident, calm, and positive.</li>
            </ul>
            <h6 className="fw-semibold mt-3">❌ Don’ts:</h6>
            <ul style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              <li>Don’t guess if unsure — reason it out instead.</li>
              <li>Keep answers clear and structured.</li>
              <li>Don’t ignore soft skills like communication and teamwork.</li>
            </ul>

            {/* Apply Section */}
            <div className="text-center my-5">
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-4 py-2 fs-5"
              >
                Apply Now
              </a>
            </div>

            {/* Application Form Tips */}
            <div className="card shadow-sm border-0 p-4 mt-4">
              <h4 className="fw-bold mb-3">
                General Suggestions for Filling Out an Application Form
              </h4>
              <ul style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                <li><strong>Read Instructions Carefully:</strong> Understand requirements before filling.</li>
                <li><strong>Don’t skip any part:</strong> Missing fields can disqualify your form.</li>
                <li><strong>Follow formatting rules:</strong> Use DD/MM/YYYY format for dates.</li>
                <li><strong>Gather Your Documents First:</strong> Have ID, transcripts, résumé, and certificates ready.</li>
                <li><strong>Ensure Consistent Info:</strong> Names, dates, and emails must match.</li>
                <li><strong>Don’t Leave Fields Blank:</strong> Write “N/A” if not applicable.</li>
                <li><strong>Highlight Strengths:</strong> Use bullet points for clarity.</li>
                <li><strong>Proofread:</strong> Check spelling and grammar before submitting.</li>
                <li><strong>Be Honest:</strong> False info = rejection.</li>
                <li><strong>Submit Before Deadline:</strong> Avoid last-minute issues.</li>
              </ul>
              <p className="text-secondary small mt-3 mb-0">
  {job.views || "0"} views • Tags:{" "}
  {job.tags && job.tags.length > 0
    ? job.tags.join(" / ")
    : "No tags available"}{" "}
  • Last updated on {job.postDate || "N/A"}
</p>

            </div>

            {/* Post Navigation */}
            <div className="d-flex justify-content-between mt-4">
              <Link to="#" className="text-decoration-none text-primary">
                ← Previous Post
              </Link>
              <Link to="#" className="text-decoration-none text-primary">
                Next Post →
              </Link>
            </div>

            {/* Comment Section */}
            <div className="card shadow-sm border-0 p-4 mt-5">
              <h5 className="fw-bold mb-3">Leave a Reply</h5>
              <p className="text-muted">
                Your email address will not be published. Required fields are marked *
              </p>
              <form>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name *" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email *" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Website (optional)" />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="saveInfo" />
                  <label htmlFor="saveInfo" className="form-check-label">
                    Save my name, email, and website for next time
                  </label>
                </div>
                <button type="submit" className="btn btn-primary px-4">
                  Post Comment
                </button>
              </form>
            </div>
             

            {/* Back to All Jobs */}
            <div className="text-center mt-5">
              <Link to="/" className="btn btn-outline-primary px-4">
                ← Back to All Jobs
              </Link>
            </div>



          </div>
        </div>

        

        {/* ===== Right Sidebar ===== */}
<div className="col-lg-4 col-md-5">
  {/* Search Bar */}
  <div
    className="card shadow-sm border-0 p-4 mb-4"
    style={{
      borderRadius: "12px",
      background: "#ffffff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h5
      className="fw-bold mb-3 text-primary"
      style={{ letterSpacing: "0.5px" }}
    >
      Search Jobs
    </h5>

    <input
      type="text"
      placeholder="🔍 Search by title or company"
      className="form-control py-2"
      style={{
        borderRadius: "8px",
        border: "1px solid #ced4da",
        fontSize: "0.95rem",
      }}
    />

    <button
      className="btn btn-primary mt-3 w-100 fw-semibold"
      style={{
        borderRadius: "8px",
        background: "linear-gradient(90deg, #007bff, #0056d2)",
        border: "none",
      }}
    >
      Search
    </button>
  </div>

  {/* Other Jobs Section */}
  <div
    className="card shadow-sm border-0 p-4"
    style={{
      borderRadius: "12px",
      background: "#ffffff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h5
      className="fw-bold mb-3 text-success"
      style={{ letterSpacing: "0.5px" }}
    >
      Other Job Openings
    </h5>
    <ul
      className="list-unstyled"
      style={{ fontSize: "1rem", lineHeight: "1.8", color: "#212529" }}
    >
      {filteredJobs.length > 0 ? (
        filteredJobs.map((j) => (
          <li key={j.id}>
            <Link
              to={`/job/${j.id}`}
              className="text-decoration-none text-dark"
              style={{
                display: "block",
                padding: "6px 0",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#212529")}
            >
              🔹 {j.company} - {j.title}
            </Link>
          </li>
        ))
      ) : (
        <p className="text-muted">No jobs found.</p>
      )}
    </ul>
  </div>
</div>


       
      </div>
    </div>
  );
};

export default JobDetails;


