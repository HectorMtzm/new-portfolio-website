import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./assets/styles/App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<AboutMe />
				<Portfolio />
			</div>
		</Router>
	);
}

export default App;
