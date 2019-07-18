import React, { useState, useEffect, forwardRef } from 'react';
import Markdown from 'react-markdown';

import './About.css';
import aboutMdRef from '../resources/about.md';
import workshopsMdRef from '../resources/workshops.md';
import researchMdRef from '../resources/research.md';
import Button from '../../../Components/boilerplate/Button';

const About = (props, ref) => {
	const [aboutMd, setAboutMd] = useState(null);
	const [workshopsMd, setWorkshopsMd] = useState(null);
	const [researchMd, setResearchMd] = useState(null);

	useEffect(() => {
		fetch(aboutMdRef)
			.then(md => md.text())
			.then(text => setAboutMd(text));

		fetch(workshopsMdRef)
			.then(md => md.text())
			.then(text => setWorkshopsMd(text));

		fetch(researchMdRef)
			.then(md => md.text())
			.then(text => setResearchMd(text));
	});

	return (
		<>
			<div ref={ref} className="sectionContainer">
				<div className="aboutSection">
					<Markdown source={aboutMd} />
				</div>
				<div className="aboutSection">
					<Markdown source={workshopsMd} />
					<div className="aboutButtonSpacing" />
					<Button text="Check out our workshops" />
				</div>
				<div className="aboutSection">
					<Markdown source={researchMd} />
					<div className="aboutButtonSpacing" />
					<Button text="Check out our projects" />
				</div>
			</div>
		</>
	);
};

export default forwardRef(About);
