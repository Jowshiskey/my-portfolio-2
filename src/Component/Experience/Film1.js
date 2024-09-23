import SoftwareSkills3D from "./SoftwareSkills3D";

const Film1 = () => {

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
                <p className="text_job_description"> Create stunning 3D FX simulation for Animation film. Render Visual Pyro, fluid, cloth, rigid body and particles simulation for #1 box office animation Film production.</p>
            </div>
		</div>
	)
}

export default Film1;