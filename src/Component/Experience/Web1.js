import SoftwareSkillsWeb from "./SoftwareSkillsWeb";

const Web1 = () => {

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
                <p className="text_job_description"> Free web Poster generator for lost animals with Canvas HTML and REACT social platform to gather and share informations on whereabouts of potential lost or missing cats around Montreal with Google map API. </p>
            </div>
		</div>
	)
}

export default Web1;