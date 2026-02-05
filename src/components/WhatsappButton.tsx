// components/WhatsappButton.tsx
"use client";

const WhatsappButton = () => {
	const whatsappNumber = "+17807091707";
	const message = encodeURIComponent(
		"Hello! I'm interested in your cleaning services.",
	);

	return (
		<a
			href={`https://wa.me/${whatsappNumber}?text=${message}`}
			target="_blank"
			rel="noopener noreferrer"
			className="whatsapp-button d-flex align-items-center justify-content-center"
			aria-label="Chat on WhatsApp"
		>
			<i className="fab fa-whatsapp fa-2x"></i>
		</a>
	);
};

export default WhatsappButton;
