import Image from "next/image";

const Services = () => {
	return (
		<div className="service">
			<div className="container">
				<div className="section-header">
					<p>Our Services</p>
					<h2>Serving all of Edmonton and Nearby Areas</h2>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/residential.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "cover",
								}}
							/>
							<h3>Residential Cleaning</h3>
							<p>
								Professional home cleaning services for Edmonton families. From
								regular maintenance to deep cleaning, we keep your home spotless
								and healthy.
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/construction.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "cover",
								}}
							/>
							<h3>Construction Cleaning</h3>
							<p>
								Post-construction and renovation cleanup services. We handle the
								dust and debris so your new space is move-in ready.
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/carpet.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "cover",
								}}
							/>
							<h3>Carpet Cleaning</h3>
							<p>
								Deep carpet cleaning services to remove stains, odors, and
								allergens. Professional equipment for lasting results.
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/biohazard.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "cover",
								}}
							/>
							<h3>Bio Hazard Cleaning</h3>
							<p>
								Professional biohazard cleanup services with proper safety
								protocols. Discreet, thorough, and compliant with health
								regulations.
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
