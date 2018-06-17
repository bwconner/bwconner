import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-section">
					E-Mail me at <a href="mailto:bruce.conner.ii@gmail.com">bruce.conner.ii@gmail.com</a>
				</div>
				<div className="contact-section">
					Connect with me on <a target="blank" href="https://www.linkedin.com/in/bruce-conner-94585a9a/">LinkedIn</a>
				</div>
				<div className="contact-section">
					Collaborate with me on <a target="blank" href="https://github.com/bwconner">GitHub</a>
				</div>
				<div className="contact-section">
					Follow me on twitter <a target="blank" href="https://twitter.com/thebruceconner">@TheBruceCconner</a>
				</div>
				<div className="contact-section">
					Download a copy of my <a target="blank" href="Bruce_Conner.pdf">Résumé</a>
				</div>
			</div>
		);
	}
}

