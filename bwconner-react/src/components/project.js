import React, { Component } from 'react';

export default class Project extends Component {
	render() {
		const {projectTitle, projectDescription, projectUrl, projectImage} = this.props;

		return (
			<div className="project">
				<a href={projectUrl}><div className="project__live-type">{projectTitle}</div></a>
				<div className="project__details">
					<a href="http://bwconner.com/comiccollector/pages/home"><div className="project__title">{projectTitle}</div></a>
					<div className="project__desc">{projectDescription}</div>
				</div>	
			</div>
		);
	}
}