"use client";
import Link from "next/link";
import Image from "next/image";
// Header components
import Topbar from "./Topbar";
import Navbar from "./Navbar";

function Header() {
	return (
		<div className="header " style={{ backgroundColor: "black" }}>
			<div className="container-fluid">
				<div className="header-top row align-items-center">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="brand">
							<Link href="/" style={{ textDecoration: "none" }}>
								{/* 2Women */}
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
					<div className="col-lg-9 col-md-8 col-12">
						<Topbar />
						<Navbar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
