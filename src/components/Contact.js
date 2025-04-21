import React, { useState, useRef } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your own EmailJS service ID, template ID and user ID (public key)
        emailjs.sendForm(
            'service_v68nxln', 
            'template_y5xrfoh', 
            form.current, 
            'oXE_84wurGYrSf5C8'
        )
        .then((result) => {
            setFormStatus({
                submitted: true,
                success: true,
                message: 'Message sent successfully!'
            });
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
        }, (error) => {
            setFormStatus({
                submitted: true,
                success: false,
                message: 'Failed to send message. Please try again.'
            });
            setLoading(false);
        });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                
                <div className="contact-container">
                    <div className="contact-form">
                        {formStatus.submitted && (
                            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                                {formStatus.message}
                            </div>
                        )}
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your name" 
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Write your message here..." 
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="text">
                                <h3>Location</h3>
                                <p>Vaniyamkulam, Palakkad, Kerala, India</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>arjunachu123.aa@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div className="text">
                                <h3>Website</h3>
                                <p>arjun-ms.github.io</p>
                            </div>
                        </div>
                        
                        <div className="map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31309.294549343198!2d76.09642281112871!3d10.77924633491357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c91b46b06527%3A0x2cabc5a29212563f!2sVaniyamkulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1651234987654!5m2!1sen!2sin" 
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;