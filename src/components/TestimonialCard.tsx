import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface TestimonialCardProps {
	name: string;
	message: string;
	profession?: string;
	company?: string;
	imageUrl?: string;
}

const TestimonialCard = ({
	message,
	name,
	imageUrl,
	profession,
	company,
}: TestimonialCardProps) => {
	const [imgSrc, setImgSrc] = useState(imageUrl || "/testimonial.jpg");
	const [imgError, setImgError] = useState(false);

	const handleImageError = () => {
		if (!imgError && imgSrc !== "/testimonial.jpg") {
			setImgSrc("/testimonial.jpg");
			setImgError(true);
		}
	};

	return (
		<div className="testimonial-item">
			<div className="testimonial-img">
				<Image
					src={imgSrc}
					alt={`${name}'s profile picture`}
					width={180}
					height={180}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
					onError={handleImageError}
					priority={false}
					sizes="(max-width: 768px) 180px, (max-width: 1200px) 180px, 180px"
				/>
			</div>
			<div className="testimonial-content">
				<p>{message}</p>
				<h3>{name}</h3>
				<h4>
					{profession && company
						? `${profession}, ${company}`
						: profession || company || ""}
				</h4>
			</div>
		</div>
	);
};

export default TestimonialCard;
