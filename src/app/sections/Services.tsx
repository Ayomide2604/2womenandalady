import Image from "next/image";

const Services = () => {
	return (
		<div className="service">
			<div className="container">
				<div className="section-header">
					<p>Our Services</p>
					<h2>Provide Services Worldwide</h2>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/placeholder.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "contain",
								}}
							/>
							<h3>Residential Cleaning</h3>
							<p>
								Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
								Curabitur facilisis ornare
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/placeholder.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "contain",
								}}
							/>
							<h3>Construction Cleaning</h3>
							<p>
								Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
								Curabitur facilisis ornare
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/placeholder.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "contain",
								}}
							/>
							<h3>Carpet Cleaning</h3>
							<p>
								Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
								Curabitur facilisis ornare
							</p>
							<a className="btn" href="">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="service-item">
							<Image
								src="/placeholder.jpg"
								alt="Service"
								width={500}
								height={300}
								style={{
									objectFit: "contain",
								}}
							/>
							<h3>Bio Hazard Cleaning</h3>
							<p>
								Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
								Curabitur facilisis ornare
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
