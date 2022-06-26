
import Teams from "./components/teams";
import Roster from "./components/roster";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {createRoot} from 'react-dom/client';


let App = () => {

	const rootElement = document.getElementById('root');
	const root = createRoot(rootElement);

	root.render(
		<BrowserRouter>
		  <Routes>
			  <Route path="/teams" element={<Teams />}>
			  </Route>
			  <Route path="/roster/:name/:id" element={<Roster />}>
			  </Route>
		  </Routes>
		</BrowserRouter>
	  );

}

export default App;