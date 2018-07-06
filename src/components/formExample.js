import React, { Component } from 'react';



export default class FormExample extends Component {

constructor(props) {
		super(props);
		this.state={
			emailValue:"",
			pwdValue:"",
			confPwdValue:"",
			genderValue:"",
			hobby1CheckBox: true,
			hobby2CheckBox: true,
			hobby3CheckBox: true,
			hobby4CheckBox: true,
			confirmation: false,
			mailEmptyValidation:false,
			mailFormatValidation:false,
			pwdEmptyValidation:false,
			confPwdEmptyValidation:false,
			pwdEqualValidation:true
		};

	}

emailReading(event) {
	let emailText = event.target.value;

	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


	if((emailText.length>0) && emailText.match(mailformat)){
		this.setState({
			emailValue:emailText,
			mailEmptyValidation:false,
			mailFormatValidation:false			
		})
	} else if(emailText.length<=0){
		this.setState({
			mailEmptyValidation:true
		})
	} else if(!emailText.match(mailformat)){
		this.setState({
			mailFormatValidation:true
		})
	}
	console.log("email is",this.state.emailValue);
}

pwdReading = event =>  {
	let pwdText = event.target.value;
	if(pwdText.length>0){
		this.setState({
			pwdValue:pwdText			
		},()=>{
			console.log("password is",this.state.pwdValue);
		})
	}
	
}

onkeyDown(event) {
	if(event.keyCode === 8) {
		console.log("onkeyDown")
	}
}

confPwdReading(event) {
	let confPwdText = event.target.value;
	if(confPwdText.length>0){
		this.setState({
			confPwdValue:confPwdText			
		},()=>{
			console.log("confirm password is",this.state.confPwdValue);
		})
	}
	
}

setGender(event) {
	let genderVal = event.target.value;
	console.log("gender is 1:",genderVal);
	this.setState({
			genderValue:genderVal			
		},()=>{
			console.log("gender is in state:",this.state.genderValue);		
		})
	
}

  hobby1Check(event) {
    this.setState({
      hobby1CheckBox: !this.state.hobby1CheckBox
    });
    console.log("hobby1CheckBox status:",this.state.hobby1CheckBox);
  }

  hobby2Check(event) {
    this.setState({
      hobby2CheckBox: !this.state.hobby2CheckBox
    });
    console.log("hobby2CheckBox status:",this.state.hobby2CheckBox);
  }

  hobby3Check(event) {
    this.setState({
      hobby3CheckBox: !this.state.hobby3CheckBox
    });
    console.log("hobby3CheckBox status:",this.state.hobby3CheckBox);
  }

  hobby4Check(event) {
    this.setState({
      hobby4CheckBox: !this.state.hobby4CheckBox
    });
    console.log("hobby4CheckBox status:",this.state.hobby4CheckBox);
  }



submitButton(event) {

	var user = {};
	if(this.state.emailValue && this.state.pwdValue && this.state.confPwdValue && this.state.genderValue) {
		user['email'] = this.state.emailValue;
		user['password'] = this.state.pwdValue;
		user['confirmpwd'] = this.state.confPwdValue;
		user['gender'] = this.state.genderValue;
	}

	var hobbies=[];

	if(!this.state.hobby1CheckBox) {
		console.log("check1 clicked");
		hobbies.push("Playing");
	}
	if(!this.state.hobby2CheckBox) {
		console.log("check2 clicked");
		hobbies.push("Travelling");
	}
	if(!this.state.hobby3CheckBox) {
		console.log("check3 clicked");
		hobbies.push("Listening Music");
	}
	if(!this.state.hobby4CheckBox) {
		console.log("check4 clicked");
		hobbies.push("Reading Books");
	}

	user['hobbies'] = hobbies;
	this.setState({
		confirmation:true
	});
	if(this.state.emailValue){
		this.setState({
			mailEmptyValidation:false,
			mailFormatValidation:false
		})
	} else {
		this.setState({
			mailEmptyValidation:true
		})
	}

	//password validation
	if(this.state.pwdValue){
		this.setState({
			pwdEmptyValidation:false
		})
	} else {
		this.setState({
			pwdEmptyValidation:true
		})
	}

	console.log("confirm password val:",this.state.confPwdValue);

	//confirmation password validation
	if(this.state.confPwdValue){
		this.setState({
			confPwdEmptyValidation:false
		})
	} else {
		this.setState({
			confPwdEmptyValidation:true
		})
	}

	//password equal check
	if(this.state.pwdValue === this.state.confPwdValue){
		this.setState({
			pwdEqualValidation:true
		})
	} else{
		this.setState({
			pwdEqualValidation:false
		})
	}
	//console.log("hobbies values:",hobbies);

	console.log("object values:",user);

}





		render() {
			return(
				<div className="w3-panel">
						<form name="testForm">
							 
	           				 
								{/*{(this.state.confirmation)
									?
									<label>Form registration successful</label>
									: */ }
									<div> 
										<div><input type="text" placeholder="Email" onChange={this.emailReading.bind(this)} />
											 {(this.state.mailEmptyValidation)
												? <label>email id should not empty</label>
												: null
											 }
											 {(this.state.mailFormatValidation)
												? <label>please enter correct mail id format</label>
												: null
											 }	
										</div>

				           				 <div><input type="text" placeholder="Password" value={this.state.pwdValue} onChange={this.pwdReading.bind(this)} onKeyDown={this.onkeyDown.bind(this)}/>
				           				 {(this.state.pwdEmptyValidation)
												? <label>Password should not be empty</label>
												: null
										 }
				           				 </div>

				           				 <div><input type="text" placeholder="Confirm Password" value={this.state.confPwdValue} onChange={this.confPwdReading.bind(this)}/>
				           				 {(this.state.confPwdEmptyValidation)
												? <label>Confirmation password should not be empty</label>
												: null
										 }
										 {(!this.state.pwdEqualValidation)
												? <label>Password and Confirmation password should be same</label>
												: null
										 }
										 
				           				 </div>
				           				 <br />
				           				 <div onChange={this.setGender.bind(this)}>
			        						<input type="radio" value="MALE" name="gender"/> Male
			       							<input type="radio" value="FEMALE" name="gender"/> Female
			      						 </div>
			      						 <br /><br />
			      						 <span>Hobbies:<br />
									        <input type="checkbox" onClick={this.hobby1Check.bind(this)}/><label>Playing</label><br />
									        <input type="checkbox" onClick={this.hobby2Check.bind(this)}/><label>Travelling</label><br />
									        <input type="checkbox" onClick={this.hobby3Check.bind(this)}/><label>Listening Music</label><br />
									        <input type="checkbox" onClick={this.hobby4Check.bind(this)}/><label>Reading Books</label><br />
			      						 </span>
			      						  <br /><br />
			      						  <input type="button" className="w3-button w3-cyan" value="EventHandling" 
											onClick={this.submitButton.bind(this)} />
		      						  </div>
								
						</form>
				</div>
					)
		}
}