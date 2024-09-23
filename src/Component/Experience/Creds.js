import { NavLink } from "react-router-dom";
import Job1 from "./Job1";
import Job2 from "./Job2";
import Job3 from "./Job3";

const Creds = () => {

	return (
		<div>
            <section>
                <div>
                    <p>g</p>
                    <Job1 />
                </div>
                <div>
                    <p>g</p>
                    <Job2 />
                </div>
                <div>
                    <p>g</p>
                    <Job3 />
                </div>
            </section>
            <section className="section_back">
                <NavLink to="/">
                    <div className="page_back">
                        <h1 className="text_page"> Back to Home</h1>
                    </div>
                </NavLink>
            </section>
		</div>
	);
}

export default Creds;