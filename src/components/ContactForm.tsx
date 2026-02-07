"use client";

import React, { useEffect, useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		service: "",
		subject: "",
		message: "",
	});
	const initialFormData = {
		firstName: "",
		lastName: "",
		email: "",
		service: "",
		subject: "",
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
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Send inquiry via Resend API
			const response = await fetch("/api/send-inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const data = await response.json();
				if (data?.customerSent === false) {
					console.warn(
						"Customer confirmation email failed:",
						data?.customerError,
					);
				}

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
					"Failed to send inquiry: " + (errorData.error || "Please try again."),
				);
			}
		} catch (error) {
			console.error("Submit error:", error);
			setIsSubmitting(false);
			alert("Failed to send inquiry. Please try again.");
		}
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

	return (
		<div className="contact-form">
			<div className="contact-form-header">
				<h3>Leave a Message</h3>
				<p>Fill out the form below and we'll get back to you within 24 hours</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="firstName">First Name *</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							className="form-control"
							placeholder="John"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="lastName">Last Name *</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							className="form-control"
							placeholder="Doe"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-12">
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
						disabled={isSubmitting}
					>
						<i className="fas fa-envelope me-2"></i>
						{isSubmitting ? "Sending..." : "Send Inquiry"}
					</button>
					<small className="form-text text-muted mt-2 d-block">
						We'll respond within 24 hours
					</small>
				</div>
			</form>

			{(isSubmitting || showSuccess) && (
				<div className="contact-form-overlay" role="dialog" aria-modal="true">
					<div className="contact-form-overlay__content">
						{isSubmitting && !showSuccess ? (
							<div className="contact-form-modal">
								<div className="contact-form-spinner" />
								<h4 className="mt-3 mb-0">Sending your message...</h4>
							</div>
						) : (
							<div className="contact-form-modal">
								<div className="success-icon mb-3">
									<i className="fas fa-check-circle fa-3x text-success"></i>
								</div>
								<h4 className="text-success mb-2">Thank You!</h4>
								<p className="text-muted mb-1">
									Your inquiry has been sent successfully
								</p>
								<p className="text-muted mb-3">
									We'll respond to {formData.email} within 24 hours
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
	);
};

export default ContactForm;
