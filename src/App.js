import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

function App() {
	const techData = [
		{
			name: "Java",
			image: "https://camo.githubusercontent.com/651195b8c66a9dd22316e672992077dbcecea4ca904b45a6681558ebc0ecc517/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f656e2f7468756d622f332f33302f4a6176615f70726f6772616d6d696e675f6c616e67756167655f6c6f676f2e7376672f33303070782d4a6176615f70726f6772616d6d696e675f6c616e67756167655f6c6f676f2e7376672e706e67",
		},
		{
			name: "JavaScript",
			image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433",
		},
		{
			name: "C",
			image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png?20201023095457",
		},
		{
			name: "C++",
			image: "https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png?20210422185554",
		},
		{
			name: "Spring Boot",
			image: "https://spring.io/img/spring.svg",
		},
		{
			name: "Hibernate",
			image: "https://www.javatpoint.com/images/hibernate/hibernate2.png",
		},
		{
			name: "AWS",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png?20170912170050",
		},
		{
			name: "Docker",
			image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
		},
		{
			name: "Kubernetes",
			image: "https://cncf-branding.netlify.app/img/projects/kubernetes/icon/color/kubernetes-icon-color.png",
		},
		{
			name: "MongoDB",
			image: "https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress",
		},
		{
			name: "MySQL",
			image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
		},
		{
			name: "HTML",
			image: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
		},
		{
			name: "CSS",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png",
		},
	];

	return (
		<Router>
			<div className="App">
				<Header />
				<AboutMe />
				<Technologies techData={techData} />
				{/* Add your components for other sections here */}
			</div>
		</Router>
	);
}

export default App;
