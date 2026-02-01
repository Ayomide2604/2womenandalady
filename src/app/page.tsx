import Hero from "./Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
	return (
		<>
			<div className="header home">
				<Hero />
			</div>
			<About />
			<Services />
			<Features />
			<Pricing />
			<Testimonials />
		</>
	);
}
