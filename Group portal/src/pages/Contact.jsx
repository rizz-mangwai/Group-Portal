import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out to us anytime.</p>

          <div className="info-items">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>team@groupport.co.ke</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <span>+254 700 123 456</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Nairobi, Kenya</span>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 8:00 AM - 5:00 PM (EAT)</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i> SEND MESSAGE
          </button>

          {submitted && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              Thank you! Your message has been received. We'll get back to you soon!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}