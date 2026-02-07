import Image from "next/image";
import { Feature } from "@/data/features";

interface FeatureCardProps {
	feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
	return (
		<div className="row align-items-center feature-item">
			<div className="col-5">
				<Image
					src={feature.image}
					alt={feature.imageAlt}
					width={200}
					height={100}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="col-7">
				<h3>{feature.title}</h3>
				<p>{feature.description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
