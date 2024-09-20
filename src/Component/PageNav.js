import { NavLink } from "react-router-dom";

const PageNav = () => {

	return (
		<div className="pageNav_div">
            <ul className="page_list">
                <li className="page">
                    <NavLink to="/">
                    <h1 className="text_page">Credentials</h1>
                    <p className="text_page_description"> Schools and formations Creds</p>
                    </NavLink>
                </li>
                <li className="page">
                    <h1 className="text_page">Project</h1>
                    <p className="text_page_description"> web dev project</p>
                </li>
                <li className="page">
                    <h1 className="text_page">Project</h1>
                    <p className="text_page_description"> web dev project</p>
                </li>
            </ul>
		</div>
	);
}

export default PageNav;