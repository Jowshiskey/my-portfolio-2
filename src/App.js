import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Home Page/Home";

const App = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/aboutme" element={<AboutMe />} />
				<Route path="/myprojects" element={<MyProject />} />
                <Route path="/contact" element={<ContactMe />} />
				<Route path="*" element={"404 page not found"} /> */}
			</Routes>
		</Router>
	);
}

export default App;