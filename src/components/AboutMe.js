import React from 'react';
import './AboutMe.css';
import profilePicture from '../assets/profile-picture.jpg';
import BackgroundAnimation from './BackgroundAnimation'

const AboutMe = () => {
    return (
        <section className="about-me">
        <BackgroundAnimation />
        <h2 className="about-title">
            <span className="primary-number">1.</span> About me
        </h2>
        <div className="about-content">
            <img src={profilePicture} alt="Hector Martinez" className="profile-picture" />
            <div className="about-description">
                <p>
                    Do ullamco quis quis dolore dolore deserunt fugiat deserunt. Dolore nulla tempor officia aliqua fugiat ut est. 
                    Est proident adipisicing deserunt voluptate enim. Minim occaecat adipisicing magna enim laborum cupidatat aliqua. 
                    Cillum adipisicing officia duis exercitation Lorem excepteur. Ea amet eu anim veniam laborum aute anim. Sint culpa ipsum deserunt voluptate.
                </p>
            </div>
        </div>
        </section>
    );
};

export default AboutMe;
