import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";
import techData from "../../data/tech_data.json";
import projects from "../../data/projects.json";

const Portfolio = () => {
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
