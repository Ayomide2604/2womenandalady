import Image from "next/image";

const Features = () => {
	return (
		<div className="feature">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="section-header left">
							<p>Why Choose Us</p>
							<h2>Edmonton's Trusted Female-Owned Cleaning Experts</h2>
						</div>
						<p>
							As Edmonton's premier female-owned cleaning service since 2023, we
							bring attention to detail and a personal touch to every project.
							Our team understands the unique needs of Edmonton homes and
							businesses, providing reliable, thorough, and affordable cleaning
							solutions you can trust.
						</p>
						<a className="btn" href="">
							Learn More
						</a>
					</div>
					<div className="col-md-7">
						<div className="row align-items-center feature-item">
							<div className="col-5">
								<Image
									src="/placeholder.jpg"
									alt="Feature"
									width={200}
									height={200}
									objectFit="contain"
								/>
							</div>
							<div className="col-7">
								<h3>Local Edmonton Experts</h3>
								<p>
									As a local Edmonton business, we know the area and understand
									the specific cleaning needs of our community.
								</p>
							</div>
						</div>
						<div className="row align-items-center feature-item">
							<div className="col-5">
								<Image
									src="/placeholder.jpg"
									alt="Feature"
									width={200}
									height={200}
									objectFit="contain"
								/>
							</div>
							<div className="col-7">
								<h3>Fair & Transparent Pricing</h3>
								<p>
									Competitive rates with no hidden fees. Quality cleaning
									services that fit your budget.
								</p>
							</div>
						</div>
						<div className="row align-items-center feature-item">
							<div className="col-5">
								<Image
									src="/placeholder.jpg"
									alt="Feature"
									width={200}
									height={200}
									objectFit="contain"
								/>
							</div>
							<div className="col-7">
								<h3>Reliable & Efficient Service</h3>
								<p>
									Professional team delivering consistent, high-quality results.
									We respect your time and your space.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
