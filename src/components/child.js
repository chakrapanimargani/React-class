import React, { Component } from 'react';

import Third from './third';

export default class Child extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
	}

	render() {
		console.log("inside child component..",this.props)
		return (
			<div><p>this is child </p> {this.props.dataaaa}
			 <Third /></div>
			)
	}
}