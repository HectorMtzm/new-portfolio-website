import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";
import techData from "../../data/tech_data.json";
import projects from "../../data/projects.json";

const Portfolio = () => {
	return (
		<section className="portfolio container">
			<h2 className="section-header">
				<span className="primary-number">2.</span> Some of my projects
			</h2>
			<div className="projects-wrapper">
				{projects.map((project, index) => (
					<Project key={project.id} project={project} techData={techData} index={index} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
