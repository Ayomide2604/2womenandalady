"use client";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg bg-light navbar-light">
			<a href="#" className="navbar-brand">
				MENU
			</a>
			<button
				type="button"
				className="navbar-toggler"
				data-toggle="collapse"
				data-target="#navbarCollapse"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse justify-content-between"
				id="navbarCollapse"
			>
				<div className="navbar-nav ml-auto">
					<a href="index.html" className="nav-item nav-link active">
						Home
					</a>
					<a href="about.html" className="nav-item nav-link">
						About
					</a>
					<a href="service.html" className="nav-item nav-link">
						Service
					</a>

					<a href="contact.html" className="nav-item nav-link">
						Contact
					</a>
					{/* <div className="nav-item dropdown">
						<a
							href="#"
							className="nav-link dropdown-toggle"
							data-toggle="dropdown"
						>
							Dropdown
						</a>
						<div className="dropdown-menu">
							<a href="#" className="dropdown-item">
								Sub Item 1
							</a>
							<a href="#" className="dropdown-item">
								Sub Item 2
							</a>
						</div>
					</div> */}
					<a href="#" className="btn">
						Get A Quote
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
