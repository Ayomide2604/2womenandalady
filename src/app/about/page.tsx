import React from "react";
import About from "../sections/About";
import PageHeader from "@/components/PageHeader";

const page = () => {
	return (
		<div>
			<PageHeader title="About Us" breadcrumb={["Home", "About Us"]} />
			<About />
		</div>
	);
};

export default page;
