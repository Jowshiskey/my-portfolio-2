import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkillsAWS from "./SoftwareSkillsAWS";


const Job2 = () => {

    const lang = React.useContext(LanguageContext).lang;

    const job2Text = {
        EN : " Generic knowledge of Amazon SaaS, IAM Roles Management, Amazon S3 bucket API, SnS notifications, MFA securities and Instance deployment. " 
        ,FR : "Connaissances certifiées avec les services Amazon. Installation des services IAM rôles management, Amazon S3 bucket Storage, SnS notifications personnalisées, services de sécurité Identification Multiple, MFA & Gestion et déploiement d’instances. "
    }

	return (
        <div className="job_div">
        <div className="job_card_div">
            <p className="text_job_title"> AWS</p>
            <p className="text_job_title"> Cloud practitionner</p>
            <p className="text_job_title"> 2024 </p>
        </div>
        <div>
            <SoftwareSkillsAWS />
        </div>
        <div>
            <p className="text_job_description"> {lang==="EN" ? job2Text.EN : job2Text.FR}</p>
        </div>
    </div>
	);
}

export default Job2;