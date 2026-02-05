"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		return pathname === href;
	};
	return (
		<div
			className="navbar navbar-expand-lg navbar-dark"
			style={{ backgroundColor: "black" }}
		>
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
					<Link
						href="/"
						className={`nav-item nav-link text-decoration-none ${
							isActiveLink("/") ? "text-warning" : "text-white"
						}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`nav-item nav-link text-decoration-none ${
							isActiveLink("/about") ? "text-warning" : "text-white"
						}`}
					>
						About
					</Link>
					<Link
						href="/services"
						className={`nav-item nav-link text-decoration-none ${
							isActiveLink("/services") ? "text-warning" : "text-white"
						}`}
					>
						Services
					</Link>
					<Link
						href="/portfolio"
						className={`nav-item nav-link text-decoration-none ${
							isActiveLink("/portfolio") ? "text-warning" : "text-white"
						}`}
					>
						Portfolio
					</Link>

					<Link
						href="/contact"
						className={`nav-item nav-link text-decoration-none ${
							isActiveLink("/contact") ? "text-warning" : "text-white"
						}`}
					>
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
					<a href="#" className="btn btn-warning">
						Get A Quote
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
