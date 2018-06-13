import React, { Component } from 'react';

export default class Bio extends Component {
	render() {
		return (
			<div className="bio-section">
				<img className="bio-section__image" alt="Bruce Conner being interviewed" src="../images/me.jpg"/>
				<div className="bio-section__text">
					I am Bruce, a Columbus, Ohio based web developer, Marvel comics enthusiast and Cleveland Cavaliers fan. This is my website and development playground. If you would like information on what I have been working on you can visit <a href="bwconner/pages/projects.html">my projects.</a> If you would like to see examples of my code in action you can check those out <a href="bwconner/pages/media.html">here.</a> If you need to contact me, connect with me or view my resume the <a href="bwconner/pages/contact.html">contact me</a> page is the place for you.
				</div>
			</div>
		);
	}
}