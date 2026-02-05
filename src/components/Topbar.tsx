function Topbar() {
	return (
		<div className="topbar text-white" style={{ backgroundColor: "transparent" }}>
			<div className="topbar-col">
				<a
					href="tel:+1 437 685 5676"
					aria-label="Call us"
					className="text-decoration-none"
				>
					<i className="fa fa-phone-alt" />
					+1 437 685 5676
				</a>
			</div>
			<div className="topbar-col">
				<a href="mailto:company@2women.com" className="text-decoration-none">
					<i className="fa fa-envelope" />
					company@2women.com
				</a>
			</div>
			<div className="topbar-col">
				<div className="topbar-social">
					<a href="" aria-label="Facebook">
						<i className="fab fa-facebook-f" aria-hidden="true" />
					</a>
					<a href="" aria-label="Instagram">
						<i className="fab fa-instagram" aria-hidden="true" />
					</a>
					<a href="" aria-label="Twitter">
						<i className="fab fa-twitter" aria-hidden="true" />
					</a>
					<a href="" aria-label="LinkedIn">
						<i className="fab fa-linkedin" aria-hidden="true" />
					</a>
					<a href="" aria-label="YouTube">
						<i className="fab fa-youtube" aria-hidden="true" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
