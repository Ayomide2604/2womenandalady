const Pricing = () => {
	return (
		<div className="price">
			<div className="container">
				<div className="section-header">
					<p>Pricing Plan</p>
					<h2>No Extra Hidden Charges</h2>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="price-item">
							<div className="price-header">
								<div className="price-icon">
									<i className="fa fa-home" />
								</div>
								<div className="price-title">
									<h2>Standard</h2>
								</div>
								<div className="price-pricing">
									<h2>
										<small>$</small>99
									</h2>
								</div>
							</div>
							<div className="price-body">
								<div className="price-des">
									<ul>
										<li>3 Bedrooms cleaning</li>
										<li>2 Bathrooms cleaning</li>
										<li>1 Living room Cleaning</li>
										<li>Vacuum Cleaning</li>
										<li>Within 6 Hours</li>
									</ul>
								</div>
							</div>
							<div className="price-footer">
								<div className="price-action">
									<a href="">
										<i className="fa fa-shopping-cart" />
										Book Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="price-item featured-item">
							<div className="price-header">
								<div className="price-icon">
									<i className="fa fa-star" />
								</div>
								<div className="price-title">
									<h2>Premium</h2>
								</div>
								<div className="price-pricing">
									<h2>
										<small>$</small>149
									</h2>
								</div>
							</div>
							<div className="price-body">
								<div className="price-des">
									<ul>
										<li>5 Bedrooms cleaning</li>
										<li>3 Bathrooms cleaning</li>
										<li>2 Living room Cleaning</li>
										<li>Vacuum Cleaning</li>
										<li>Within 6 Hours</li>
									</ul>
								</div>
							</div>
							<div className="price-footer">
								<div className="price-action">
									<a href="">
										<i className="fa fa-shopping-cart" />
										Book Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="price-item">
							<div className="price-header">
								<div className="price-icon">
									<i className="fa fa-gift" />
								</div>
								<div className="price-title">
									<h2>Enterprise</h2>
								</div>
								<div className="price-pricing">
									<h2>
										<small>$</small>199
									</h2>
								</div>
							</div>
							<div className="price-body">
								<div className="price-des">
									<ul>
										<li>8 Bedrooms cleaning</li>
										<li>5 Bathrooms cleaning</li>
										<li>3 Living room Cleaning</li>
										<li>Vacuum Cleaning</li>
										<li>Within 12 Hours</li>
									</ul>
								</div>
							</div>
							<div className="price-footer">
								<div className="price-action">
									<a href="">
										<i className="fa fa-shopping-cart" />
										Book Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
