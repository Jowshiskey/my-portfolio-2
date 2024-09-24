import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Creds from "./Component/Experience/Creds";
import WebProjects from "./Component/Experience/WebProjects";
import Imbd from "./Component/Experience/Imbd";
import ContactInfo from "./Component/ContactInfo";

const App = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/creds" element={<Creds />} />
				<Route path="/webProjects" element={<WebProjects />} />
				<Route path="/imbd" element={<Imbd />} />
				<Route path="/contact" element={<ContactInfo />} />
			</Routes>
		</Router>
	);
}

export default App;