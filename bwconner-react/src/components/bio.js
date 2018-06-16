import React, { Component } from 'react';

export default class Bio extends Component {
	render() {
		return (
			<div className="bio-section">
				<img className="bio-section__image" alt="Bruce Conner being interviewed" src="../images/me.jpg"/>
				<div className="bio-section__text">
					I am Bruce, a San Francisco, California based web developer, Marvel comics enthusiast and Cleveland Cavaliers fan.
				</div>
			</div>
		);
	}
}