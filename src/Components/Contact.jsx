import React from "react";
import Shakehand from "../Assets/Shakehand.jpg"; // Importing your image

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
      <h2>Contact</h2> {/* Added heading */}
      <section className="contact-section">
        <div className="contact-info">
          <div className="contact-info-content">
            {/* Image on the left side */}
            <img src={Shakehand} alt="Shakehand" />
            <p>
              Connect with me to discuss collaboration opportunities or to learn more about my work - I'm just a message away!
              Let's chat! Reach out via email or social media to start a conversation about your project or any inquiries.
            </p>
          </div>
        </div>
        <div className="contact-form">
          {/* Centered heading */}
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Your Contact No." />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="send-button">Send Message</button> {/* Added class for styling */}
          </form>
        </div>
        
      </section>
    </div>

    </section>
    
  );
}

export default Contact;
