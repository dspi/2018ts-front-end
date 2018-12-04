import React from "react";

//import * as ReactBootstrap from 'react-bootstrap';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends React.Component{

	render(){
		return(
			<Navbar  collapseOnSelect fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/"></Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="/">
							<NavItem>Home</NavItem>
						</LinkContainer>
						<LinkContainer to="/people">
							<NavItem>People</NavItem>
						</LinkContainer>									
						<LinkContainer to="/contact">
							<NavItem>Contact</NavItem>
						</LinkContainer> 
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
  
}

export default Navigation;
