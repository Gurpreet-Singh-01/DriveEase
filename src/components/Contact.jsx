import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [Fname,setFname] = useState('');
  const [Lname,setLname] = useState('');
  const [Email,setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Contact Us Data:', Fname, Lname, Email, Message);
  }

  return (
    <div className='contact-container'>
      <div className='contact-container-left'>
        <div className='contact-left-heading'>
          <h1>Get in touch with us</h1>
        </div>
        <div className='contact-left-desc'>
          <p><i className="fa-solid fa-envelope"></i>connect@driveease.com</p>
          <p><i className="fa-solid fa-phone"></i>9876543210</p>
          <p><i className="fa-solid fa-location-dot"></i>Ludhiana, Punjab, India</p>
        </div>
      </div>
      <div className='contact-container-right'>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <input
              type="text"
              name={Fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name={Lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <textarea
            name={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>
          <button className='contactUs-btn' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;