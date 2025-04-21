import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import data from '../data';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                
                <div className="timeline">
                    {data.experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <h3>{exp.position}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                                
                                <div className="experience-meta">
                                    <p>
                                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                                        <span>{exp.duration}</span>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                        <span>{exp.location}</span>
                                    </p>
                                </div>
                                
                                <div className="experience-description">
                                    <ul>
                                        {exp.responsibilities.map((responsibility, respIndex) => (
                                            <li key={respIndex}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {exp.technologies && (
                                    <div className="experience-technologies">
                                        <p><strong>Technologies:</strong> {exp.technologies.join(', ')}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;