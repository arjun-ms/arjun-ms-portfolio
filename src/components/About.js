import React from 'react';
import './About.css';
import profileImage from '../assets/images/profile-image.png';
// Import FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const downloadResume = (e) => {
        e.preventDefault();
        
        // Google Drive direct download URL conversion
        const fileId = '1xrNA03qq-V0Q_KuSCtDqhzHelLXfbLsb';
        const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        
        // Create a temporary link to trigger the download
        const link = document.createElement('a');
        link.href = directDownloadUrl;
        link.setAttribute('download', 'Arjun_MS_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="profile-image">
                        <img src={profileImage} alt="Profile" />
                    </div>
                    <div className="about-text">
                        <h3>Software Engineer</h3>
                        <p>
                            Hello! I'm Arjun MS, a curious guy who loves to tinker with tech and build products.
                        </p>
                        <p>
                        I'm an AI/ML Developer passionate about building impactful tech products. I've had the opportunity to lead communities like TinkerHub and GTech Mulearn, where I led AI initiatives, developed tools like RAG-based legal search systems, and worked across domains from web development to LLMs. I'm currently exploring innovative product ideas, blending curiosity with hands-on execution—always eager to learn and create.
                        </p>
                        <div className="about-details">
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                                <span className="detail-label">Email:</span>
                                <span className="detail-value">arjunachu123.aa@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
                                <span className="detail-label">Location:</span>
                                <span className="detail-value">Palakkad, Kerala, India</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/arjun-ms" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/arjun-ms" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <a 
                            href="#" 
                            className="download-resume" 
                            onClick={downloadResume}
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFileDownload} className="resume-icon" /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



