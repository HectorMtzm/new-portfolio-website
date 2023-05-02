import React from "react";
import "./Technologies.css";
import Technology from "./Technology";
import useTechnologyAnimation from "./useTechnologyAnimation";

const Technologies = ({ containerRef, techData }) => {
	const animatedTechData = useTechnologyAnimation(
		containerRef,
		techData.filter((tech) => tech.show)
	);

	return (
		<div className="tech-wrapper">
			<div ref={containerRef} className="tech-grid">
				{animatedTechData.map((tech, index) => (
					<Technology key={index} id={`tech-${index}`} image={tech.image} name={tech.name} scale={tech.scale} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
