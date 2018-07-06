import React, { Component } from 'react';



export default class EventExample extends Component {
	
	constructor(props) {
		super(props);
		this.state={
			name:"chakrapani"
		};
	}

textChange(event) {
	event.preventDefault();
	this.setState({
	name:"new text"
	})
	//alert("without this keyword inside the bind")
}
	
	render() {
		return(
					<div className="w3-panel">
					{this.state.name}
					<br />
							<input type="button" className="w3-button w3-cyan" value="EventHandling" 
							onClick={this.textChange.bind(this)} />
							
						</div>
					)
	}

	}
