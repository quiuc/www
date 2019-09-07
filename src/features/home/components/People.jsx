import React, { forwardRef } from 'react';

import './People.css';
import Person from './Person';

const People = (props, ref) => {
	return (
		<div ref={ref} className="peopleSection sectionContainer">
			<h1>People</h1>
			<div className="peopleList">
				<Person name="Bailey Tincher" position="President" imageSrc="/people/bailey.jpg" />
				<Person name="Guangkuo Liu" position="Education Committee" imageSrc="/people/guangkuo.jpg" />
				<Person name="Jenn Mueng" position="Web Development" imageSrc="/people/jenn.jpg" />
			</div>
		</div>
	);
};

export default forwardRef(People);
