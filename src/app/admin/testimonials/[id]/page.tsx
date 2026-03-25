"use client";

import React, { useEffect, useState } from "react";
import { supabase, Testimonial } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";


export default function TestimonialDetail() {
	const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const params = useParams();

	useEffect(() => {
		const fetch = async () => {
			const { data, error } = await supabase
				.from("testimonials")
				.select("*")
				.eq("id", params.id)
				.single();
			if (error) {
				alert("Testimonial not found.");
				router.push("/admin/dashboard");
			} else {
				setTestimonial(data);
			}
			setLoading(false);
		};
		fetch();
	}, [params.id, router]);

	if (loading)
		return <div className="container py-5 text-center">Loading...</div>;
	if (!testimonial) return null;

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h2>Testimonial Details</h2>
						<div>
							<button
								className="btn btn-outline-secondary"
								onClick={() => router.push("/admin/dashboard")}
							>
								Back
							</button>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<div className="row mb-3">
								<div className="col-sm-2 fw-bold">Name:</div>
								<div className="col-sm-10">{testimonial.name}</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-2 fw-bold">Message:</div>
								<div className="col-sm-10">{testimonial.message}</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-2 fw-bold">Status:</div>
								<div className="col-sm-10">
									<span
										className={`badge ${testimonial.approved ? "bg-success" : "bg-warning"}`}
									>
										{testimonial.approved ? "Approved" : "Pending"}
									</span>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-2 fw-bold">Received:</div>
								<div className="col-sm-10">
									{new Date(testimonial.created_at).toLocaleString()}
								</div>
							</div>
							{testimonial.image_url && (
								<div className="row mb-3">
									<div className="col-sm-2 fw-bold">Photo:</div>
									<div className="col-sm-10">
										<img
											src={testimonial.image_url}
											alt="Photo"
											style={{ maxHeight: 150 }}
											className="img-thumbnail"
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
