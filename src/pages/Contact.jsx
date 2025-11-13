// src/pages/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting JobFair Listings! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-5" style={{ borderRadius: "12px" }}>
        <h2 className="fw-bold text-primary mb-4 text-center">Contact Us</h2>

        <p className="text-secondary text-center mb-5">
          Have a question, suggestion, or feedback? We’d love to hear from you!
          Fill out the form below or reach out via email.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <h6 className="fw-bold text-secondary mb-2">Or reach us directly:</h6>
          <p className="mb-1 text-muted">
            📧 wdevworks@gmail.com
          </p>
          <p className="mb-1 text-muted">
            📍 Bengaluru, Karnataka, India
          </p>
          <a
            href="https://whatsapp.com/channel/0029Vb5ZhR9EwEjw4rEyJP1G"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-3 px-4 fw-semibold"
          >
            <i className="bi bi-whatsapp me-2"></i> Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
