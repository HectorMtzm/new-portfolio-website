import React from "react";
import "./Portfolio.css";
import Project from "./Project";
import { techData } from "./techData";

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: "Project 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			technologies: ["React", "JavaScript", "MongoDB"],
			githubLink: "https://github.com/user/project1",
		},
		{
			id: 2,
			title: "Project 2",
			description: "Sed do eiusmod tempor incididunt ut labore et dolore...",
			technologies: ["Java", "Spring Boot", "MySQL"],
			githubLink: "https://github.com/user/project2",
		},
	];

	return (
		<section className="portfolio">
			<h2 className="section-header">
				<span className="primary-number">2</span> Projects
			</h2>
			<div className="projects-wrapper">
				{projects.map((project) => (
					<Project key={project.id} project={project} techData={techData} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
