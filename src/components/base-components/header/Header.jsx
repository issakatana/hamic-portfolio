import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <Link className="site-text-logo" to="/">Katana.</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
       </header>
    )
}