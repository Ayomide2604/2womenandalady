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
								<i className="fa fa-phone-alt" />
								+1 780 709 1707
							</p>
							<p>
								<i className="fa fa-envelope" />
								company@2women.com
							</p>
							<div className="footer-social">
								<a
									href=""
									className="text-decoration-none"
									aria-label="Facebook"
								>
									<i className="fab fa-facebook-f" />
								</a>
								<a
									href=""
									className="text-decoration-none"
									aria-label="Instagram"
								>
									<i className="fab fa-instagram" />
								</a>
								<a
									href="https://wa.me/17807091707"
									target="_blank"
									rel="noopener noreferrer"
									className="text-decoration-none"
									aria-label="WhatsApp"
								>
									<i className="fab fa-whatsapp" />
								</a>
								<a
									href="mailto:company@2women.com"
									className="text-decoration-none"
									aria-label="Email"
								>
									<i className="fa fa-envelope" />
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
								Our Services
							</a>
							<a href="" className="text-decoration-none">
								Contact Us
							</a>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Resources</h2>
							<a href="" className="text-decoration-none">
								FAQs
							</a>
							<a href="" className="text-decoration-none">
								Customer Support
							</a>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-form">
							<h2>Stay Updated</h2>
							<p>
								Subscribe to get updates on our cleaning services and special
								offers.
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
