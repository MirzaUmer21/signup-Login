import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {  Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Brand className="navlogo" as={Link} to={"/home"}>
						DevHawx
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to={"/home"}>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to={"/about"}>
								About Us
							</Nav.Link>
							<Nav.Link as={Link} to={"/contact"}>
								Contact Us
							</Nav.Link>
							<Nav.Link  as={Link} to={"/signup"}>
								SignUp
							</Nav.Link>
							<Nav.Link  as={Link} to={"/login"}>
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
export default NavBar;
