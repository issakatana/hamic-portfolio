import React from "react";
import { Link } from "react-router-dom";
import './footer-styles.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main__footer">
            <small>
                <p>Developed with love by Issa Katana &copy; {currentYear}</p>
            </small>
        </footer>
    );
}
