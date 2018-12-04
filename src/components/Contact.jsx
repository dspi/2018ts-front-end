import React from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import "../styles/styles.css";

class Contact extends React.Component {

	constructor(props, context) {
		
		super(props, context);

		//this.handleChange = this.handleChange.bind(this);

		this.state = {
			first_name: '',		first_name_val_message_class: 'hidden',
			last_name: '',		last_name_val_message_class: 'hidden',
			email: '',			email_val_message_class: 'hidden',
			phone: '',			phone_val_message_class: 'hidden',
			message: '',		message_val_message_class: 'hidden'
		};
	}


	//input validation
	getValidationStateFirstName() {
		
		console.log(this);
		const length = this.state.first_name.length;
		let result = null;
		if (length > 1){
			result = 'success';
		}
		else if (length > 0){
			result = 'error';
		}
		return result;
	}
	getValidationStateLastName() {
		const length = this.state.last_name.length;
		if (length > 1) return 'success';
		else if (length > 0) return 'error';
		return null;
	}
	getValidationStateEmail() {
		
		const emailRegExp = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}"); //email
		const result = emailRegExp.test(this.state.email);
		if (result == true) return 'success';
		else if (result == false) return 'error';
		return null;
	}	
	getValidationStatePhone() {
		const phoneRegExp = new RegExp("^[0-9 -]*$");	//numeric with spaces
		const result = phoneRegExp.test(this.state.phone);
		if (result == true) return 'success';
		else if (result == false) return 'error';
		return null;
	}	
	getValidationStateMessage() {
		const length = this.state.message.length;
		if (length > 10) return 'success';
		else if (length > 0) return 'error';
		return null;
	}	

	handleChange(e, stateKey) {
		let css_class = 'hidden';
		switch(stateKey){
			case 'first_name':
			case 'last_name':				
			case 'email':
			case 'message':
				if( e.target.value=='' ) css_class = 'visible';
				break;				
			default:
				break;
		}
		
		//setState dynamically:	https://stackoverflow.com/a/38562736
		let stateObj = {}
		stateObj[stateKey] = e.target.value;
		stateObj[stateKey+'_val_message_class'] = css_class;
 
		this.setState(stateObj);
	}

	sendForm(e){		
		if( this.state.first_name.length<1 ){
			this.setState({first_name_val_message_class: 'visible'});
		}
		if( this.state.last_name.length<1 ){
			this.setState({last_name_val_message_class: 'visible'});
		}
		if( this.state.email.length<1 ){
			this.setState({email_val_message_class: 'visible'});
		}
		if( this.state.message.length<1 ){
			this.setState({message_val_message_class: 'visible'});
		}		
	}

	render(){	
		
		return(
		<React.Fragment>
		
		<div className="row">
			<div className="formHeader col-xs-12">
				<div className="text-center contactHeader"><b>WE WOULD LOVE TO</b></div>
				<div className="text-center contactHeader"><b>HEAR FROM YOU</b></div>
			</div>
		</div>
		
		<div className="row">
			<div className="formBackground col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			
				<FormGroup className="col-xs-12 col-sm-6 input-group-lg" controlId="first_name" validationState={this.getValidationStateFirstName()}>
					<ControlLabel className="hidden">FIRST NAME</ControlLabel>
					<FormControl type="text" className="contactInput" value={this.state.first_name} placeholder="First name" onChange={(e) => this.handleChange(e,'first_name')} />
					<FormControl.Feedback />
					<HelpBlock className={this.state.first_name_val_message_class}>We need your first name</HelpBlock>
				</FormGroup>

				<FormGroup className="col-xs-12 col-sm-6 input-group-lg" controlId="last_name" validationState={this.getValidationStateLastName()}>
					<ControlLabel className="hidden">LAST NAME</ControlLabel>
					<FormControl type="text" className="contactInput" value={this.state.value} placeholder="Last name" onChange={(e) => this.handleChange(e,'last_name')} />
					<FormControl.Feedback />
					<HelpBlock className={this.state.last_name_val_message_class}>We need your last name</HelpBlock>
				</FormGroup>
				
				<div className="clearfix"></div>
				
				<FormGroup className="col-xs-12 col-sm-6 input-group-lg" controlId="email" validationState={this.getValidationStateEmail()}>
					<ControlLabel className="hidden">EMAIL</ControlLabel>
					<FormControl type="text" className="contactInput" value={this.state.value} placeholder="Your e-mail address" onChange={(e) => this.handleChange(e,'email')} />
					<FormControl.Feedback />
					<HelpBlock className={this.state.email_val_message_class}>We need your email</HelpBlock>
				</FormGroup>

				<FormGroup className="col-xs-12 col-sm-6 input-group-lg" controlId="phone" validationState={this.getValidationStatePhone()}>
					<ControlLabel className="hidden">PHONE</ControlLabel>
					<FormControl type="text" className="contactInput" value={this.state.value} placeholder="Your phone no. (optional)" onChange={(e) => this.handleChange(e,'phone')} />
					<FormControl.Feedback />

				</FormGroup>

				<FormGroup className="col-xs-12 input-group-lg" controlId="message" validationState={this.getValidationStateMessage()}>
					<ControlLabel className="hidden">MESSAGE</ControlLabel>
					<FormControl componentClass="textarea" rows={5} className="contactInput"  value={this.state.value} placeholder="Your message..." onChange={(e) => this.handleChange(e,'message')} />
					<FormControl.Feedback />
					<HelpBlock className={this.state.message_val_message_class}>What do you have to say?</HelpBlock>
				</FormGroup>
				
			</div>
			
			<div className="col-xs-12 text-center">
				<Button bsStyle="danger" onClick={(e) => this.sendForm(e)} >	{/*don't need to bind if using arrow functions  https://github.com/facebook/react/issues/9851*/}
					Send
				</Button>
			</div>
			
			<div className="col-xs-12 forBackgroundImageLength"></div>
		</div>
		
		</React.Fragment>
		);
	}

}

export default Contact;
