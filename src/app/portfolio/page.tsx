import PageHeader from "@/components/PageHeader";
import Portfolio from "./Portfolio";

const page = () => {
	return (
		<>
			<PageHeader title="Our Past Works" breadcrumb={["Home", "Portfolio"]} />
			<Portfolio />
		</>
	);
};

export default page;
