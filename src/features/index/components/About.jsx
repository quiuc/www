import React, { forwardRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './About.css';
/* import aboutMdRef from '../resources/about.md';
import workshopsMdRef from '../resources/workshops.md';
import researchMdRef from '../resources/research.md'; */
// import Button from '../../../Components/boilerplate/Button';

const About = (props, ref) => {
	return (
		// Uses gatsby-transform-remark and graphql to query for .md files
		<StaticQuery
			query={graphql`
				query {
					allMarkdownRemark(sort: { fields: frontmatter___title }) {
						nodes {
							html
						}
					}
				}
			`} /*
				Tried to use regex here with
				filter: {fileAbsolutePath: {regex: "/\\/about\\//g"}}
				to only take from the src/markdown/about subfolder however, for some reason this limits the results to just 2.

				IF MORE MARKDOWN FILES ARE ADDED, THIS NEEDS TO BE ADDRESSED.
			*/
			render={data => {
				const { nodes } = data.allMarkdownRemark;
				return (
					<div ref={ref} className="sectionContainer">
						{nodes.map(node => {
							return (
								<div
									className="aboutSection"
									key={node.id}
									dangerouslySetInnerHTML={{ __html: node.html }}
								/>
							);
						})}
					</div>
				);
			}}
		/>
	);
};

export default forwardRef(About);
