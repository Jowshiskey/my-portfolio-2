import Web1 from "./Web1";
import Web2 from "./Web2";
import NavBackHome from "./NavBackHome";

const WebProjects = () => {

	return (
		<div>
            <section>
                <div >
                    <Web1 />
                </div>
                <div>
                    <Web2 />
                </div>
            </section>
            <section>
                <NavBackHome />
            </section>
		</div>
	);
}

export default WebProjects;