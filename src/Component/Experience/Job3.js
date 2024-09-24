import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkills3D from "./SoftwareSkills3D";

const Job3 = () => {
    
    const lang = React.useContext(LanguageContext).lang;

    const job3Text = {
        EN : "2020 3D/VFX Graduate, BACC. I learn deep understanding of 3D software and technical artistic processes. Expertise with multiple engines and softwares and +3 years experience in AAA animation film production."
        ,FR : "Diplômer 2020 3D/VFX, BACC. Connaissances approfondis de la programmation 3D et des processus techniques et artistiques numériques. Expériences avec plusieurs engins de rendus et programmes 3D. +3 ans d’expériences dans l’industries des films d’animations 3D."
    }
    
	return (
        <div className="job_div">
        <div className="job_card_div">
            <p className="text_job_title"> 3D / Num. art</p>
            <p className="text_job_title"> NAD</p>
            <p className="text_job_title"> 2018-2020 </p>
        </div>
        <div>
            <SoftwareSkills3D />
        </div>
        <div>
            <p className="text_job_description"> {lang==="EN" ? job3Text.EN : job3Text.FR} </p>
        </div>
    </div>
	);
}

export default Job3;