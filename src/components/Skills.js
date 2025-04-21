import React from 'react';
import './Skills.css';
import data from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';

// Function to get appropriate icon for each skill category
const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
        case 'languages':
            return faCode;
        case 'frameworks & libraries':
            return faServer;
        case 'developer tools & cloud':
            return faTools;
        default:
            return faCode;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                    {data.skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category">
                            <div className="category-header">
                                <FontAwesomeIcon icon={getCategoryIcon(category.category)} className="category-icon" />
                                <h3>{category.category}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.proficiency}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.proficiency}%` }}
                                                data-value={skill.proficiency}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
