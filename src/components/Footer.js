import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>My Portfolio</h3>
                        <p>Creating digital experiences with passion and precision.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <Link to="/">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="footer-social">
                        <h4>Connect With Me</h4>
                        <div className="social-icons">
                            <a href="https://github.com/arjun-ms" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/the-arjun-ms/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://x.com/arjun_m_s_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    <p>Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by Arjun MS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;