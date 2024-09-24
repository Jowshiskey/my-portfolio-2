import React from "react"; 
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkills from "./SoftwareSkills";

const Job1 = () => {

    const lang = React.useContext(LanguageContext).lang;

    const job1Text = {
        EN : "From the client-side FrontEnd to the server BackEnd, I learn to create, deploy, and manage RESTful websites through the M.E.R.N stack. Focusing on the ability to deliver stable and functional web applications and services. " 
        ,FR : "Maitrise de création de site web avec M.E.R.N. Gestion des serveurs de donnée avec le protocole RESTful API. Capacité à compléter et maintenir des site web stable et fonctionnel."
    }

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
                <p className="text_job_description"> {lang==="EN" ? job1Text.EN : job1Text.FR}</p>
            </div>
		</div>
	)
}

export default Job1;