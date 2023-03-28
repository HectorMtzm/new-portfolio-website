import React from "react";
import "./Technologies.css";
import Technology from "./Technology";

const Technologies = ({ techData }) => {
	return (
		<section className="technologies">
			<h2 className="tech-title">
				<span className="primary-number">2.</span> Technologies
			</h2>
			<p className="tech-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<div className="tech-wrapper">
				<div className="tech-grid">
					{techData.map((tech, index) => (
						<Technology
							key={index}
							image={tech.image}
							name={tech.name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
