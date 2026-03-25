"use client";

import React, { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";

export default function SubmitTestimonial() {
	const [formData, setFormData] = useState({
		name: "",
		message: "",
		profession: "",
		company: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const uploadImage = async (file: File): Promise<string | null> => {
		try {
			console.log("Uploading file:", file.name, "Size:", file.size);

			const fileExt = file.name.split(".").pop();
			const fileName = `${Date.now()}.${fileExt}`;

			console.log("Uploading to storage as:", fileName);

			const { data: uploadData, error: uploadError } = await supabase.storage
				.from("testimonials")
				.upload(fileName, file, {
					upsert: true,
					cacheControl: "3600",
				});

			if (uploadError) {
				console.error("Storage upload error:", uploadError);
				console.error("Error details:", JSON.stringify(uploadError, null, 2));
				return null;
			}

			console.log("Upload successful:", uploadData);

			const { data: urlData } = supabase.storage
				.from("testimonials")
				.getPublicUrl(fileName);

			console.log("Public URL:", urlData.publicUrl);

			return urlData.publicUrl;
		} catch (error) {
			console.error("Unexpected error during upload:", error);
			return null;
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		let imageUrl: string | null = null;

		console.log("Form submitted with file:", file?.name || "No file");

		if (file) {
			imageUrl = await uploadImage(file);
			console.log("Image upload result:", imageUrl);
		}

		const testimonialData = {
			name: formData.name,
			message: formData.message,
			profession: formData.profession || null,
			company: formData.company || null,
			image_url: imageUrl,
			approved: false,
		};

		console.log("Submitting testimonial data:", testimonialData);

		const { error } = await supabase
			.from("testimonials")
			.insert(testimonialData);

		setIsSubmitting(false);
		if (error) {
			console.error("Database insert error:", error);
			alert("Failed to submit testimonial. Please try again.");
		} else {
			console.log("Testimonial submitted successfully");
			setSubmitted(true);
			setFormData({ name: "", message: "", profession: "", company: "" });
			setFile(null);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};

	if (submitted) {
		return (
			<div className="container py-5 text-center">
				<h2 className="mb-3">Thank you!</h2>
				<p className="text-muted">We have received your submission.</p>
				<button className="btn btn-primary" onClick={() => setSubmitted(false)}>
					Submit another
				</button>
			</div>
		);
	}

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h2 className="mb-4">Share Your Experience</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Your Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="profession" className="form-label">
								Profession (optional)
							</label>
							<input
								type="text"
								className="form-control"
								id="profession"
								name="profession"
								value={formData.profession}
								onChange={handleChange}
								placeholder="e.g., Software Engineer"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="company" className="form-label">
								Company (optional)
							</label>
							<input
								type="text"
								className="form-control"
								id="company"
								name="company"
								value={formData.company}
								onChange={handleChange}
								placeholder="e.g., Tech Corp"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="image" className="form-label">
								Photo (optional)
							</label>
							<input
								type="file"
								className="form-control"
								id="image"
								accept="image/*"
								onChange={handleFileChange}
								ref={fileInputRef}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Your Testimonial
							</label>
							<textarea
								className="form-control"
								id="message"
								name="message"
								rows={5}
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Submitting..." : "Submit Testimonial"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
