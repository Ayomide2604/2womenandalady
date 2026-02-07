import { FAQ } from "@/data/faqs";

interface FAQCardProps {
	faq: FAQ;
	index: number;
	isFirst: boolean;
}

const FAQCard = ({ faq, index, isFirst }: FAQCardProps) => {
	return (
		<div className="card">
			<div className="card-header">
				<a
					className={`card-link ${isFirst ? "collapsed" : ""}`}
					data-toggle="collapse"
					href={`#${faq.id}`}
					aria-expanded={isFirst ? "true" : "false"}
					style={{ textDecoration: "none" }}
				>
					<span>{index + 1}</span> {faq.question}
				</a>
			</div>
			<div
				id={faq.id}
				className={`collapse ${isFirst ? "show" : ""}`}
				data-parent="#accordion"
			>
				<div className="card-body">{faq.answer}</div>
			</div>
		</div>
	);
};

export default FAQCard;
