import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div>

    		<div className="w3-row">
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			  <div className="w3-col m1 w3-center"></div>
			</div>

		     <div className="w3-row">
			  	<div className="w3-col m4 l3">
		    		<p></p>
		  		</div>
		  		<div className="w3-col m8 l6 w3-border  w3-card-4 w3-light-white">
		  			<p className="w3-center"><b>CREATE YOUR ACCOUNT</b></p>
		  			<p className="w3-center">This is step1</p>
		    		<p className="w3-center"><input type="text" placeholder="Email"/></p>
	        		<p className="w3-center"><input type="text" placeholder="Password"/></p>
	            	<p className="w3-center"><input type="text" placeholder="Confirm Password"/></p>
	            	<p className="w3-center"><button class="w3-button w3-green">Next</button></p>
  				</div>
		  		<div className="w3-col m4 l3">
		    		<p></p>
  				</div>
			</div> 
	      	      	           
      </div>
    );
  }
}
