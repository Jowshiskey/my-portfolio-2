import { NavLink } from "react-router-dom";
import React from "react";
import { LanguageContext } from "../Context/LanguageContext";

const PageNav = () => {

    const lang = React.useContext(LanguageContext).lang;

	return (
		<div className="pageNav_div">
            <ul className="page_list">
                <li className="page">
                    <NavLink to="/creds">
                    <h1 className="text_page">{lang==="EN" ? "Credentials" : "Attestations"}</h1>
                    <p className="text_page_description"> {lang==="EN" ? "Schools and formations Creds" : "Diplômes & Formations"}</p>
                    </NavLink>
                </li>
                <li className="page">
                    <NavLink to="/webProjects">
                    <h1 className="text_page"> {lang==="EN" ? "WEB Projects" : "Projets WEB"}</h1>
                    <p className="text_page_description"> {lang==="EN" ? "web dev projects" : "web dev projets"} / contracts</p>
                    </NavLink>
                </li>
                <li className="page">
                    <NavLink to="/imbd">
                    <h1 className="text_page">{lang==="EN" ? "3D Projects" : "Projets 3D"}</h1>
                    <p className="text_page_description"> {lang==="EN" ? "3D Projects" : "Projets 3D"} / art / films</p>
                    </NavLink>
                </li>
            </ul>
		</div>
	);
}

export default PageNav;