import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-section-1 footer-section'>
          <h1>DriveEase</h1>
          <p>Subscribe to the newsletter</p>
          <div className='footer-letterHead'>
            <input type='email' placeholder='E-mail' />
            <i className="fa-solid fa-arrow-right" ></i>
          </div>
        </div>

        <div className='footer-section-2 footer-section footer-section-links'>
          <h2>Top Cities</h2>
          <ul>
            <li>Delhi</li>
            <li>Chandigarh</li>
            <li>Ludhiana</li>
            <li>Shimla</li>
          </ul>
        </div>

        <div className='footer-section-3 footer-section footer-section-links'>
          <h2>Explore</h2>
          <ul>
            <li>Intercity Rides</li>
            <li>Limousine Services</li>
            <li>Private Car Services</li>
            <li>Airport Services</li>
          </ul>
        </div>

        <div className='footer-section-4 footer-section footer-section-links'>
          <h2>Intercity Rides</h2>
          <ul>
            <li>Ludhiana - Delhi</li>
            <li>Ludhiana - Chandigarh</li>
            <li>Chandigarh - Delhi</li>
            <li>Chandigarh - Delhi</li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-copy-rights'>
          <i className="fa-regular fa-copyright"></i>
          <div className='CR-text'>2024 DriveEase</div>
        </div>
        <div className='footer-social-links'>
        <ul>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
          <li><i className="fa-brands fa-youtube"></i></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer