"use client";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg bg-light navbar-light">
			<span className="navbar-brand">MENU</span>
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
					<Link href="/" className="nav-item nav-link active">
						Home
					</Link>
					<Link href="/about" className="nav-item nav-link">
						About
					</Link>
					<Link href="/services" className="nav-item nav-link">
						Services
					</Link>

					<Link href="/contact" className="nav-item nav-link">
						Contact
					</Link>
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
					<a href="#" className="btn btn-block">
						Get A Quote
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
