// import { useState, useEffect } from "react";

// const useMousePosition = () => {
// 	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

// 	const handleMouseMove = (e) => {
// 		setMousePosition({ x: e.clientX, y: e.clientY });
// 	};

// 	useEffect(() => {
// 		window.addEventListener("mousemove", handleMouseMove);

// 		return () => {
// 			window.removeEventListener("mousemove", handleMouseMove);
// 		};
// 	}, []);

// 	return mousePosition;
// };

// export default useMousePosition;
