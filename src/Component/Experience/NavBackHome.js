import React from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

const NavBackHome = () => {

    const lang = React.useContext(LanguageContext).lang;

	return (
        <NavLink to="/">
            <div className="page_back">
                <h1 className="text_page"> {lang==="EN" ? "Back to Home" : "Retour à l'acceuil"}</h1>
            </div>
        </NavLink>
	);
}

export default NavBackHome;