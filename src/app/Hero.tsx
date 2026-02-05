const Hero = () => {
	return (
		<div className="hero row align-items-center m-0">
			<div className="col-md-7 col-12 px-3">
				<h2>Edmonton's Trusted</h2>
				<h2>
					<span>Cleaning Service</span>
				</h2>
				<p>
					Proudly serving Edmonton and surrounding areas with professional
					cleaning services since 2023. Experience the difference of working
					with a local, women-led cleaning company.
				</p>
				<a className="btn" href="">
					Get Your Free Quote
				</a>
			</div>
			<div className="col-md-5 col-12 px-3">
				<div className="form">
					<h3>Get A Quote</h3>
					<form>
						<input
							className="form-control mb-2"
							type="text"
							placeholder="Your Name"
						/>
						<input
							className="form-control mb-2"
							type="text"
							placeholder="Mobile Number"
						/>
						<select className="custom-select mb-2">
							<option value="">Choose a service</option>
							<option value={1}>House Cleaning</option>
							<option value={2}>Apartment Cleaning</option>
							<option value={3}>Office Cleaning</option>
						</select>
						<textarea className="form-control mb-2" placeholder="Comment" />
						<button className="btn btn-block">Get A Quote</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
