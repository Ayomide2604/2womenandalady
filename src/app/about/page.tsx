import React from "react";
import About from "../sections/About";
import PageHeader from "@/components/PageHeader";
import Team from "../sections/Team";

const page = () => {
	return (
		<div>
			<PageHeader title="About Us" breadcrumb={["Home", "About Us"]} />
			<About />
			<Team />
		</div>
	);
};

export default page;
