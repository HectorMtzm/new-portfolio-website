import { useState, useEffect } from "react";

const useTechnologyAnimation = (ref, techData) => {
	const [techState, setTechState] = useState(techData);

	const calculateScale = (cursorPosition, element) => {
		const rect = element.getBoundingClientRect();
		const distance = Math.hypot(cursorPosition.x - (rect.x + rect.width / 2), cursorPosition.y - (rect.y + rect.height / 2));
		const maxDistance = 200;
		const minScale = 1;
		const maxScale = 1.5;
		const scale = minScale + ((maxDistance - Math.min(distance, maxDistance)) / maxDistance) * (maxScale - minScale);

		return scale;
	};

	const handleMouseMove = (e) => {
		const cursorPosition = { x: e.clientX, y: e.clientY };
		const updatedTechState = techState.map((tech, index) => {
			const element = document.getElementById(`tech-${index}`);
			const scale = calculateScale(cursorPosition, element);
			return { ...tech, scale };
		});

		setTechState(updatedTechState);
	};

	useEffect(() => {
		if (!ref.current) return;

		ref.current.addEventListener("mousemove", handleMouseMove);

		return () => {
			ref.current.removeEventListener("mousemove", handleMouseMove);
		};
	}, [ref, techState]);

	return techState;
};

export default useTechnologyAnimation;
