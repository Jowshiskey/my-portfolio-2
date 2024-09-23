import { NavLink } from "react-router-dom";
import Web1 from "./Web1";
import Web2 from "./Web2";

const WebProjects = () => {

	return (
		<div>
            <section>
                <div>
                    <p>g</p>
                    <Web1 />
                </div>
                <div>
                    <p>g</p>
                    <Web2 />
                </div>
            </section>
            <section>
                <NavLink to="/">
                    <div className="page_back">
                        <h1 className="text_page"> Back to Home</h1>
                    </div>
                </NavLink>
            </section>
		</div>
	);
}

export default WebProjects;