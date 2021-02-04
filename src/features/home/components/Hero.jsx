import React from 'react';

import './Hero.css';
import Button from '../../../components/boilerplate/Button';

const Hero = () => {
	return (
		<div className="hero sectionContainer">
			<div className="heroTitleArea">
				<h1>
					The first and only undergraduate quantum computing organization at the{' '}
					<span className="orangeHighlight">University of Illinois</span>
				</h1>
				<p>Aiming to eliminate the barrier of entry into the field for students of all backgrounds.</p>
				<div className="heroButtonPositioner">
					<Button text="Join Us on Discord!" link="https://discord.gg/PmaXeHPaFs" />
				</div>
			</div>
			<img className="heroBlochSphere" src="/blochSphere.png" alt="" />
		</div>
	);
};

export default Hero;
