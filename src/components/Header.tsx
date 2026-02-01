"use client";
import Image from "next/image";

// Header components
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
								<Image
									src="/logo.png"
									alt="Logo"
									width={100}
									height={100}
									style={{ objectFit: "contain" }}
								/>
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
