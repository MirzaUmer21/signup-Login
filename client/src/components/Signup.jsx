import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Axios from "axios";
import NavBar from "./NavBar";
export const Signup = () => {
	let navigate = useNavigate();
	const [input, setinput] = useState({
		username: "",
		email: "",
		address: "",
		password: "",
		confpassword: "",
	});


	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setinput({ ...input, [name]: value });
	};

	const submitHandler = (e) => {
		let path = `/login`;
		e.preventDefault();
		Axios.post("http://localhost:3001/insert", {
			username: input.username,
			email: input.email,
			address: input.address,
			password: input.password,
			confpassword: input.confpassword,
		}).then((res) => {
			if (res.data === "Success") {
				console.log("yes");
				navigate(path);
			}
			console.log(res);
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
						<Form method="POST" onSubmit={submitHandler}>
							<Row>
								<Form.Group as={Col} className="mb-3">
									<Form.Label>Username</Form.Label>
									<Form.Control
										value={input.username}
										onChange={handleInput}
										name="username"
										id="username"
										type="text"
									/>
								</Form.Group>

								<Form.Group as={Col} className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control
										value={input.email}
										onChange={handleInput}
										name="email"
										id="email"
										type="email"
									/>
								</Form.Group>
							</Row>
							<Row>
								<Form.Group as={Col} className="mb-3">
									<Form.Label>Address</Form.Label>
									<Form.Control
										value={input.password}
										onChange={handleInput}
										name="address"
										id="address"
										type="text"
									/>
								</Form.Group>
							</Row>
							<Row>
								<Form.Group as={Col} className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control
										value={input.password}
										onChange={handleInput}
										name="password"
										id="password"
										type="password"
									/>
								</Form.Group>

								<Form.Group as={Col} className="mb-3">
									<Form.Label>Confirm Password</Form.Label>

									<Form.Control
										value={input.confpassword}
										onChange={handleInput}
										type="password"
										name="confpassword"
										id="confpassword"
									/>
								</Form.Group>
							</Row>

							<Button
								type="submit"
								variant="primary"
								id="button-addon2"
								className="mb-5 mt-2"
							>
								SignUp
							</Button>
						</Form>
					</Col>
					<Col className="signupcover"></Col>
				</Row>
			</Container>
		</div>
	);
};
