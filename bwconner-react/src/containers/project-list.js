import React, { Component } from 'react';
import Project from '../components/project';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class ProjectList extends Component {

	renderProjectList() {
		return this.props.projects.map(project => {
			return (
				<Project 
					projectTitle={project.projectTitle}
					projectDescription={project.projectDescription} 
					projectUrl={project.projectUrl}
					projectImage={project.projectImage}
				/>
			);
		});
	}

	render() {
		return(
			<div className="project-list">
				{this.renderProjectList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects
	};
}

export default connect(mapStateToProps)(ProjectList);
