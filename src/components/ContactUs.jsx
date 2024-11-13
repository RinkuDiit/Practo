import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-us">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill out the form below or reach out to us directly.</p>
      </header>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you prefer, you can also reach us at:</p>
        <p>Email: support@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Example Street, City, Country</p>
      </section>
    </div>
  );
};

export default ContactUs;
