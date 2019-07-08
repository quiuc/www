import React from 'react';

import './Hero.css';
import Button from '../../../Components/boilerplate/Button';

const Hero = () => {
    return (
        <div className="hero sectionContainer">
            <div className="heroTitleArea">
                <h1>The first and only undergraduate quantum computing organization at the University of Illinois</h1>
                <p>Aiming to eliminate the barrier of entry into the field for students of all backgrounds.</p>
                <div className="heroButtonPositioner">
                    <Button text="Join Us" link="https://quiuc.slack.com" />
                </div>
            </div>
            <img className="heroBlochSphere" src="/assets/blochSphere.png" />
        </div>
    );
};

export default Hero;
