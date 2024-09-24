import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkills from "./SoftwareSkills";

const Job1 = () => {

    const lang = React.useContext(LanguageContext).lang;

	return (
		<div className="job_div">
            <div className="job_card_div">
                <p className="text_job_title"> Concordia</p>
                <p className="text_job_title"> web Dev Bootcamp</p>
                <p className="text_job_title"> 2024 </p>
            </div>
            <div>
                <SoftwareSkills />
            </div>
            <div>
                <p className="text_job_description"> {lang==="EN" ? "From client-side FrontEnd to the servers BackEnd, I learn to create, deploy and manage RESTful website through M.E.R.N stack. Focusing on the ability to deliver stable and functionnal web application and services. " : "Projets 3D"}</p>
            </div>
		</div>
	)
}

export default Job1;