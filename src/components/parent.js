import React, { Component } from 'react';

import Child from './child';

const jsonImport = [{ 
					"name" : "Home"					 
					},
					{
						"name" : "Calander"
					},
					{
						"name" : "Clients"
					},
					{
						"name" : "Accounting",
						"subMenu" : [ {
										"title" : "submenuName1"
									  }								
									]
					},
					{
						"name" : "Projects"
					},
					{
						"name" : "Messages"
					},
					{
						"name" : "Support"
					},
					{
						"name" : "Templates"
					},
					{
						"name" : "Settings"
					},
					{
						"name" : "Users"
					},
					{
						"name" : "Leads",
						"subMenu" : [ {
										"title" : "submenuName2"
									  }								
									]
					},
					{
						"name" : "Leads Management"						
					}];



export default class Parent extends Component {
	constructor(props) {
		super(props);
		this.state={
			name:"chakrapani",
			arrayname:["first","second","third"],
			jsonData:jsonImport,
		};
	}

	render() {
		var jsonDummy = [];


		if(this.state.jsonData) {
			console.log("jsondata==>",this.state.jsonData)	
			jsonDummy = this.state.jsonData.map((data1,index1) =>{
				console.log("inside json...",data1)
				var jsonSubMenu = [];
				if(data1.subMenu) {
					jsonSubMenu = data1.subMenu.map((data2,index2) => {
								return(
										<div>
											<label>{data2.title}</label>
										</div>
									)
							})
				}
				return(
						<div className="w3-panel">
							<label className="w3-cyan">{data1.name} </label>
							{jsonSubMenu}
						</div>
					)
			})
		}
		
		var disp = [];
		if(this.state.arrayname.length > 0) {
			disp=this.state.arrayname.map((data,index) => {
				return(
					<div key={index} className="w3-panel">
						<label className="w3-cyan">{data} </label>
					</div> 
					)
			})
		}
		return (
			<div>
				<p>this is parent</p>
				<Child dataaaa={this.state.name} />
				{disp}
				{jsonDummy}
				static....
			</div>
			)
	}
}