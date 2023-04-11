import React, { useState, useRef, useEffect } from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [tabDimensions, setTabDimensions] = useState([]);
	const tabRefs = useRef([]);
	const isMobile = window.innerWidth <= 768;
	const translateValue = isMobile ? tabRefs.current.slice(0, selectedTab).reduce((acc, tabRef) => acc + tabRef.offsetWidth, 0) : tabRefs.current.slice(0, selectedTab).reduce((acc, tabRef) => acc + tabRef.offsetHeight, 0);
	const translateProp = isMobile ? "translateX" : "translateY";
	const sizeProp = isMobile ? "width" : "height";

	useEffect(() => {
		const newTabDimensions = tabRefs.current.map((tabRef) => ({
			height: tabRef.offsetHeight,
			width: tabRef.offsetWidth,
		}));
		setTabDimensions(newTabDimensions);
	}, []);

	const jobs = [
		{
			id: 0,
			company: "IBM",
			title: "Back-end developer",
			duration: "March 2021 - Present",
			description: [
				"Involved in development, debugging, and fixing issues in various components of the AIX operating system.",
				"Collaborate with international team members to discuss, debug, and resolve customer-reported errors.",
				"Used technical skills in programming languages, including C++, C, and shell scripting to find and implement solutions.",
				"Developed and maintained a Spring Boot-based web application for internal use within the company, which helped speed up the configuring and redeployment of virtual machines by 50%.",
			],
		},
		{
			id: 1,
			company: "Freelancer",
			title: "Full-stack developer",
			duration: "January 2020 - March 2021",
			description: ["Developed single page applications using HTML, SASS, JavaScript, and React.", "Developed static websites using HTML, CSS and JavaScript, As well as web apps using Spring Boot."],
		},
		{
			id: 2,
			company: "Squareball Studios",
			title: "Back-end developer intern",
			duration: "June 2019 - September 2019",
			description: ["Collaborated with teams located in different countries to develop and maintain projects effectively.", "Used PHP to perform CRUD operation in relational databases using SQL.", "Retrieved data from third parties APIs for display in the app."],
		},
	];

	const sliderStyle = {
		transform: `${translateProp}(${translateValue}px)`,
		[sizeProp]: `${tabDimensions[selectedTab]?.[sizeProp] || 0}px`,
	};

	return (
		<div className="work-experience-wrapper content-blurred-bg">
			<div className="tabs">
				<div className="slider" style={sliderStyle}></div>
				{jobs.map((job, index) => (
					<div key={job.id} ref={(el) => (tabRefs.current[index] = el)} className={`tab ${selectedTab === job.id ? "selected" : ""}`} onClick={() => setSelectedTab(job.id)}>
						{job.company}
					</div>
				))}
			</div>
			<div className="content">
				{jobs[selectedTab] && (
					<>
						<div className="job-title">{jobs[selectedTab].title}</div>
						<div className="job-duration">{jobs[selectedTab].duration}</div>
						<ul className="job-description">
							{jobs[selectedTab].description.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default WorkExperience;
