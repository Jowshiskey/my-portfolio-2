import BriefIntro from "./BriefIntro";
import ContactMe from "./ContactMe";
import HelloCard from "./HelloCard";
import PageNav from "./PageNav";

const Home = () => {

	return (
		<div>
			<section>
				<HelloCard />
			</section>
			<section>
				<BriefIntro />
			</section>
			<section>
				<PageNav />
			</section>
			<section>
				<ContactMe />
			</section>
		</div>
	);
}

export default Home;