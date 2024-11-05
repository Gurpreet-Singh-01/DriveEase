import React from 'react';
import './ChooseUs.css';
import BookingImg from '../assets/Booking.png';
import CarImg from '../assets/Car.png';
import DriverImg from '../assets/Driver.png';
import PaymentImg from '../assets/Payment.png';

const ChooseUs = () => {
  const features = [
    { img: BookingImg, title: 'Easy Online Booking', description: 'Book your ride effortlessly through our intuitive online platform.' },
    { img: CarImg, title: 'Wide Range of Vehicles', description: 'Choose from our diverse fleet to find the perfect car for your needs.' },
    { img: DriverImg, title: 'Professional Drivers', description: 'Our experienced drivers ensure a safe and comfortable journey.' },
    { img: PaymentImg, title: 'Secure Payments', description: 'Enjoy peace of mind with our secure and convenient payment options.' },
  ];

  return (
    <div className='chooseUs-container'>
      <h1>Why Choose Us</h1>
      <div className='choose-grid'>
        {features.map((feature, index) => (
          <div key={index} className='choose-gridContainer'>
            <div className='choose-img-bg'>
              <img src={feature.img} alt={feature.title} />
            </div>
            <div className='choose-gridImgDecs'>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;