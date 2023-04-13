// import React from "react";
// import "./Project.css";
// import placeholderImage from "../assets/placeholder-image.jpg";
// const Project = ({ project, techData }) => {
// 	const getTechImage = (techName) => {
// 		const tech = techData.find((t) => t.name === techName);
// 		return tech ? tech.image : "";
// 	};

// 	return (
// 		<div className="project">
// 			<div className="project-content">
// 				<img src={placeholderImage} alt={project.title} className="project-image" />
// 				<div className="project-text">
// 					<h3 className="project-title">{project.title}</h3>
// 					<p className="project-description">{project.description}</p>
// 					<ul className="project-technologies">
// 						project.technologies.map((tech, index) => (
// 						<li key={index}>
// 							<img src={getTechImage(tech)} alt={tech} className="technology-icon" />
// 						</li>
// 						));
// 					</ul>
// 					<a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
// 						View on GitHub
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Project;

import React from "react";
import "./Project.css";
import placeholderImage from "../assets/placeholder-image.jpg";

const Project = ({ project, techData }) => {
	const getTechImage = (techName) => {
		const tech = techData.find((t) => t.name === techName);
		return tech ? tech.image : "";
	};
	return (
		<div className="project">
			<img src={placeholderImage} alt={project.title} className="project-image" />
			<div className="project-content">
				<h3 className="project-title">{project.title}</h3>
				<p className="project-description">{project.description}</p>
				<ul className="project-technologies">
					{project.technologies.map((tech, index) => (
						<li key={index}>
							<img src={getTechImage(tech)} alt={tech} className="technology-icon" />
						</li>
					))}
				</ul>
				<a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
					View on GitHub
				</a>
			</div>
		</div>
	);
};

export default Project;
