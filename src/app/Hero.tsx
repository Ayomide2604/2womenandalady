"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});
	const initialFormData = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	};
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [successTimeoutId, setSuccessTimeoutId] = useState<number | null>(null);

	useEffect(() => {
		return () => {
			if (successTimeoutId) {
				window.clearTimeout(successTimeoutId);
			}
		};
	}, [successTimeoutId]);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const closeSuccess = () => {
		setShowSuccess(false);
		setIsSubmitting(false);
		setFormData(initialFormData);
		if (successTimeoutId) {
			window.clearTimeout(successTimeoutId);
			setSuccessTimeoutId(null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/send-inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
					phone: formData.phone,
					service: formData.service,
					subject: "Quote Request",
					message: formData.message,
				}),
			});

			if (response.ok) {
				const timeoutId = window.setTimeout(() => {
					setShowSuccess(true);
					setIsSubmitting(false);
					setSuccessTimeoutId(null);
				}, 900);
				setSuccessTimeoutId(timeoutId);
			} else {
				const errorData = await response.json();
				setIsSubmitting(false);
				alert(
					"Failed to send quote request: " +
						(errorData.error || "Please try again.")
				);
			}
		} catch (error) {
			console.error("Quote submit error:", error);
			setIsSubmitting(false);
			alert("Failed to send quote request. Please try again.");
		}
	};

	return (
		<div className="hero row align-items-center m-0">
			<div className="col-md-7 col-12 px-3">
				<h2>Edmonton's Trusted</h2>
				<h2>
					<span>Cleaning Service</span>
				</h2>
				<p>
					Proudly serving Edmonton and surrounding areas with professional
					cleaning services since 2023. Experience the difference of working
					with a local, women-led cleaning company.
				</p>
			</div>
			<div className="col-md-5 col-12 px-3">
				<div className="form">
					<h3>Get A Quote</h3>
					<form onSubmit={handleSubmit}>
						<input
							className="form-control mb-2"
							type="text"
							name="firstName"
							placeholder="First Name"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
						<input
							className="form-control mb-2"
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
						<input
							className="form-control mb-2"
							type="email"
							name="email"
							placeholder="Email Address"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							className="form-control mb-2"
							type="tel"
							name="phone"
							placeholder="Mobile Number"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
						<select
							className="form-control mb-2"
							name="service"
							value={formData.service}
							onChange={handleChange}
							required
						>
							<option value="">Choose a service</option>
							<option value="residential">Residential Cleaning</option>
							<option value="construction">Post-Construction Cleaning</option>
							<option value="carpet">Carpet Cleaning</option>
							<option value="biohazard">Bio Hazard Cleaning</option>
							<option value="other">Other Services</option>
						</select>
						<textarea
							className="form-control mb-2"
							name="message"
							placeholder="Tell us what you need..."
							rows={3}
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<button
							className="btn btn-block"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Get A Quote"}
						</button>
					</form>

					{(isSubmitting || showSuccess) && (
						<div
							className="contact-form-overlay"
							role="dialog"
							aria-modal="true"
						>
							<div className="contact-form-overlay__content">
								{isSubmitting && !showSuccess ? (
									<div className="contact-form-modal">
										<div className="contact-form-spinner" />
										<h4 className="mt-3 mb-0">Sending your request...</h4>
									</div>
								) : (
									<div className="contact-form-modal">
										<div className="success-icon mb-3">
											<i className="fas fa-check-circle fa-3x text-success"></i>
										</div>
										<h4 className="text-success mb-2">Request received!</h4>
										<p className="text-muted mb-3">
											We’ll contact you within 24 hours.
										</p>
										<button
											className="btn btn-warning text-dark fw-bold"
											onClick={closeSuccess}
											type="button"
										>
											Okay
										</button>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
