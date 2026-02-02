// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="d-flex vh-100 align-items-center justify-content-center text-center">
			<div>
				<h1 className="display-4">404</h1>
				<p className="lead">Page not found</p>
				<p>The page you’re looking for doesn’t exist.</p>

				
					<button className="btn btn-block mt-3">Back to Home</button>
				
			</div>
		</div>
	);
}
