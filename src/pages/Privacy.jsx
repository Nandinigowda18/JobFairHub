// src/pages/Privacy.jsx
const Privacy = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 p-5" style={{ borderRadius: "12px" }}>
        <h2 className="fw-bold text-primary mb-4 text-center">
          Privacy Policy
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          At <strong>JobFair Listings</strong>, accessible from
          <strong> https://yourdomain.com</strong>, one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by JobFair Listings
          and how we use it.
        </p>

        <h5 className="fw-bold mt-4 mb-3">1. Information We Collect</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          We collect personal information that you provide directly when you:
        </p>
        <ul style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          <li>📝 Fill out a contact form or subscribe to notifications.</li>
          <li>📧 Communicate with us via email or social media.</li>
          <li>💼 Apply for jobs or submit forms via third-party company sites.</li>
        </ul>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          This may include your name, email address, and any message you send to
          us. We do not collect sensitive personal data like passwords or payment
          information.
        </p>

        <h5 className="fw-bold mt-4 mb-3">2. How We Use Your Information</h5>
        <ul style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          <li>✅ To improve and personalize our website experience.</li>
          <li>📢 To send job alerts, updates, and responses to your inquiries.</li>
          <li>📊 To analyze user interaction and enhance our content and services.</li>
        </ul>

        <h5 className="fw-bold mt-4 mb-3">3. Cookies and Advertising</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Like many websites, JobFair Listings uses “cookies” to store
          information including visitors’ preferences and the pages on the
          website that the visitor accessed or visited.  
          Google, as a third-party vendor, uses cookies (such as the DART cookie)
          to serve ads to our site visitors based on their visit to our site and
          other sites on the internet.
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Visitors may choose to decline the use of the DART cookie by visiting
          the Google ad and content network Privacy Policy at:
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h5 className="fw-bold mt-4 mb-3">4. Third-Party Links</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          Our website may contain links to other company job portals or third-party
          websites. We are not responsible for the privacy practices or content
          of those external sites. We encourage users to read the privacy policy
          of any linked website they visit.
        </p>

        <h5 className="fw-bold mt-4 mb-3">5. Data Security</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          We implement appropriate technical and organizational measures to
          safeguard your personal information. However, please note that no
          method of online transmission or storage is 100% secure.
        </p>

        <h5 className="fw-bold mt-4 mb-3">6. Children’s Information</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          JobFair Listings does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you believe your
          child has provided such information on our website, please contact us
          immediately and we will remove it promptly.
        </p>

        <h5 className="fw-bold mt-4 mb-3">7. Consent</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h5 className="fw-bold mt-4 mb-3">8. Contact Information</h5>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          For any questions or concerns about this Privacy Policy, please contact
          us at:
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          📧 <a
            href="mailto:support@jobfairlistings.com"
            className="text-decoration-none"
          >
            support@jobfairlistings.com
          </a>
          <br />
          📍 Bengaluru, Karnataka, India
        </p>

        <div className="text-center mt-4">
          <p className="text-muted small">
            Last updated on {new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
