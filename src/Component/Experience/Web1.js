import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkillsWeb from "./SoftwareSkillsWeb";

const Web1 = () => {

    const lang = React.useContext(LanguageContext).lang;

    const Web1Text = {
        EN : "Free web Poster generator for lost animals with Canvas HTML and REACT social platform to gather and share informations on whereabouts of potential lost or missing cats around Montreal with Google map API." 
        ,FR : "Project Fullstack avec MongoDB et express. Création d'un site web qui aide les utilisateurs à générer des affiches pour retrouver leur animaux perdus. gratuitement, facilement et rapidement. Google map API, Canvas & REACT"
    }

	return (
		<div className="job_div">
            <div className="job_card_div">
                <p className="text_job_title"> Lost Cat of Montreal</p>
                <p className="text_job_title"> Personnal</p>
                <p className="text_job_title"> 2024 </p>
            </div>
            <div>
                <SoftwareSkillsWeb />
            </div>
            <div>
                <p className="text_job_description">{lang==="EN" ? Web1Text.EN : Web1Text.FR}  </p>
            </div>
		</div>
	)
}

export default Web1;