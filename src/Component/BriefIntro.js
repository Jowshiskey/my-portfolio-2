import React from "react";
import { LanguageContext } from "../Context/LanguageContext";

const BriefIntro = () => {
    
    const lang = React.useContext(LanguageContext).lang;

    const introText = {
        EN : "I'm a web developer from Montreal. Passionate about web services and 3D art. With the help of HTML. CSS. JavaScript. and React, I manage databases and create helpful and responsive websites for various projects or ideas." 
        ,FR : "Je suis un développeur Web de Montréal, avec l'aide de JavaScript et REACT, je construis et entretiens des applications Web afin d'assurer la stabilité et de maximiser leur sécurité. "
    }

	return (
		<div className="intro_div">
            <p className="text_intro" >{lang==="EN" ? introText.EN : introText.FR}</p>
		</div>
	);
}

export default BriefIntro;