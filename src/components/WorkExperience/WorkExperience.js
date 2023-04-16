import React, { useState, useRef, useEffect } from "react";
import "./WorkExperience.css";
import jobs from "../../data/work_experience.json";

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
