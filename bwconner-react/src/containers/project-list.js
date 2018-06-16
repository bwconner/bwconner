import React, { Component } from 'react';
import Project from '../components/project';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class ProjectList extends Component {

	renderProjectList() {
		return this.props.pictures.map(picture => {
			var searchTerm = this.props.term.toLowerCase();
			return (
				<div 
					key={picture.id} 
					onClick={() => this.props.selectImage(picture)}
					className="search-result-item">
					<Link to={`/picture/${picture.id}`} >
						<img src={picture.filepath} />
						<p>{picture.title} - {picture.year}</p>
					</Link>
				</div>
			);
		});
	}

	render() {
		return(
			<div className="work-projects">
				{this.retrieveProjectInformation()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	//Return as props to PictureList
	return {
		pictures: state.pictures,
		term: state.term
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectImage: selectImage}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);