import PageHeader from "@/components/PageHeader";
import Features from "../sections/Features";
import Pricing from "../sections/Pricing";
import Services from "../sections/Services";

const page = () => {
	return (
		<div>
			<PageHeader title="Services" breadcrumb={["Home", "Services"]} />
			<Services />
			<Features />
		</div>
	);
};

export default page;
