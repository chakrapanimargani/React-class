import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";


class HomePage extends Component {

	navigationPage(event) {
		//this.props.history.push('/about');
	}

	render() {
			return(
				<div><label>this is home page</label>
				<Link to={'/about'}>
					<button className="w3-button w3-black" onClick={this.navigationPage.bind()} >goto about page11 </button>
				</Link>
			
				</div>
				)
		}
}

export default withRouter(HomePage);
