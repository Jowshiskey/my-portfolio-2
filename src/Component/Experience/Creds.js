import Job1 from "./Job1";
import Job2 from "./Job2";
import Job3 from "./Job3";
import NavBackHome from "./NavBackHome";

const Creds = () => {

	return (
		<div>
            <section>
                <div>
                    <Job1 />
                </div>
                <div>
                    <Job2 />
                </div>
                <div>
                    <Job3 />
                </div>
            </section>
            <section className="section_back">
                <NavBackHome />
            </section>
		</div>
	);
}

export default Creds;