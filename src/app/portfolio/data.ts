import { Project } from "./types";

export const projects: Project[] = [
	{
		id: 1,
		title: "Project 1",
		category: "completed",
		images: ["/construction.jpg", "/residential.jpg", "/about_us.jpg"],
		detailsUrl: "#",
	},
	{
		id: 2,
		title: "Project 2",
		category: "ongoing",
		images: ["/residential.jpg", "/construction.jpg"],
		detailsUrl: "#",
	},
	{
		id: 3,
		title: "Project 3",
		category: "upcoming",
		images: ["/about_us.jpg", "/carpet.jpg", "/biohazard.jpg"],
		detailsUrl: "#",
	},
];
