"use client";

import React, { useState } from "react";
import { projects } from "./data";
import { Project } from "./types";
import PortfolioHeader from "./PortfolioHeader";
import ProjectGrid from "./ProjectGrid";
import LoadMoreButton from "./LoadMoreButton";

const Portfolio: React.FC = () => {
	const [visibleProjects, setVisibleProjects] = useState<number>(9);

	const displayedProjects = projects.slice(0, visibleProjects);

	const handleLoadMore = () => {
		setVisibleProjects((prev) => prev + 3);
	};

	return (
		<div className="portfolio">
			<div className="container">
				<PortfolioHeader title="Our Works" header="View Our Work" />
				<ProjectGrid projects={displayedProjects} />
				<LoadMoreButton
					onClick={handleLoadMore}
					isVisible={projects.length > visibleProjects}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
