import Image from "next/image";

interface Testimonial {
	message: string;
	name: string;
	image: string;
}

const Testimonials = () => {
	const allTestimonials: Testimonial[] = [
		{
			message:
				"Outstanding cleaning service! As a busy Edmonton mom, I appreciate how thorough and reliable they are. My home has never looked better!",
			name: "Sarah Thompson",
			image: "/testimonial.jpg",
		},
		{
			message:
				"Professional, efficient, and trustworthy. They've been cleaning our office in downtown Edmonton for months and we couldn't be happier with the service.",
			name: "Michael Chen",
			image: "/testimonial.jpg",
		},
		{
			message:
				"Finally found a cleaning service that understands Edmonton homes! They're detail-oriented, professional, and always leave our space sparkling clean.",
			name: "Emily Rodriguez",
			image: "/testimonial.jpg",
		},
	];

	return (
		<div className="testimonial">
			<div className="container">
				<div className="section-header">
					<p>Client Reviews</p>
					<h2>Here's what Edmonton clients say about our cleaning services</h2>
				</div>
				<div className="owl-carousel testimonials-carousel">
					{allTestimonials.map((testimonial, index) => (
						<div className="testimonial-item" key={index}>
							<div className="testimonial-img">
								<Image
									src={testimonial.image}
									alt=""
									width={50}
									height={50}
									style={{ objectFit: "contain", width: "50%", height: "100%" }}
								/>
							</div>
							<div className="testimonial-content">
								<p>{testimonial.message}</p>
								<h3>{testimonial.name}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
