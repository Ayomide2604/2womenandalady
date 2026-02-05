function Topbar() {
	return (
		<div
			className="topbar text-white"
			style={{ backgroundColor: "transparent" }}
		>
			<div className="topbar-col">
				<a
					href="tel:+1 780 709 1707"
					aria-label="Call us"
					className="text-decoration-none"
				>
					<i className="fa fa-phone-alt" />
					+1 780 709 1707
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
					<a
						href="https://wa.me/17807091707"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
					>
						<i className="fab fa-whatsapp" aria-hidden="true" />
					</a>
					<a href="mailto:company@2women.com" aria-label="Email">
						<i className="fa fa-envelope" aria-hidden="true" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
