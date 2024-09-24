import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkillsWeb2 from "./SoftwareSkillsWeb2";

const Web2 = () => {

    const lang = React.useContext(LanguageContext).lang;

    const eCommerceText = {
		FR : "Projet de Group : Projet de commerce en ligne. REACT  " ,
		EN : "Group Project : Fullstack project of eCommerce plateform."
	}

	return (
		<div className="job_div">
            <div className="job_card_div">
                <p className="text_job_title"> Flex-Watch</p>
                <p className="text_job_title"> co.</p>
                <p className="text_job_title"> 2024 </p>
            </div>
            <div className="software4">
            <SoftwareSkillsWeb2 />
            </div>
            <div>
                <p className="text_job_description"> {lang==="EN" ? eCommerceText.EN : eCommerceText.FR}</p>
            </div>
		</div>
	)
}

export default Web2;