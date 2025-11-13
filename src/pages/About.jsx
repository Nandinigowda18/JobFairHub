// src/pages/About.jsx
const About = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-5" style={{ borderRadius: "12px" }}>
        <h2 className="fw-bold text-primary mb-4 text-center">About jobfairhub</h2>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          <strong>jobfairhub</strong> is an independent job information platform built
          to help students, fresh graduates, and professionals find verified job
          opportunities across India. Our mission is to make job hunting simple, transparent,
          and accessible to everyone — without fake listings or confusion.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          We collect and post only <strong>official job openings</strong> from trusted sources,
          company career pages, and campus recruitment portals. Whether you’re a fresher looking
          for your first opportunity or a professional seeking new challenges,jobfairhub
          keeps you updated with daily job openings from IT, core engineering, data analytics,
          marketing, and government sectors.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Apart from job updates, we also share valuable resources to help you prepare:
        </p>

        <ul style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          <li>📄 Resume-building guides and free templates.</li>
          <li>🎯 Interview tips and HR question collections.</li>
          <li>📚 Placement preparation resources (Aptitude, Coding, and Soft Skills).</li>
          <li>💬 Career advice for students and graduates.</li>
        </ul>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          We are not a recruitment agency — jobfairhub acts as a bridge between
          candidates and genuine recruiters by providing verified information.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Our goal is to become one of India’s most trusted <strong>job awareness platforms </strong>
          where students can find internships, off-campus drives, and placement updates easily.
        </p>

        <div className="text-center mt-4">
          <a
            href="https://whatsapp.com/channel/0029Vb5ZhR9EwEjw4rEyJP1G"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2 fw-semibold"
          >
            <i className="bi bi-whatsapp me-2"></i> Join Our WhatsApp Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
