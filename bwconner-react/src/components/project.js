import React, { Component } from 'react';

export default class Project extends Component {

	buildImageMarkup(projectImage) {
		return <img className="project__image" src={projectImage}/>;
	}

	render() {
		const {projectTitle, projectDescription, projectUrl, projectImage} = this.props;

		let imageClass = projectImage ? "project__image" : "project__live-type";
		let imageOutput = projectImage ?  this.buildImageMarkup(projectImage) : projectTitle;

		return (
			<div className="project">
				<a href={projectUrl}><div className={imageClass}>{imageOutput}</div></a>
				<div className="project__details">
					<a href="http://bwconner.com/comiccollector/pages/home"><div className="project__title">{projectTitle}</div></a>
					<div className="project__desc">{projectDescription}</div>
				</div>	
			</div>
		);
	}
}