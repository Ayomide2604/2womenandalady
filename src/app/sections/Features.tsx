import Image from "next/image";

const Features = () => {
	return (
		<div className="feature">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="section-header left">
							<p>Why Choose Us</p>
							<h2>Expert Cleaners and World Class Services</h2>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							nec pretium mi. Curabitur facilisis ornare velit non vulputate.
							Aliquam metus tortor, auctor id gravida condimentum, viverra quis
							sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean
							consectetur convallis porttitor. Aliquam interdum at lacus non
							blandit.
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
								<h3>Expert Cleaners</h3>
								<p>
									Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
									Curabitur facilisis ornare velit non vulputate.
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
								<h3>Reasonable Prices</h3>
								<p>
									Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
									Curabitur facilisis ornare velit non vulputate.
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
								<h3>Quick &amp; Best Services</h3>
								<p>
									Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
									Curabitur facilisis ornare velit non vulputate.
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
