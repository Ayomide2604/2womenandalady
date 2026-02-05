import React from "react";

const Footer = () => {
	return (
		<div className="footer" style={{ backgroundColor: "black" }}>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3">
						<div className="footer-contact">
							<h2>Get In Touch</h2>
							<p>
								<i className="fa fa-map-marker-alt" />
								1759, Plum Cres SW Edmonton, Alberta
							</p>
							<p>
								<i className="fa fa-phone-alt" />
								+1 437 685 5676
							</p>
							<p>
								<i className="fa fa-envelope" />
								contact@example.com
							</p>
							<div className="footer-social">
								<a href="" className="text-decoration-none">
									<i className="fab fa-twitter" />
								</a>
								<a href="" className="text-decoration-none">
									<i className="fab fa-facebook-f" />
								</a>
								<a href="" className="text-decoration-none">
									<i className="fab fa-youtube" />
								</a>
								<a href="" className="text-decoration-none">
									<i className="fab fa-instagram" />
								</a>
								<a href="" className="text-decoration-none">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Useful Links</h2>
							<a href="" className="text-decoration-none">
								About Us
							</a>
							<a href="" className="text-decoration-none">
								Our Story
							</a>
							<a href="" className="text-decoration-none">
								Our Services
							</a>
							<a href="" className="text-decoration-none">
								Our Projects
							</a>
							<a href="" className="text-decoration-none">
								Contact Us
							</a>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Useful Links</h2>
							<a href="" className="text-decoration-none">
								Our Clients
							</a>
							<a href="" className="text-decoration-none">
								Clients Review
							</a>
							<a href="" className="text-decoration-none">
								Ongoing Project
							</a>
							<a href="" className="text-decoration-none">
								Customer Support
							</a>
							<a href="" className="text-decoration-none">
								FAQs
							</a>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-form">
							<h2>Stay Updated</h2>
							<p>
								Lorem ipsum dolor sit amet, adipiscing elit. Etiam accumsan
								lacus eget velit
							</p>
							<input className="form-control" placeholder="Email here" />
							<button className="btn">Submit</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container footer-menu">
				<div className="f-menu">
					<a href="" className="text-decoration-none">
						Terms of use
					</a>
					<a href="" className="text-decoration-none">
						Privacy policy
					</a>
					<a href="" className="text-decoration-none">
						Cookies
					</a>
					<a href="" className="text-decoration-none">
						Help &amp; FQAs
					</a>
					<a href="" className="text-decoration-none">
						Contact us
					</a>
				</div>
			</div>
			<div className="container copyright">
				<div className="row">
					{/* <div className="col-md-6">
						<p>
							© <a href="https://htmlcodex.com">2Women&aLady</a>, All Right
							Reserved.
						</p>
					</div> */}
					{/* <div className="col-md-6">
						<p>
							Designed By <a href="https://htmlcodex.com">HTML Codex</a>
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
