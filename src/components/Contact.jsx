import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "", // New field for title (subject)
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Load from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Load from .env
        {
          title: formData.title, // Add title (subject) here
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Load from .env
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          setFormData({ title: "", name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Failed to send message. ❌");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Subject"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p> {/* Show success/error message */}
    </div>
  );
};

export default Contact;
