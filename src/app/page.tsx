import Hero from "./Hero";
import About from "./sections/About";
import Services from "./sections/Services";

export default function Home() {
	return (
		<>
			<div className="header home">
				<Hero />
			</div>
			<About />
			<Services />
		</>
	);
}
