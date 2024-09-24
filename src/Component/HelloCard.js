import React from "react";
import { LanguageContext } from "../Context/LanguageContext";

const HelloCard = () => {

	const { lang,setLang } = React.useContext(LanguageContext);

	const mainH3 = {
        EN : "I'm a creative / web devleoper Based in Montreal" 
        ,FR : "Devleoppeur Web créatif de Montréal"
    }

	return (
		<div className="card_main_div">
			<div className="card_div">
				<h1 className="text" style={{fontSize:"45px"}}>JOEL BRAULT</h1>
				<p className="text">{lang==="EN" ? mainH3.EN : mainH3.FR}</p>
			</div>
			<div className="frEnDiv">
                    <button className="frBtn" onClick={(e=>{setLang("FR")})} ><h1 className="frBtn">FR</h1></button>
                    <h2 className="separator">---</h2>
                    <button className="enBtn"  onClick={(e=>{setLang("EN")})}><h1 className="enBtn">EN</h1></button>
            </div>
		</div>
	);
}

export default HelloCard;