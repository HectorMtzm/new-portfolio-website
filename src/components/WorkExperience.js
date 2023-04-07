import React, { useState, useRef, useEffect } from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [tabHeights, setTabHeights] = useState([]);
	const tabRefs = useRef([]);

	useEffect(() => {
		const newTabHeights = tabRefs.current.map((tabRef) => tabRef.offsetHeight);
		setTabHeights(newTabHeights);
	}, []);

	const jobs = [
		{
			id: 0,
			company: "IBM",
			title: "Job Title A",
			duration: "2018 - 2020",
			description: ["Responsibility 1 for Company A", "Responsibility 2 for Company A", "Responsibility 3 for Company A"],
		},
		{
			id: 1,
			company: "Freelancer",
			title: "Job Title B",
			duration: "2020 - 2022",
			description: ["Responsibility 1 for Company B", "Responsibility 2 for Company B", "Responsibility 3 for Company B"],
		},
		{
			id: 2,
			company: "Squareball Studios",
			title: "Job Title C",
			duration: "2020 - 2022",
			description: ["Responsibility 1 for Company C", "Responsibility 2 for Company c", "Responsibility 3 for Company c"],
		},
	];

	const translateY = tabHeights.slice(0, selectedTab).reduce((acc, height) => acc + height, 0);
	const sliderStyle = {
		transform: `translateY(${translateY}px)`,
		height: `${tabHeights[selectedTab] || 0}px`,
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
