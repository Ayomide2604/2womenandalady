import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Layout component imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Template CSS */
import "@/assets/css/style.css";

/* Lightbox CSS */
import "@/assets/lib/lightbox/css/lightbox.min.css";

/* Owl Carousel CSS */
import "@/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/assets/lib/owlcarousel/assets/owl.theme.default.min.css";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
	title: "2 Women and a Lady Cleaning Services",
	description: "Professional cleaning services for homes and offices",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap"
				/>
			</head>

			<body>
				<div className="wrapper">
					<Header />
					{children}
					<WhatsappButton />
					<Footer />
				</div>

				{/* jQuery FIRST */}
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
					strategy="beforeInteractive"
				/>

				{/* Popper.js (required for dropdowns) */}
				<Script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/assets/lib/easing/easing.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/assets/lib/isotope/isotope.pkgd.min.js"
					strategy="afterInteractive"
				/>

				{/* Bootstrap 4 JS */}
				<Script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
					strategy="afterInteractive"
				/>

				{/* Owl Carousel */}
				<Script
					src="/assets/lib/owlcarousel/owl.carousel.min.js"
					strategy="afterInteractive"
				/>

				{/* Lightbox */}
				<Script
					src="/assets/lib/lightbox/js/lightbox.min.js"
					strategy="afterInteractive"
				/>

				{/* Template JS */}
				<Script src="/assets/js/main.js" strategy="afterInteractive" />
			</body>
		</html>
	);
}
