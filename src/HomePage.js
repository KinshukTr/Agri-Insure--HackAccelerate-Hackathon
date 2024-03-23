import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
    let nav = useNavigate();
  
  return (
    <div className="App">
        <header className="header-section">
            <div className="topnav">
                <a href="#home" className="active"></a>
                {/* Navigation links */}
                <div id="myLinks" style={{ display: 'none' }}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                {/* Hamburger menu */}
                <a href="javascript:void(0);" className="icon" onClick={() => {}}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <h1>AGRI INSURE</h1>
            <p className="slogan">Grow with confidence. Insure your harvest.</p>
        </header>

        <section id="home" className="hero-section">
            <h2>Welcome to AGRI INSURE</h2>
            <p>An autonomous crop insurance platform to claim losses. Protect your finances.</p>
            <a  onClick={() => { nav("/login") }} className="btn-primary">Get Started</a>
        </section>

        <section id="about" className="about_k">
            <br />
            <h3>ABOUT</h3>
            <br /><br />
            <p>At AGRI INSURE, we are committed to revolutionizing the way crop insurance is managed. With our cutting-edge technology and innovative approach, we aim to provide farmers with a seamless and efficient solution to protect their crops and secure their livelihoods.</p>
            <br />
            <p>Our autonomous crop insurance platform leverages advanced algorithms and data analytics to assess risks accurately and streamline the claims process.</p>
            <br />
            <p>We understand the challenges that farmers face, from unpredictable weather patterns to market fluctuations. That's why we're dedicated to providing comprehensive coverage and proactive risk management strategies to mitigate losses and maximize yields.</p>
            <br />
            <p>With AGRI INSURE, farmers can have peace of mind knowing that their crops are safeguarded against unforeseen events. Join us in shaping the future of agriculture and ensuring a more resilient farming community.</p>
            <br />
            <p>Protect your crops with confidence. Choose AGRI INSURE.</p>
            <br />
        </section>

        <footer id="contact" className="footer-section">
            <h3>CONTACT US</h3>
            <p>
                agri_insure@agriservice.com
            </p>
            <br />
            <p>&copy; 2024 AGRI INSURE. All rights reserved.</p>
        </footer>
    </div>
);
};

export default HomePage;