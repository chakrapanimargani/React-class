import React, { Component } from 'react';

export default class Third extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
	}

	render() {
		console.log("inside third component..",this.props)
		return (
			<div><p>this is third </p> {this.props.param}</div>
			)
	}
}