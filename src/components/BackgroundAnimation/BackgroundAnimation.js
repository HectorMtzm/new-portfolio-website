import React, { useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const isMobile = () => window.innerWidth <= 768;
console.log("Is MOBILE???: " + isMobile());
const BackgroundAnimation = ({ aboutMeRef }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			const aboutMeHeight = aboutMeRef.current ? aboutMeRef.current.offsetHeight : 0;
			canvas.height = Math.max(window.innerHeight, aboutMeHeight) + 40;
		};

		resizeCanvas();

		let mouseX = null;
		let mouseY = null;

		const createDots = (color, radius, count) => {
			const dots = [];

			for (let i = 0; i < count; i++) {
				const x = Math.random() * canvas.width;
				const y = Math.random() * canvas.height;
				const dx = (Math.random() - 0.5) * 2;
				const dy = (Math.random() - 0.5) * 2;
				dots.push({ x, y, dx, dy, radius, color });
			}
			return dots;
		};

		const blueDots = createDots("rgba(6, 182, 212, 0.3)", 8, isMobile() ? 50 : 150);
		const whiteDots = createDots("rgba(200, 200, 200, 0.3)", 4, isMobile() ? 50 : 100);

		const drawDot = (dot) => {
			context.beginPath();
			// context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
			context.fillStyle = dot.color;
			context.fill();
			context.closePath();
		};

		const updateDot = (dot) => {
			dot.x += dot.dx;
			dot.y += dot.dy;

			if (dot.x + dot.radius > canvas.width || dot.x - dot.radius < 0) {
				dot.dx = -dot.dx;
			}

			if (dot.y + dot.radius > canvas.height || dot.y - dot.radius < 0) {
				dot.dy = -dot.dy;
			}
		};

		const connectDots = (dot1, dot2, mouseDistance) => {
			const maxDistance = 150;
			const opacity = 1.1 - mouseDistance / maxDistance;

			context.beginPath();
			context.moveTo(dot1.x, dot1.y);
			context.lineTo(dot2.x, dot2.y);
			context.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
			context.closePath();
			context.stroke();
		};

		const animate = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			blueDots.forEach((dot) => {
				drawDot(dot);
				updateDot(dot);
			});
			whiteDots.forEach((dot) => {
				drawDot(dot);
				updateDot(dot);
			});

			if (isMobile()) {
				blueDots.forEach((blueDot) => {
					whiteDots.forEach((whiteDot) => {
						if (Math.sqrt((blueDot.x - whiteDot.x) * (blueDot.x - whiteDot.x) + (blueDot.y - whiteDot.y) * (blueDot.y - whiteDot.y)) < 150) {
							connectDots(blueDot, whiteDot, 0);
						}
					});
				});
			} else {
				blueDots.forEach((blueDot) => {
					whiteDots.forEach((whiteDot) => {
						const mouseDistance = Math.sqrt((blueDot.x - mouseX) * (blueDot.x - mouseX) + (blueDot.y - mouseY) * (blueDot.y - mouseY));
						if (mouseDistance < 150 && Math.sqrt((blueDot.x - whiteDot.x) * (blueDot.x - whiteDot.x) + (blueDot.y - whiteDot.y) * (blueDot.y - whiteDot.y)) < 150) {
							connectDots(blueDot, whiteDot, mouseDistance);
						}
					});
				});
			}

			requestAnimationFrame(animate);
		};

		const handleMouseMove = (event) => {
			const rect = canvas.getBoundingClientRect();
			mouseX = event.clientX - rect.left;
			mouseY = event.clientY - rect.top;
		};

		animate();
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", resizeCanvas);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [aboutMeRef]);

	return <canvas className="background-animation" ref={canvasRef} />;
};

export default BackgroundAnimation;
