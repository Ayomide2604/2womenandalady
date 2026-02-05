import React from "react";

const page = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="section-header">
					<p>Contact Us</p>
					<h2>Send us a Message</h2>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="faqs">
							<div id="accordion">
								<div className="card">
									<div className="card-header">
										<a
											className="card-link collapsed"
											data-toggle="collapse"
											href="#collapseOne"
											aria-expanded="true"
										>
											<span>1</span> What areas do you service in Edmonton?
										</a>
									</div>
									<div
										id="collapseOne"
										className="collapse show"
										data-parent="#accordion"
									>
										<div className="card-body">
											We proudly serve Edmonton and all surrounding areas
											including St. Albert, Sherwood Park, Spruce Grove, Leduc,
											Beaumont, and nearby communities. Contact us to confirm
											service in your specific location.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<a
											className="card-link"
											data-toggle="collapse"
											href="#collapseTwo"
										>
											<span>2</span> Are you insured and bonded?
										</a>
									</div>
									<div
										id="collapseTwo"
										className="collapse"
										data-parent="#accordion"
									>
										<div className="card-body">
											Yes! As a professional cleaning company, we are fully
											insured and bonded to protect both our clients and our
											team. Your peace of mind is our priority.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<a
											className="card-link"
											data-toggle="collapse"
											href="#collapseThree"
										>
											<span>3</span> What cleaning products do you use?
										</a>
									</div>
									<div
										id="collapseThree"
										className="collapse"
										data-parent="#accordion"
									>
										<div className="card-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Phasellus nec pretium mi. Curabitur facilisis ornare velit
											non.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<a
											className="card-link"
											data-toggle="collapse"
											href="#collapseFour"
										>
											<span>4</span> How do I schedule a cleaning service?
										</a>
									</div>
									<div
										id="collapseFour"
										className="collapse"
										data-parent="#accordion"
									>
										<div className="card-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Phasellus nec pretium mi. Curabitur facilisis ornare velit
											non.
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header">
										<a
											className="card-link"
											data-toggle="collapse"
											href="#collapseFour"
										>
											<span>5</span> Do you offer recurring cleaning services?
										</a>
									</div>
									<div
										id="collapseFour"
										className="collapse"
										data-parent="#accordion"
									>
										<div className="card-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Phasellus nec pretium mi. Curabitur facilisis ornare velit
											non.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="contact-form">
							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<input
											type="text"
											className="form-control"
											placeholder="Your Name"
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<input
											type="email"
											className="form-control"
											placeholder="Your Email"
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Subject"
										required
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										rows={6}
										placeholder="Message"
										required
										defaultValue={""}
									/>
								</div>
								<div>
									<button className="btn" type="submit">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
