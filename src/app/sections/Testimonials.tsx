"use client";
import { useEffect, useState } from "react";

import { supabase, Testimonial } from "@/lib/supabase";
import TestimonialCard from "@/components/TestimonialCard";

interface TestimonialProps {
	name: string;
	message: string;
	profession?: string;
	imageUrl?: string;
}

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchApproved = async () => {
			const { data, error } = await supabase
				.from("testimonials")
				.select("*")
				.eq("approved", true)
				.order("created_at", { ascending: false });
			if (error) console.error("Failed to fetch testimonials:", error);
			else setTestimonials(data || []);
			setLoading(false);
		};
		fetchApproved();
	}, []);

	// Reinitialize Owl Carousel after testimonials load
	useEffect(() => {
		if (!loading && testimonials.length > 0) {
			const timer = setTimeout(() => {
				// @ts-ignore
				if (window.$ && window.$.fn.owlCarousel) {
					// @ts-ignore
					$(".testimonials-carousel").owlCarousel("destroy");
					// @ts-ignore
					$(".testimonials-carousel").owlCarousel({
						autoplay: true,
						smartSpeed: 1000,
						margin: 30,
						dots: true,
						loop: false,
						nav: false,
						responsive: {
							0: { items: 1 },
							768: { items: 2 },
							992: { items: 3 },
						},
					});
				}
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [loading, testimonials]);

	if (loading) {
		return (
			<div className="testimonial">
				<div className="container">
					<div className="section-header">
						<p>Client Review</p>
						<h2>Client Says About Service</h2>
					</div>
					<div className="text-center">Loading testimonials...</div>
				</div>
			</div>
		);
	}

	// Don't render the section if there are no approved testimonials
	if (testimonials.length === 0) {
		return null;
	}

	return (
		<div className="testimonial">
			<div className="container">
				<div className="section-header">
					<p>Client Review</p>
					<h2>Client Says About Service</h2>
				</div>
				<div className="owl-carousel testimonials-carousel">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							name={testimonial.name}
							message={testimonial.message}
							profession={testimonial.profession || undefined}
							company={testimonial.company || undefined}
							imageUrl={testimonial.image_url || undefined}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
