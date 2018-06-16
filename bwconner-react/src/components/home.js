import React, { Component } from 'react';
import Bio from './bio';
import ProjectList from '../containers/project-list';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Bio />
				<ProjectList />
			</div>
		);
	}
}