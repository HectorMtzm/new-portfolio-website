import React from "react";
import "./Technology.css";

const Technology = ({ id, image, name, scale }) => {
	const style = {
		transform: `scale(${scale})`,
	};

	return (
		<div id={id} className="technology" style={style}>
			<div className="tech-image-wrapper">
				<img src={image} alt={name} className="tech-image" />
			</div>
			{/* <p className="tech-name">{name}</p> */}
		</div>
	);
};

export default Technology;
