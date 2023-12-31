import React, { useEffect } from 'react';
import Typed from 'typed.js';
import "./home-styles.css";
import { HomeImages } from './home-images';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <section className="home-profile background-container Pages" id='home'>
      <div className="intro profileContent">
        <GreetingText />
        <IntroductionParagraph />
        <SocialLinks />
        <MoreAboutMeButton />
      </div>
      <figure className="intro issaHomePicy">
      <img src={HomeImages.hamicPic} alt='menuicon' width='40px' />
      </figure>
    </section>
  );
};

const GreetingText = () => {
  useEffect(() => {
    const typed = new Typed('.auto-input', {
      strings: [
        'Software Engineer',
        'Frontend Developer',
        'Backend Architect',
      ],
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 2500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <article className="profile greeting">
      <p className="grt p1">Hello, I'm Issa Katana</p>
      <p className="grt p2">From Kenya</p>
      <p className="grt p1">And I'm a <span className="auto-input"></span></p>
    </article>
  );
};

const IntroductionParagraph = () => {
  return (
    <article className="profile message">
      <p>
        I'm a Software Engineer with over 3 years of experience. I specialize in creating user-friendly web and mobile apps. My goal is to build strong, interactive, and custom-made apps that meet your needs and make your users happy.
      </p>
    </article>
  );
};

const SocialLinks = () => {
  return (
    <article className="profile social-icons">
      <ul className="social-icons-list">
        <li style={{ '--i': 8 }}>
          <a href="#"><i className='bx bxl-facebook'></i></a>
        </li>
        <li style={{ '--i': 9 }}>
          <a href="#"><i className='bx bxl-instagram'></i></a>
        </li>
        <li style={{ '--i': 10 }}>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </li>
        <li style={{ '--i': 11 }}>
          <a href="#"><i className='bx bxl-whatsapp'></i></a>
        </li>
        <li style={{ '--i': 12 }}>
          <a href="#"><i className='bx bxl-tiktok'></i></a>
        </li>
      </ul>
    </article>
  );
};

const MoreAboutMeButton = () => {
  return (
    <article className="profile more-about-me">
      <button type="submit" className="welcome-more-button">
        <Link to='/about'>MORE ABOUT ME</Link>
      </button>
    </article>
  );
};