export interface TeamMember {
	id: string;
	name: string;
	role: string;
	image: string;
	imageAlt: string;
}

export const teamMembers: TeamMember[] = [
	{
		id: "team-member-1",
		name: "Sarah Johnson",
		role: "Expert Cleaner",
		image: "/team-1.jpg",
		imageAlt: "Team Member 1",
	},
	{
		id: "team-member-2",
		name: "Maria Garcia",
		role: "Expert Cleaner",
		image: "/team-2.jpg",
		imageAlt: "Team Member 2",
	},
	{
		id: "team-member-3",
		name: "Emily Chen",
		role: "Expert Cleaner",
		image: "/team-3.jpg",
		imageAlt: "Team Member 3",
	},
	{
		id: "team-member-4",
		name: "Patricia Williams",
		role: "Expert Cleaner",
		image: "/team-4.jpg",
		imageAlt: "Team Member 4",
	},
];
