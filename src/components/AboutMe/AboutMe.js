import React, { useRef } from "react";
import "../AboutMe/AboutMe.css";
import profilePicture from "../../assets/images/profile-picture.jpg";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Workexperience from "../WorkExperience/WorkExperience";
import Technologies from "../Technologies/Technologies";
import techData from "../../data/tech_data.json";

const AboutMe = () => {
	const techStackRef = useRef(null);
	const aboutMeRef = useRef(null);

	return (
		<section className="about-me" ref={aboutMeRef}>
			<BackgroundAnimation aboutMeRef={aboutMeRef} />
			<h2 className="section-header">
				<span className="primary-number">1.</span> About me
			</h2>
			<div className="about-content-wrapper">
				<div className="about-content">
					<img src={profilePicture} alt="Hector Martinez" className="profile-picture" />
					<div className="about-description content-blurred-bg">
						<p>Originally from Mexico and now living in the USA, I'm Hector Martinez - a devoted software engineer with a keen interest in back end and full stack development. As an alumnus of the University of Texas at Dallas, I've gained valuable experience at IBM and honed my skills in Java, Spring Boot, and Amazon Web Services.</p>
						<p>Driven by a desire for constant improvement, I'm actively working on enhancing my front-end development expertise while thriving in my current role at IBM. With a focus on collaboration and agility, I've successfully managed and maintained intricate software projects in diverse international teams.</p>
						<p>Join me on my journey as a developer and discover my engaging projects and experiences!</p>
					</div>
				</div>
				<>
					<h3 className="secondary-header">My Work experience</h3>
					<Workexperience />
				</>
				<div ref={techStackRef} className="tech-stack">
					<h3 className="secondary-header">My technology stack</h3>
					<Technologies containerRef={techStackRef} techData={techData} />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
