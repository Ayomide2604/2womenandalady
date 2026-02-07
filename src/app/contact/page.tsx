import React from "react";
import FAQCard from "@/components/FAQCard";
import { faqs } from "@/data/faqs";
import ContactForm from "@/components/ContactForm";

const page = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="section-header">
					<p>Contact Us</p>
					<h2>Send us a Message</h2>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ContactForm />
					</div>
					<div className="col-md-6">
						<div className="faqs">
							<div id="accordion">
								{faqs.map((faq, index) => (
									<FAQCard
										key={faq.id}
										faq={faq}
										index={index}
										isFirst={index === 0}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
