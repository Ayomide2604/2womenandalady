"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
// Header components
import Topbar from "./Topbar";
import Navbar from "./Navbar";

function Header() {
	const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		return pathname === href;
	};

	const toggleOffcanvas = () => {
		setIsOffcanvasOpen(!isOffcanvasOpen);
	};

	return (
		<>
			<div className="header" style={{ backgroundColor: "black" }}>
				<div className="container-fluid">
					<div className="header-top row align-items-center">
						<div className="col-lg-3 col-md-4 col-6">
							<div className="brand d-flex align-items-center">
								<Link href="/" style={{ textDecoration: "none" }}>
									<Image
										src="/logo.png"
										alt="Logo"
										width={100}
										height={100}
										style={{ objectFit: "contain" }}
									/>
								</Link>
							</div>
						</div>
						<div className="col-lg-9 col-md-8 d-none d-lg-block">
							<Topbar />
							<Navbar />
						</div>
						<div className="col-6 d-lg-none">
							<div
								className="mobile-menu-toggle d-flex justify-content-end align-items-center"
								style={{
									position: "absolute",
									right: "15px",
									top: "50%",
									transform: "translateY(-50%)",
								}}
							>
								<button
									className={`btn btn-link text-white p-0 hamburger-icon ${
										isOffcanvasOpen ? "open" : ""
									}`}
									type="button"
									onClick={toggleOffcanvas}
									style={{ border: "none", fontSize: "24px" }}
								>
									<svg
										width="40"
										height="40"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path className="line line1" d="M3 6h18" />
										<path className="line line2" d="M3 12h18" />
										<path className="line line3" d="M3 18h18" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Off-canvas Menu */}
			{isOffcanvasOpen && (
				<div
					className="offcanvas-backdrop show"
					onClick={toggleOffcanvas}
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
				></div>
			)}
			<div
				className={`offcanvas offcanvas-end ${isOffcanvasOpen ? "show" : ""}`}
				tabIndex={-1}
				id="mobileMenuOffcanvas"
				style={{ backgroundColor: "#000", width: "300px" }}
			>
				<div className="offcanvas-header border-bottom border-secondary bg-gradient">
					<div className="text-center py-3">
						<Image
							src="/logo.png"
							alt="2 Women and a Lady Logo"
							width={40}
							height={40}
							style={{ objectFit: "contain" }}
						/>
					</div>
					<button
						type="button"
						className="btn-close btn-close-white position-absolute"
						style={{ top: "15px", right: "15px" }}
						onClick={toggleOffcanvas}
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body p-0">
					{/* Mobile Topbar */}
					<div className="mobile-topbar p-3 border-bottom border-secondary">
						<div className="mb-3">
							<a
								href="tel:+1 780 709 1707"
								className="text-white text-decoration-none d-block mb-2"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="me-2"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								+1 780 709 1707
							</a>
							<a
								href="mailto:company@2women.com"
								className="text-white text-decoration-none d-block mb-3"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="me-2"
								>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								company@2women.com
							</a>
							<div className="mobile-social-links">
								<a href="#" className="text-white me-3" aria-label="Facebook">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a href="#" className="text-white me-3" aria-label="Instagram">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
									</svg>
								</a>
								<a
									href="https://wa.me/17807091707"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white me-3"
									aria-label="WhatsApp"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.223.15-.489.15-.674-.045-.049-.027-.226-.099-.473-.198-.441-.198-1.156-.522-1.587-1.092-.53-.571-1.063-1.282-1.034-1.43.03-.148.329-.1.488-.049.1.05.224.149.473.297.297.149.966.571 1.092.696.226.226.415.149.594.05.226-.149.438-.446.603-.696.226-.223.415-.149.594-.05.226.149.415.297.67.446.254.149.571.353.737.602.248.297.446.596.6.596.224 0 .393-.149.603-.297.297-.149.521-.447.67-.696.223-.149.373-.373.521-.596.197-.223.335-.596.373-.995.039-.322.029-.633.029-.933 0-2.495-1.012-4.848-2.753-6.714-1.739-1.867-4.011-2.887-6.467-2.887-.645 0-1.274.05-1.889.149-1.361.274-2.697.814-3.918 1.579-1.221.764-2.354 1.727-3.349 2.938-.995 1.211-1.548 2.642-1.548 4.244 0 1.795.493 3.47 1.361 4.948.939 1.677 2.171 3.191 3.688 4.384 1.519 1.192 3.125 2.033 4.865 2.528.397.099.795.149 1.193.149.645 0 1.274-.05 1.889-.149.945-.197 1.863-.584 2.697-1.159.834-.574 1.587-1.292 2.232-2.179.645-.887 1.078-1.889 1.348-3.011.27-1.122.149-2.279.149-3.438 0-1.59-.297-3.118-.834-4.547-.537-1.429-1.322-2.75-2.354-3.958-1.033-1.208-2.283-2.159-3.748-2.852-1.465-.693-3.005-1.045-4.596-1.045-.645 0-1.274.05-1.889.149-1.361.274-2.697.814-3.918 1.579-1.221.764-2.354 1.727-3.349 2.938-.995 1.211-1.548 2.642-1.548 4.244 0 1.795.493 3.47 1.361 4.948.939 1.677 2.171 3.191 3.688 4.384 1.519 1.192 3.125 2.033 4.865 2.528.397.099.795.149 1.193.149z" />
									</svg>
								</a>
								<a
									href="mailto:company@2women.com"
									className="text-white"
									aria-label="Email"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
										<polyline points="22,6 12,13 2,6" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Mobile Navigation */}
					<nav className="mobile-nav">
						<div className="nav-links p-3">
							<Link
								href="/"
								className={`nav-link d-block py-3 text-decoration-none border-bottom border-secondary ${
									isActiveLink("/") ? "text-warning" : "text-white"
								}`}
								onClick={toggleOffcanvas}
							>
								Home
							</Link>
							<Link
								href="/about"
								className={`nav-link d-block py-3 text-decoration-none border-bottom border-secondary ${
									isActiveLink("/about") ? "text-warning" : "text-white"
								}`}
								onClick={toggleOffcanvas}
							>
								About
							</Link>
							<Link
								href="/services"
								className={`nav-link d-block py-3 text-decoration-none border-bottom border-secondary ${
									isActiveLink("/services") ? "text-warning" : "text-white"
								}`}
								onClick={toggleOffcanvas}
							>
								Services
							</Link>
							<Link
								href="/portfolio"
								className={`nav-link d-block py-3 text-decoration-none border-bottom border-secondary ${
									isActiveLink("/portfolio") ? "text-warning" : "text-white"
								}`}
								onClick={toggleOffcanvas}
							>
								Portfolio
							</Link>
							<Link
								href="/contact"
								className={`nav-link d-block py-3 text-decoration-none border-bottom border-secondary ${
									isActiveLink("/contact") ? "text-warning" : "text-white"
								}`}
								onClick={toggleOffcanvas}
							>
								Contact
							</Link>
							<a
								href="#"
								className="btn btn-warning w-100 mt-3 text-dark fw-bold"
								onClick={toggleOffcanvas}
							>
								Get A Quote
							</a>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Header;
