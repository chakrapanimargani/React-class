import React, { Component } from 'react';

export default class Application extends Component {
	constructor(props) {
		super(props);
		this.state={
			name:"chakrapani",
			arrayname:["first","second","third"],
			booleanVal:false
		};
	}
  render() {
  	console.log("welcome message",this.state.arrayname)
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
		     	<div className="w3-col s12 m12 l12 w3-border  w3-card-4 w3-blue card-design" >
				  		<div className="w3-col s12 m7 l7 w3-border  w3-card-4 w3-blue card-design" >
				  			<p className="w3-center"><b>Leave us a message</b></p>
				  			<div className="w3-left w3-padding-16 w3-container">
				    			Name   <input className="w3-padding-8" type="text" style={{width:"70%",marginBottom:"10px"}} /> <br />
			        			Phone <input type="text"  style={{width:"70%",marginBottom:"10px"}} /><br />
			            		Email <input type="text"  style={{width:"70%",marginBottom:"10px"}} /><br />
			            		Newsletter 	<input className="w3-check" type="checkbox"/> <label>Subscribe me to loewy's Latest(View archive)</label><br/>
			            		Comments <textarea name="comment" form="usrform">Enter text here...</textarea><br/>
			            		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			            		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="w3-button w3-green">Cancel</button>&nbsp;<button className="w3-button w3-green">Send</button>
			            		<br/><br/><br/>
			            		<tabel>
			            			<tr>
			            				<td>555 Broadhollow Road<br/> Suite 270<br/> Melville,NY 11747</td>
			            				<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			            				<td>Tel : 631.249.2429<br/> Fax : 631.249.2436</td>
			            			</tr>
			            		</tabel>

			            	</div>
		  				</div>
			    		<div className="w3-col s12 m5 l5   w3-card-4 w3-blue card-design" >
			  			<p className="w3-center"><b>...or leave us a doodle</b></p><br/>
			  			<img src="not-found.png" /><img src="http://goo.gl/ijai22" /><br/>
			  			&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-edit"></i><i className="fa fa-eraser"></i>			  			
			  			<button className="w3-button w3-green">Send Doodle&nbsp;<i className="fa fa-caret-right"></i></button>
			  			</div>
  				</div>
			</div> 
	      	      	           
      </div>
    );
  }
}
