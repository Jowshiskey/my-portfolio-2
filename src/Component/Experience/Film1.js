import React from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import SoftwareSkills3D from "./SoftwareSkills3D";

const Film1 = () => {

    const lang = React.useContext(LanguageContext).lang;

    const FXText = {
		EN : "For the last 3 years, I've been working on multiple kids' tv shows and Animation films as an FX artist, creating stunning 3D FX simulations for a renowned production studio in my Hometown: Montreal.",
		FR : "Au cours des dernières années, j'ai eu la chance de travailler sur des séries télé pour enfant ainsi que des films d'animation en tant que FX artist."
	}

	return (
		<div className="job_div">
            <div className="job_card_div">
                <p className="text_job_title"> Mikros Animation</p>
                <p className="text_job_title">  3D FX Artist</p>
                <p className="text_job_title"> 2020-2023 </p>
            </div>
            <div>
                <ul className="imbdUl">
                    <li className="movie2"><img src="./././asset/PAWPATROL.jpg" alt="" className="movieImg"></img></li>
                    <li className="movie3"><img src="./././asset/TIGERAPPRENTICE.jpg" alt="" className="movieImg"></img></li>
                    <li className="movie1"><img  src="./././asset/TOTS.jpg" alt="" className="movieImg"></img></li>
                </ul>
            </div>
            <div>
                <SoftwareSkills3D />
            </div>
            <div>
                <p className="text_job_description"> {lang==="EN" ? FXText.EN : FXText.FR}</p>
            </div>
		</div>
	)
}

export default Film1;