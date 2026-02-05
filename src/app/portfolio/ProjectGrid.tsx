import React from 'react';
import { Project } from './types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
	projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
	<div className="row portfolio-container">
		{projects.map((project) => (
			<ProjectCard key={project.id} project={project} />
		))}
	</div>
);

export default ProjectGrid;
