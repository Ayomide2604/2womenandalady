import Image from "next/image";
import React from "react";
import { Project } from "./types";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
	<div
		className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${project.title}`}
	>
		<div className="portfolio-wrap">
			<figure>
				<Image
					src={project.images[0]}
					alt={project.title}
					style={{ objectFit: "cover" }}
					width={500}
					height={500}
				/>
				{project.images.map((image, index) => (
					<a
						key={index}
						href={image}
						className="link-preview"
						data-lightbox={`portfolio-${project.id}`}
						data-title={`${project.title} - Image ${index + 1}`}
						style={{ display: index === 0 ? "inline-block" : "none" }}
					>
						<i className="fa fa-eye" />
					</a>
				))}

				<a className="portfolio-title" href={project.detailsUrl}>
					{project.title}
				</a>
			</figure>
		</div>
	</div>
);

export default ProjectCard;
