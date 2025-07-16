import React, { useState } from 'react';
import { contactInfo, clubInfo } from '../data/clubInfo';
import '../components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact {clubInfo.name}</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>
                  {contactInfo.address.street}<br />
                  {contactInfo.address.address2}<br />
                  {contactInfo.address.city} {contactInfo.address.postalCode}<br />
                  {contactInfo.address.country}
                </p>
              </div>
              
              <div className="contact-item">
                <h3>General Enquiries</h3>
                <p><strong>Phone:</strong> {contactInfo.phone}</p>
                <p><strong>Email:</strong> {contactInfo.email}</p>
                <p><strong>Website:</strong> {contactInfo.website}</p>
              </div>
              
              <div className="contact-item">
                <h3>Ticket Office</h3>
                <p><strong>Phone:</strong> {contactInfo.ticketOffice.phone}</p>
                <p><strong>Email:</strong> {contactInfo.ticketOffice.email}</p>
                <p><strong>Hours:</strong> {contactInfo.ticketOffice.hours}</p>
              </div>
              
              <div className="contact-item">
                <h3>Social Media</h3>
                <p><strong>Twitter:</strong> {contactInfo.socialMedia.twitter}</p>
                <p><strong>Facebook:</strong> {contactInfo.socialMedia.facebook}</p>
                <p><strong>Instagram:</strong> {contactInfo.socialMedia.instagram}</p>
                <p><strong>YouTube:</strong> {contactInfo.socialMedia.youtube}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Enquiry</option>
                  <option value="tickets">Tickets</option>
                  <option value="membership">Membership</option>
                  <option value="media">Media</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;