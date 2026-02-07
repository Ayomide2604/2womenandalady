import FeatureCard from "@/components/FeatureCard";
import { features } from "@/data/features";

const Features = () => {
	return (
		<div className="feature">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="section-header left">
							<p>Why Choose Us</p>
							<h2>Edmonton's Trusted Female-Owned Cleaning Experts</h2>
						</div>
						<p>
							As Edmonton's premier female-owned cleaning service since 2023, we
							bring attention to detail and a personal touch to every project.
							Our team understands the unique needs of Edmonton homes and
							businesses, providing reliable, thorough, and affordable cleaning
							solutions you can trust.
						</p>
						<a className="btn" href="">
							Learn More
						</a>
					</div>
					<div className="col-md-7">
						{features.map((feature) => (
							<FeatureCard key={feature.id} feature={feature} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
