import React, { Component } from "react";
import { hot } from "react-hot-loader";
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import "./bootstrap/css/bootstrap.min.css";
import "./bootstrap/fonts/glyphicons-halflings-regular.svg";

class App extends Component{

	constructor(props){
		super(props);

		this.state = {
			test: 'TestState'+(new Date()),
			posts: []							//https://stackoverflow.com/a/39329129/1695299
		};

		axios.get(`https://api.unsplash.com/search/photos/?page=1&query='africa'&client_id=9f4798f76b6dbaecb5fbabb5b7155e55833078568f6f3d4fbfdef89d0a233c08`)

		.then(res => {			
			const posts = res.data.results.map(obj => {
			   var newObj = {};
			   newObj['key'] = obj.id;
			   newObj['url'] = obj.urls.small;
			   newObj['desc'] = obj.description;
			   return newObj;
			});
			this.setState({ posts });
		});			
	}
 		
	render(){
		return(
			<React.Fragment>		
				<Router>
					<div>
						<Navigation />
						<Main posts = {this.state.posts} />
					</div>
				</Router>					
			</React.Fragment>
		);
	}
	
}

export default hot(module)(App);