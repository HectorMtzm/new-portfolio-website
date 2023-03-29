import React from "react";
import "./AboutMe.css";
import profilePicture from "../assets/profile-picture.jpg";
import BackgroundAnimation from "./BackgroundAnimation";
import Workexperience from "./WorkExperience";
import Technologies from "./Technologies";

const AboutMe = () => {
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
			image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/hibernate_logo_icon_171004.png",
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
			image: "https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png?f=avif&w=256",
		},
		{
			name: "MySQL",
			image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
		},
	];
	return (
		<section className="about-me">
			<BackgroundAnimation />
			<h2 className="about-title">
				<span className="primary-number">1.</span> About me
			</h2>
			<div clas   sName="about-content-wrapper">
				<div className="about-content">
					<img src={profilePicture} alt="Hector Martinez" className="profile-picture" />
					<p className="about-description content-blurred-bg">Do ullamco quis quis dolore dolore deserunt fugiat deserunt. Dolore nulla tempor officia aliqua fugiat ut est. Est proident adipisicing deserunt voluptate enim. Minim occaecat adipisicing magna enim laborum cupidatat aliqua. Cillum adipisicing officia duis exercitation Lorem excepteur. Ea amet eu anim veniam laborum aute anim. Sint culpa ipsum deserunt voluptate.</p>
				</div>
				{/* <Workexperience /> */}
			</div>
			<Technologies techData={techData} />
		</section>
	);
};

export default AboutMe;
