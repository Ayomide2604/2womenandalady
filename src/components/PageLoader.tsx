"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
	const [isLoading, setIsLoading] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		// Show loader when pathname changes (navigation)
		setIsLoading(true);
		timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 800);

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [pathname]);

	if (!isLoading) return null;

	return (
		<div className="page-loader">
			<div className="loader-spinner">
				<div className="spinner"></div>
				<div className="loader-text">Loading...</div>
			</div>
		</div>
	);
};

export default PageLoader;
