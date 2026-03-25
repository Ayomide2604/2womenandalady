"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		console.log("Attempting login with:", { email, password: "***" });
		const { data, error: signInError } = await supabase.auth.signInWithPassword(
			{
				email,
				password,
			},
		);
		console.log("Supabase response:", { data, signInError });
		setLoading(false);
		if (signInError) {
			setError(`Login failed: ${signInError.message}`);
		} else if (data.session) {
			console.log("Login successful, redirecting to /admin/dashboard");
			router.push("/admin/dashboard");
		} else {
			setError("Login failed: No session returned.");
		}
	};

	return (
		<div className="container vh-100 d-flex align-items-center justify-content-center">
			<div className="col-md-5">
				<h2 className="mb-4 text-center">Admin Login</h2>
				<form onSubmit={handleLogin}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{error && <div className="alert alert-danger">{error}</div>}
					<button
						type="submit"
						className="btn btn-dark w-100"
						disabled={loading}
					>
						{loading ? "Logging in..." : "Log In"}
					</button>
				</form>
			</div>
		</div>
	);
}
