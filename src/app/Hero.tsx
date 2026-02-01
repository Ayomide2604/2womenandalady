const Hero = () => {
	return (
		<div className="hero row align-items-center container-fluid">
			<div className="col-md-7">
				<h2>Best &amp; Trusted</h2>
				<h2>
					<span>Cleaning</span> Service
				</h2>
				<p>Text goes here Text goes here Text goes here Text goes here</p>
				<a className="btn" href="">
					Explore Now
				</a>
			</div>
			<div className="col-md-5">
				<div className="form">
					<h3>Get A Quote</h3>
					<form>
						<input
							className="form-control"
							type="text"
							placeholder="Your Name"
						/>
						<input
							className="form-control"
							type="text"
							placeholder="Mobile Number"
						/>
						<div className="control-group">
							<select className="custom-select">
								<option value="">Choose a service</option>
								<option value={1}>House Cleaning</option>
								<option value={2}>Apartment Cleaning</option>
								<option value={3}>Office Cleaning</option>
							</select>
						</div>
						<textarea className="form-control" placeholder="Comment" />
						<button className="btn btn-block">Get A Quote</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
