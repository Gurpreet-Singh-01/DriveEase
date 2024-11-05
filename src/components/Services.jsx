import React from 'react'
import './Services.css'
import Airport from '../assets/Airport.jpg'
import Business from '../assets/Business.jpg'
import Intercity from '../assets/Intercity.jpeg'
import Wedding from '../assets/Wedding.jpg'

const Services = () => {
    return (
        <div className='services-container'>
            <h1 className='services-heading'>Our Services</h1>
            <div className='services-wrapper'>
                <div className="service-card">
                    <div className="service-image">
                        <img src={Airport} alt="Airport transfer service" />
                    </div>
                    <div className="service-content">
                        <h2 className="service-title">Airport Transfers</h2>
                        <p className="service-description">
                            With additional wait time and flight tracking in case of delays, our services are optimized to make every airport transfer a breeze.
                        </p>
                        <button className="service-btn">Read More</button>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-image">
                        <img src={Intercity} alt="Airport transfer service" />
                    </div>
                    <div className="service-content">
                        <h2 className="service-title">Intercity Trips</h2>
                        <p className="service-description">
                            Your Stressfree solution for travelling between cities all over the world.
                        </p>
                        <button className="service-btn">Read More</button>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-image">
                        <img src={Wedding} alt="Airport transfer service" />
                    </div>
                    <div className="service-content">
                        <h2 className="service-title">Wedding Events</h2>
                        <p className="service-description">
                            Our friendly and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.
                        </p>
                        <button className="service-btn">Read More</button>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-image">
                        <img src={Business} alt="Airport transfer service" />
                    </div>
                    <div className="service-content">
                        <h2 className="service-title">Business Meeting</h2>
                        <p className="service-description">
                            Focus on meeting with your partners, forget about the road and the car which will distract your thoughts.
                        </p>
                        <button className="service-btn">Read More</button>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Services