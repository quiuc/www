import React, { forwardRef } from 'react';

import './Contact.css';

const Contact = (props, ref) => {
	return (
		<>
			<div ref={ref} className="contactSectionContainer">
				<div className="line" />
				<h1>Get in touch</h1>
				<div className="contactSections">
					<div className="contactSection">
						<p className="contactRow">
							<b>Corporations: </b>
							<a href="mailto:outreach@quiuc.org">outreach@quiuc.org</a>
						</p>
						<p className="contactRow">
							<b>Education Team: </b>
							<a href="mailto:education@quiuc.org">education@quiuc.org</a>
						</p>
						<p className="contactRow">
							<b>General Inquiry: </b>
							<a href="mailto:info@quiuc.org">info@quiuc.org</a>
						</p>
					</div>
					<div className="socialContact contactSection">
						<a href="https://reddit.com/u/quiuc" className="contactRow">
							Reddit
						</a>
						<a href="https://www.facebook.com/uiucquantum/" className="contactRow">
							Facebook
						</a>
						<a href="https://www.instagram.com/quiuc_/" className="contactRow">
							Instagram
						</a>
						<a href="https://quiuc.slack.com" className="contactRow">
							Slack
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default forwardRef(Contact);
