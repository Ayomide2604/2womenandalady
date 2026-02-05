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
				"Working with this team has been an incredible experience. They delivered beyond our expectations and truly understood our vision.",
			name: "Sarah Johnson",
			image: "/testimonial.jpg",
		},
		{
			message:
				"Professional, creative, and reliable. They transformed our ideas into reality with exceptional attention to detail.",
			name: "Michael Chen",
			image: "/testimonial.jpg",
		},
		{
			message:
				"The quality of work and dedication to our project was outstanding. I highly recommend their services to anyone looking for excellence.",
			name: "Emily Rodriguez",
			image: "/testimonial.jpg",
		},
	];

	return (
		<div className="testimonial">
			<div className="container">
				<div className="section-header">
					<p>Client Review</p>
					<h2>Here's what our clients say</h2>
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
