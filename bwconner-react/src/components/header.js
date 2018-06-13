import React, { Component } from 'react';

export default class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerClass: ""
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		console.log("scroll");
		let headerHeight = document.getElementById('main-header').clientHeight,
			scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
console.log(headerHeight); console.log(scrollTop);
		//show mini nav
		if (scrollTop > headerHeight ) {
			this.setState({
				headerClass: "header--in-view"
			});
		} else if (scrollTop <= headerHeight ) {
			this.setState({
				headerClass: ""
			});
		}
	}

	miniNavSetup() {
	}

	render() {
		return (
			<div>
				<div className="header" id="main-header">
					<a href="../pages/home"><h1 className="header__home-link header__home-link--large">Bruce Conner</h1></a>
					<div className="header__nav">
						<div className="header__link">
							<a>MY PROJECTS</a>
						</div>
						<div className="header__link">
							<a>MEDIA</a>
						</div>
						<div className="header__link">
							<a>CONTACT ME</a>
						</div>
					</div>
				</div>
				<div className={`header header--mini-nav ${this.state.headerClass}`}>
					<a href="../pages/home"><h2 className="header__home-link header__home-link--small">Bruce Conner</h2></a>
					<div className="header__nav">
						<div className="header__link">
							<a>MY PROJECTS</a>
						</div>
						<div className="header__link">
							<a>MEDIA</a>
						</div>
						<div className="header__link">
							<a>CONTACT ME</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}