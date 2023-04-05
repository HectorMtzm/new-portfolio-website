import React, { useState, useRef, useEffect } from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [tabHeight, setTabHeight] = useState(0);
	const tabRef = useRef(null);

	useEffect(() => {
		if (tabRef.current) {
			setTabHeight(tabRef.current.offsetHeight);
		}
	}, []);

	const jobs = [
		{
			id: 0,
			company: "Company A",
			title: "Job Title A",
			duration: "2018 - 2020",
			description: ["Responsibility 1 for Company A", "Responsibility 2 for Company A", "Responsibility 3 for Company A"],
		},
		{
			id: 1,
			company: "Company B",
			title: "Job Title B",
			duration: "2020 - 2022",
			description: ["Responsibility 1 for Company B", "Responsibility 2 for Company B", "Responsibility 3 for Company B"],
		},
		{
			id: 2,
			company: "Company C",
			title: "Job Title C",
			duration: "2020 - 2022",
			description: ["Responsibility 1 for Company C", "Responsibility 2 for Company c", "Responsibility 3 for Company c"],
		},
	];

	const sliderStyle = {
		transform: `translateY(${selectedTab * tabHeight + 1}px)`,
		height: `${tabHeight}px`,
	};

	return (
		<div className="work-experience-wrapper content-blurred-bg">
			<div className="tabs">
				<div className="slider" style={sliderStyle}></div>
				{jobs.map((job) => (
					<div key={job.id} ref={selectedTab === job.id ? tabRef : null} className={`tab ${selectedTab === job.id ? "selected" : ""}`} onClick={() => setSelectedTab(job.id)}>
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
