import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./ContactUs.css";

const ContactUs = () => {
  const contactRef = useScrollAnimation({ animationClass: "fade-in-up" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 전송 로직 (mailto 링크로 대체)
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:contact@logncoding.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-us-section section">
      <div className="container">
        <div className="contact-card">
          {/* Section Title */}
          <div className="contact-title">
            <h2>Contact</h2>
            <p>
              For collaboration opportunities, press inquiries, or any questions about Braille Play, reach out to us.
            </p>
          </div>

          <div ref={contactRef} className="contact-content">
            <div className="contact-form">
              {/* <h3>Get In Touch</h3>
              <p>Send us a message and we'll get back to you as soon as possible.</p> */}

              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>

                  <div className="col-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
