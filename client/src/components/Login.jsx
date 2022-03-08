import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import Axios from "axios";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Login = (e) => {
	let navigate = useNavigate();
	const [input, setinput] = useState({
		email: "",
		password: "",
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setinput({ ...input, [name]: value });
	};
	const loginhandler = () => {
		let path = `/home`;
		Axios.get(
			`http://localhost:3001/find/${input.email}/${input.password}`
		).then((res) => {
			// console.log(res.data);
			if (
				res.data &&
				res.data.email === input.email &&
				res.data.password === input.password
			) {
				console.log("successful");
				navigate(path);
			}
		});
	};
	return (
		<div>
			<NavBar />
			<Container>
				<h1 className="mt-5 mb-4 text-center signup-site-heading">DevHawx</h1>
				<Row>
					<Col className="bordersolid">
						<h2 className="text-center mb-4 mt-2">SignUp</h2>
						<Form>
							<Form.Group as={Row} className="content mb-3">
								<Form.Label className="p-0">Email</Form.Label>
								<Form.Control
									value={input.email}
									onChange={handleInput}
									name="email"
									id="email"
									type="email"
								/>
							</Form.Group>

							<Form.Group as={Row} className="content mb-3">
								<Form.Label className="p-0">Password</Form.Label>
								<Form.Control
									value={input.password}
									onChange={handleInput}
									name="password"
									id="password"
									type="password"
								/>
							</Form.Group>

							<Button
								onClick={loginhandler}
								variant="primary"
								id="button-addon2"
								className="mb-5 mt-2"
							>
								Login
							</Button>
						</Form>
					</Col>
					<Col className="signupcover"></Col>
				</Row>
			</Container>
		</div>
	);
};
