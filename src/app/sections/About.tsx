import Image from "next/image";
const About = () => {
	return (
		<div className="about">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6">
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
					<div className="col-lg-7 col-md-6">
						<div className="about-text">
							<h2>
								<span>2</span> Years Experience
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus nec pretium mi. Curabitur facilisis ornare velit non
								vulputate. Aliquam metus tortor, auctor id gravida condimentum,
								viverra quis sem.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus nec pretium mi. Curabitur facilisis ornare velit non
								vulputate. Aliquam metus tortor, auctor id gravida condimentum,
								viverra quis sem. Curabitur non nisl nec nisi scelerisque
								maximus. Aenean consectetur convallis porttitor. Aliquam
								interdum at lacus non blandit.
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

export default About;
