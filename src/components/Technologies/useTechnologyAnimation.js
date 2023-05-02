import { useState, useEffect, useCallback } from "react";

const useTechnologyAnimation = (ref, techData) => {
	const [techState, setTechState] = useState(techData);

	const calculateScale = useCallback((cursorPosition, element) => {
		const rect = element.getBoundingClientRect();
		const distance = Math.hypot(cursorPosition.x - (rect.x + rect.width / 2), cursorPosition.y - (rect.y + rect.height / 2));
		const maxDistance = 150;
		const minScale = 1;
		const maxScale = 1.5;
		const scale = minScale + ((maxDistance - Math.min(distance, maxDistance)) / maxDistance) * (maxScale - minScale);

		return scale;
	}, []);

	useEffect(() => {
		let currentRef = ref.current;

		if (!currentRef) return;

		const handleMouseMove = (e) => {
			const cursorPosition = { x: e.clientX, y: e.clientY };
			const updatedTechState = techState.map((tech, index) => {
				const element = document.getElementById(`tech-${index}`);
				const scale = calculateScale(cursorPosition, element);
				return { ...tech, scale };
			});

			setTechState(updatedTechState);
		};

		currentRef.addEventListener("mousemove", handleMouseMove);

		return () => {
			currentRef.removeEventListener("mousemove", handleMouseMove);
		};
	}, [ref, techState, calculateScale]);

	return techState;
};

export default useTechnologyAnimation;
