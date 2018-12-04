import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";

function People() {
  return (
    <div className="jumbotron">
      <h2>People</h2>
    </div>
  );
}

class Main extends React.Component {

  render() {
    return (
		<React.Fragment>
		<div className="container main">
			{/*
				https://tylermcginnis.com/react-router-pass-props-to-components/
				https://stackoverflow.com/a/48147133/1695299	
			*/}
			<Route exact path="/"	render	  = {(props) => <Home posts={this.props.posts} {...props} />} />		
			<Route path="/people"	component = {People} />        
			<Route path="/contact"	component = {Contact} />
        </div>
        </React.Fragment>
    );
  }
  
}

export default Main;
