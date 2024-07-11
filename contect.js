// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Import your CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: 'c ajay kumar reddy',
    email: 'kumarreddyajay945',
    message: '9121804175'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display success message or handle it in your UI
      } else {
        throw new Error('Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit contact form. Please try again later.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
