import { NavLink } from "react-router-dom";

import Film1 from "./Film1";

const Imbd = () => {

	return (
		<div>
            <section>
            <div>
                    <p>g</p>
                    <Film1 />
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

export default Imbd;