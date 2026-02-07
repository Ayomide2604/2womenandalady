"use client";

import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		service: "",
		subject: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			// Send inquiry via Resend API
			const response = await fetch("/api/send-inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Show success state
				setIsSubmitted(true);

				// For testing: Show what customer would receive
				if (formData.email === "theolowuayo@gmail.com") {
					console.log("Customer would receive confirmation email");
				}
			} else {
				const errorData = await response.json();
				alert(
					"Failed to send inquiry: " + (errorData.error || "Please try again."),
				);
			}
		} catch (error) {
			console.error("Submit error:", error);
			alert("Failed to send inquiry. Please try again.");
		}
	};

	return (
		<div className="contact-form">
			<div className="contact-form-header">
				<h3>Get Your Free Quote</h3>
				<p>Fill out the form below and we'll get back to you within 24 hours</p>
			</div>
			{isSubmitted ? (
				<div className="success-message text-center py-4">
					<div className="success-icon mb-3">
						<i className="fas fa-check-circle fa-3x text-success"></i>
					</div>
					<h4 className="text-success mb-2">Thank You!</h4>
					<p className="text-muted">Your inquiry has been sent successfully</p>
					<p className="text-muted">
						We'll respond to {formData.email} within 24 hours
					</p>
					<button
						className="btn btn-outline-secondary mt-3"
						onClick={() => setIsSubmitted(false)}
					>
						Send Another Message
					</button>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="name">Your Name *</label>
							<input
								type="text"
								id="name"
								name="name"
								className="form-control"
								placeholder="John Doe"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="email">Your Email *</label>
							<input
								type="email"
								id="email"
								name="email"
								className="form-control"
								placeholder="john@example.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="service">Service Type *</label>
						<select
							id="service"
							name="service"
							className="form-control"
							value={formData.service}
							onChange={handleChange}
							required
						>
							<option value="">Select a service...</option>
							<option value="residential">Residential Cleaning</option>
							<option value="construction">Post-Construction Cleaning</option>
							<option value="carpet">Carpet Cleaning</option>
							<option value="biohazard">Bio Hazard Cleaning</option>
							<option value="other">Other Services</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject *</label>
						<input
							type="text"
							id="subject"
							name="subject"
							className="form-control"
							placeholder="What specific details do you need?"
							value={formData.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message *</label>
						<textarea
							id="message"
							name="message"
							className="form-control"
							rows={5}
							placeholder="Tell us about your cleaning needs..."
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-submit">
						<button
							className="btn btn-warning text-dark fw-bold btn-lg"
							type="submit"
						>
							<i className="fas fa-envelope me-2"></i>
							Send Inquiry
						</button>
						<small className="form-text text-muted mt-2 d-block">
							We'll respond within 24 hours
						</small>
					</div>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
