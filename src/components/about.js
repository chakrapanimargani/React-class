import React, { Component } from 'react';
import {Link,withRouter} from "react-router-dom";

export default class AboutPage extends Component {

	render() {
			return(
				<div><label>this is about page</label>
					<Link to={'/'}>
						<button className="w3-button w3-black"  >goto back page</button>
					</Link>
				</div>
				)
		}
}