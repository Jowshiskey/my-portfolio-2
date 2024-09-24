import React from "react";
import { LanguageContext } from "../Context/LanguageContext";

const BriefIntro = () => {
    
    const lang = React.useContext(LanguageContext).lang;

    const introText = {
        EN : "I'm a web devleopper from Montreal. Passionate about web services and 3D art. With the help of HTML. CSS. JavaScript. and React, I manage database and create helpful and responsive website for all kind of projects or ideas." 
        ,FR : "Je suis un devleoppeur Web de Montréal, avec l'aide de JAVAscript et REACT, je construit et entretient des applications Web afin de maximiser leur sécurité et d'assurer la stabilité de vos projets"
    }

	return (
		<div className="intro_div">
            <p className="text_intro" >{lang==="EN" ? introText.EN : introText.FR}</p>
		</div>
	);
}

export default BriefIntro;