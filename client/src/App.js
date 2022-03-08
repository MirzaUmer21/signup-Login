import "./App.css";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Home } from "./components/Home";

import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
function App() {
	return (
		<div className="App">
			<Router>
				<>
					<Routes>
						<Route exact path="/" element={<Navigate replace to="/home" />}></Route>
						<Route path="/home" element={<Home />}></Route>
						<Route path="/about" element={<AboutUs />}></Route>
						<Route path="/contact" element={<ContactUs />}></Route>
						<Route path="/signup" element={<Signup/>}></Route>
						<Route path="/login" element={<Login/>}></Route>
					</Routes>
				</>
			</Router>
		</div>
	);
}

export default App;
