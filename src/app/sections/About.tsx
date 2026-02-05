import Image from "next/image";
const About = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-12">
						<div className="about-img">
							<Image
								src="/about_us.jpg"
								alt="Image"
								width={500}
								height={500}
								style={{ objectFit: "cover" }}
							/>
						</div>
					</div>
					<div className="col-lg-7 col-md-6 col-12">
						<div className="about-text">
							<h2>
								Proudly Serving <span>Edmonton</span> Since 2023
							</h2>
							<p>
								2 Women and a Lady Cleaning Services is a proudly female-owned
								cleaning company founded in 2023, right here in Edmonton,
								Alberta. We're committed to delivering exceptional cleaning
								services to homes and businesses throughout Edmonton and nearby
								communities.
							</p>
							<p>
								Our team brings attention to detail and a personal touch to
								every cleaning project. As a local, women-led business, we
								understand the unique needs of Edmonton families and businesses,
								providing reliable, thorough, and affordable cleaning solutions
								you can trust.
							</p>
							<a className="btn" href="">
								Learn More About Our Services
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
