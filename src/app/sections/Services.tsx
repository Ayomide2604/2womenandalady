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
								src="/assets/img/service-1.jpg"
								alt="Service"
								width={500}
								height={500}
								style={{
									objectFit: "cover",
								}}
							/>
							<h3>Flour Cleaning</h3>
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
							<img src="img/service-2.jpg" alt="Service" />
							<h3>Glass Cleaning</h3>
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
							<img src="img/service-3.jpg" alt="Service" />
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
							<img src="img/service-4.jpg" alt="Service" />
							<h3>Toilet Cleaning</h3>
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
