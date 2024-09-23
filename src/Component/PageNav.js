import { NavLink } from "react-router-dom";

const PageNav = () => {

	return (
		<div className="pageNav_div">
            <ul className="page_list">
                <li className="page">
                    <NavLink to="/creds">
                    <h1 className="text_page">Credentials</h1>
                    <p className="text_page_description"> Schools and formations Creds</p>
                    </NavLink>
                </li>
                <li className="page">
                    <NavLink to="/webProjects">
                    <h1 className="text_page">WEB Project</h1>
                    <p className="text_page_description"> web dev project / contract</p>
                    </NavLink>
                </li>
                <li className="page">
                    <NavLink to="/imbd">
                    <h1 className="text_page">3D Project</h1>
                    <p className="text_page_description"> 3D art project / production</p>
                    </NavLink>
                </li>
            </ul>
		</div>
	);
}

export default PageNav;