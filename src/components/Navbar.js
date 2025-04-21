import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('about');
    const location = useLocation();

    // Toggle menu function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when clicking on a link
    const closeMenu = () => {
        if (isOpen) setIsOpen(false);
    };

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Set active link based on current path
    useEffect(() => {
        const path = location.pathname.replace('/', '') || 'about';
        setActiveLink(path);
    }, [location]);

    // Check if a link is active
    const isActive = (path) => {
        return activeLink === path.replace('/', '') || (path === '/' && activeLink === 'about');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <Link to="/">My Portfolio</Link>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link 
                        to="/" 
                        className={isActive('/') ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects" 
                        className={isActive('/projects') ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/skills" 
                        className={isActive('/skills') ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/experience" 
                        className={isActive('/experience') ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={isActive('/contact') ? 'active' : ''} 
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;