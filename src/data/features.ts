export interface Feature {
	id: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}

export const features: Feature[] = [
	{
		id: "expert-cleaners",
		title: "Expert Cleaners",
		description:
			"Professional and experienced cleaning team delivering exceptional results with attention to detail.",
		image: "/feature-1.jpg",
		imageAlt: "Expert Cleaners",
	},
	{
		id: "reasonable-prices",
		title: "Reasonable Prices",
		description:
			"Competitive and affordable rates without compromising on quality service.",
		image: "/feature-2.jpg",
		imageAlt: "Reasonable Prices",
	},
	{
		id: "quick-best-services",
		title: "Quick and Best Services",
		description:
			"Fast, efficient, and top-quality cleaning services that exceed your expectations.",
		image: "/feature-3.jpg",
		imageAlt: "Quick and Best Services",
	},
];
