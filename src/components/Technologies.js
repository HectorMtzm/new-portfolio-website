import React from "react";
import "./Technologies.css";
import Technology from "./Technology";

const Technologies = ({ techData }) => {
	return (
		<div className="tech-wrapper">
			<div className="tech-grid">
				{techData.map((tech, index) => (
					<Technology key={index} image={tech.image} name={tech.name} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
