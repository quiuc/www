import React, { forwardRef } from 'react';

import './People.css';
import Person from './Person';

const People = (props, ref) => {
	return (
		<div ref={ref} className="peopleSection sectionContainer">
			<h1>People</h1>
			<div className="peopleList">
				<Person name="Graeme Jacobson" position="Co-Chair" imageSrc="/people/graeme.jpg" />
				<Person name="Bailey Tincher" position="Co-Chair" imageSrc="/people/bailey.jpg" />
				<Person name="Guangkuo Liu" position="Education Committee" imageSrc="/people/guangkuo.jpg" />
				<Person
					name="Jenn Mueng"
					position="Web Development"
					imageSrc="/people/jenn.jpg"
					resumeLink="https://jennmueng.com/resume"
				/>
				<Person name="Ajay Arasanipalai" position="" imageSrc="" />
				<Person name="David Flint" position="" imageSrc="/people/david.jpg" />
			</div>
		</div>
	);
};

export default forwardRef(People);
