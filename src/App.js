import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

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
