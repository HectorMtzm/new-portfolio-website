	import React, { useRef, useEffect } from 'react';
	import './BackgroundAnimation.css';

	const BackgroundAnimation = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const blueDotRadius = 0.5 * 16;
		const whiteDotRadius = 0.25 * 16;

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

		const dots = [
		...createDots('#06b6d4', blueDotRadius, 50),
		...createDots('#ff00ff', whiteDotRadius, 100),
		];

		const drawDot = (dot) => {
		context.beginPath();
		context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
		context.fillStyle = dot.color;
		context.fill();
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

		const connectDots = (dot1, dot2) => {
		context.beginPath();
		context.moveTo(dot1.x, dot1.y);
		context.lineTo(dot2.x, dot2.y);
		context.strokeStyle = dot1.color;
		context.stroke();
		};

		const animate = () => {
		context.clearRect(0, 0, canvas.width, canvas.height);
		dots.forEach((dot) => {
			drawDot(dot);
			updateDot(dot);
		});

		dots.forEach((dot1) => {
			if (dot1.color === '#06b6d4') {
			dots.forEach((dot2) => {
				if (
				dot2.color === '#ff00ff' &&
				Math.sqrt(
					(dot1.x - dot2.x) * (dot1.x - dot2.x) +
					(dot1.y - dot2.y) * (dot1.y - dot2.y),
				) < 150
				) {
				connectDots(dot1, dot2);
				}
			});
			}
		});

		requestAnimationFrame(animate);
		};

		canvas.addEventListener('mousemove', (event) => {
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		dots.forEach((dot) => {
			if (
				dot.color === '#06b6d4' &&
				Math.sqrt((dot.x - mouseX) * (dot.x - mouseX) + (dot.y - mouseY) * (dot.y - mouseY)) < 150
			) {
			dots.forEach((dot2) => {
				if (
					dot2.color === '#ff00ff' &&
					Math.sqrt( (dot.x - dot2.x) * (dot.x - dot2.x) + (dot.y - dot2.y) * (dot.y - dot2.y),) < 150
				) {
					connectDots(dot, dot2);
				}
			});
			}
		});
		});

		animate();
	}, []);

	return (
		<canvas className="background-animation" ref={canvasRef} />
	);
};

	export default BackgroundAnimation;