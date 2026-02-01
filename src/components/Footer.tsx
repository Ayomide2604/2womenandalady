import React from "react";

const Footer = () => {
	return (
		<div className="footer">
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
								<a href="">
									<i className="fab fa-twitter" />
								</a>
								<a href="">
									<i className="fab fa-facebook-f" />
								</a>
								<a href="">
									<i className="fab fa-youtube" />
								</a>
								<a href="">
									<i className="fab fa-instagram" />
								</a>
								<a href="">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Useful Links</h2>
							<a href="">About Us</a>
							<a href="">Our Story</a>
							<a href="">Our Services</a>
							<a href="">Our Projects</a>
							<a href="">Contact Us</a>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Useful Links</h2>
							<a href="">Our Clients</a>
							<a href="">Clients Review</a>
							<a href="">Ongoing Project</a>
							<a href="">Customer Support</a>
							<a href="">FAQs</a>
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
					<a href="">Terms of use</a>
					<a href="">Privacy policy</a>
					<a href="">Cookies</a>
					<a href="">Help &amp; FQAs</a>
					<a href="">Contact us</a>
				</div>
			</div>
			<div className="container copyright">
				<div className="row">
					<div className="col-md-6">
						<p>
							© <a href="https://htmlcodex.com">HTML Codex</a>, All Right
							Reserved.
						</p>
					</div>
					<div className="col-md-6">
						<p>
							Designed By <a href="https://htmlcodex.com">HTML Codex</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
