import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
	return (
		<div className="service">
			<div className="container">
				<div className="section-header">
					<p>Our Services</p>
					<h2>Serving all of Edmonton and Nearby Areas</h2>
				</div>
				<div className="row">
					{services.map((service) => (
						<div key={service.id} className="col-lg-3 col-md-6">
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
