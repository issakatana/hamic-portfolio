import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-styles.css";
import IconImages from "./header-images";

const NavItem = ({ to, label, isActive, onClick }) => (
    <Link
        to={to}
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={() => onClick(to)}
    >
        {label}
    </Link>
);

export default function Header() {
    const [activeLink, setActiveLink] = useState("");
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLinkClick = (path) => {
        setActiveLink(path);
        localStorage.setItem("activeLink", path);
    };

    useEffect(() => {
        const storedActiveLink = localStorage.getItem("activeLink");
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);

    const toggleIcons = () => {
        setIsMenuVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`main__header ${isScrolled ? 'scrolled' : ''}`}>
            <Link
                to="/"
                className={`site-text-logo ${activeLink === '/' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/')}
            >
                <span>Ka<span className="mn">tana</span>.</span>
            </Link>
            <nav className={`header__nav ${isMenuVisible ? 'visible' : ''}`} style={{ right: `${isMenuVisible ? 0 : -300}px` }}>
                <NavItem to="/about" label="About" isActive={activeLink === '/about'} onClick={handleLinkClick} />
                <NavItem to="/services" label="Services" isActive={activeLink === '/services'} onClick={handleLinkClick} />
                <NavItem to="/projects" label="Projects" isActive={activeLink === '/projects'} onClick={handleLinkClick} />
                <NavItem to="/blog" label="Blog" isActive={activeLink === '/blog'} onClick={handleLinkClick} />
                <NavItem to="/contact" label="Contact" isActive={activeLink === '/contact'} onClick={handleLinkClick} />
            </nav>
            <figure className="mobile-logo-icon" onClick={toggleIcons}>
                {isMenuVisible ? (
                    <img src={IconImages.xRegular} alt="xclose" className="red-icon" />
                ) : (
                    <img src={IconImages.menuAltRight} alt="menuicon" className="white-icon" />
                )}
            </figure>
        </header>
    );
}
