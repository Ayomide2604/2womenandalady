import { Project } from "./types";

export const projects: Project[] = [
	{
		id: 1,
		title: "Project 1",

		images: [
			"/projects/1/kitchen_before.jpg",
			"/projects/1/kitchen_after.jpg",
			"/projects/1/microwave_before.jpg",
			"/projects/1/microwave_after.jpg",
			"/projects/1/toilet_before.jpg",
			"/projects/1/toilet_after.jpg",
		],
	},
	{
		id: 2,
		title: "Project 2",
		images: ["/residential.jpg", "/construction.jpg"],
	},
	{
		id: 3,
		title: "Project 3",
		images: ["/about_us.jpg", "/carpet.jpg", "/biohazard.jpg"],
	},
];
