import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';
import Services from './Services';
import ChooseUs from './ChooseUs';
import TodayOffer from './TodayOffer';
import { NavLink } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "from Road Trips to Weddings.",
        "with Unmatched Comfort and Convenience."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 500,
      backDelay: 2000,
      loop: true,
      showCursor: false
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="content-wrapper">
          <h1 className="hero-title">DriveEase</h1>
          <p className="hero-subtitle">
            Your Journey, Our Wheels — <span className="typed-text"></span>
          </p>
          <NavLink to='/vehicle'>
            <button className="cta-button">Rent Now</button>
          </NavLink>
        </div>
      </div>
      <Services />
      <ChooseUs />
      <TodayOffer />
    </>
  );
};

export default Home;