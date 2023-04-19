import React, { useEffect, useState } from "react";
import "./Project.css";

const Project = ({ project, techData, index }) => {
	const [projectImage, setProjectImage] = useState(null);

	const getTechImage = (techName) => {
		const tech = techData.find((t) => t.name === techName);
		return tech ? tech.image : "";
	};

	useEffect(() => {
		import(`../../assets/images/project${index + 1}.jpg`)
			.then((image) => setProjectImage(image.default))
			.catch(() => setProjectImage(null));
	}, [index]);

	const alignmentClass = index % 2 === 0 ? "left-aligned" : "right-aligned";
	return (
		<div className={`project ${alignmentClass}`}>
			{projectImage ? <img src={projectImage} alt={project.title} className="project-image" /> : <div className="project-image-placeholder"></div>}
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
				<div className="project-buttons">
					{project.appLink && (
						<a href={project.appLink} className="project-link project-app-link" target="_blank" rel="noopener noreferrer">
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
								<path d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z" />
							</svg>
							<title>External Link</title>
						</a>
					)}
					<a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
