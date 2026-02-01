"use client";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

function Header() {
	return (
		<div className="header ">
			<div className="container-fluid">
				<div className="header-top row align-items-center">
					<div className="col-lg-3">
						<div className="brand">
							<a href="index.html" style={{ textDecoration: "none" }}>
								{/* 2Women */}
								<img src="assets/logo.png" alt="Logo" />
							</a>
						</div>
					</div>
					<div className="col-lg-9">
						<Topbar />
						<Navbar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
